from django.db import models
from apps.core.models import TimeStampedUUIDModel


class Page(TimeStampedUUIDModel):
    """CMS-managed public pages model[cite: 1]."""

    STATUS_CHOICES = (
        ("draft", "Draft"),
        ("published", "Published"),
        ("archived", "Archived"),
    )

    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True, db_index=True)
    excerpt = models.TextField(blank=True)
    content = models.TextField()
    meta_title = models.CharField(max_length=255, blank=True)
    meta_description = models.TextField(blank=True)
    status = models.CharField(
        max_length=20, choices=STATUS_CHOICES, default="draft", db_index=True
    )
    published_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title


class FAQ(TimeStampedUUIDModel):
    """Platform Frequently Asked Questions model[cite: 1]."""

    question = models.CharField(max_length=500)
    answer = models.TextField()
    category = models.CharField(
        max_length=100,
        default="general",
        db_index=True,
        help_text="Category group e.g., general, academy, admissions",
    )
    sort_order = models.PositiveIntegerField(default=0, db_index=True)
    is_active = models.BooleanField(default=True, db_index=True)

    class Meta:
        verbose_name = "FAQ"
        verbose_name_plural = "FAQs"
        ordering = ["sort_order", "created_at"]
        indexes = [
            models.Index(fields=["category"]),
            models.Index(fields=["is_active"]),
            models.Index(fields=["sort_order"]),
        ]

    def __str__(self):
        return self.question