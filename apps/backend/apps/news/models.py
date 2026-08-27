from django.conf import settings
from django.db import models
from apps.core.models import TimeStampedUUIDModel


class NewsCategory(TimeStampedUUIDModel):
    """Taxonomy categories for news and blog articles."""

    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True, db_index=True)
    description = models.TextField(blank=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = "News Categories"
        ordering = ["name"]

    def __str__(self):
        return self.name


class NewsArticle(TimeStampedUUIDModel):
    """Corporate news and blog article model."""

    STATUS_CHOICES = (
        ("draft", "Draft"),
        ("published", "Published"),
        ("archived", "Archived"),
    )

    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True, db_index=True)
    excerpt = models.TextField()
    content = models.TextField()
    category = models.ForeignKey(
        NewsCategory,
        on_delete=models.PROTECT,
        related_name="articles",
    )
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="news_articles",
    )
    featured_image = models.CharField(max_length=500, blank=True)  # File URL / Key
    status = models.CharField(
        max_length=20, choices=STATUS_CHOICES, default="draft", db_index=True
    )
    featured = models.BooleanField(default=False, db_index=True)
    published_at = models.DateTimeField(null=True, blank=True, db_index=True)

    class Meta:
        ordering = ["-published_at", "-created_at"]
        indexes = [
            models.Index(fields=["slug"]),
            models.Index(fields=["category"]),
            models.Index(fields=["status"]),
            models.Index(fields=["featured"]),
            models.Index(fields=["published_at"]),
        ]

    def __str__(self):
        return self.title