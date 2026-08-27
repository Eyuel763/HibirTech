from django.db import models
from apps.core.models import TimeStampedUUIDModel


class ProgramCategory(TimeStampedUUIDModel):
    """Taxonomy categories for STEM programs."""

    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True, db_index=True)
    description = models.TextField(blank=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = "Program Categories"
        ordering = ["name"]

    def __str__(self):
        return self.name


class Program(TimeStampedUUIDModel):
    """STEM Academy program model[cite: 1]."""

    DELIVERY_METHOD_CHOICES = (
        ("in_person", "In Person"),
        ("online", "Online"),
        ("hybrid", "Hybrid"),
    )

    STATUS_CHOICES = (
        ("draft", "Draft"),
        ("published", "Published"),
        ("archived", "Archived"),
    )

    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True, db_index=True)
    short_description = models.TextField()
    description = models.TextField()
    category = models.ForeignKey(
        ProgramCategory,
        on_delete=models.PROTECT,
        related_name="programs",
    )
    age_min = models.PositiveIntegerField(null=True, blank=True)
    age_max = models.PositiveIntegerField(null=True, blank=True)
    grade_min = models.PositiveIntegerField(null=True, blank=True)
    grade_max = models.PositiveIntegerField(null=True, blank=True)
    duration = models.CharField(max_length=100, blank=True)
    schedule = models.CharField(max_length=255, blank=True)
    location = models.CharField(max_length=255, blank=True)
    delivery_method = models.CharField(
        max_length=20,
        choices=DELIVERY_METHOD_CHOICES,
        default="in_person",
    )
    fee = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True
    )
    currency = models.CharField(max_length=10, default="ETB")
    prerequisites = models.TextField(blank=True)
    objectives = models.TextField(blank=True)
    curriculum_overview = models.TextField(blank=True)
    image = models.CharField(max_length=500, blank=True)  # File URL / Key
    status = models.CharField(
        max_length=20, choices=STATUS_CHOICES, default="draft", db_index=True
    )
    featured = models.BooleanField(default=False, db_index=True)
    published_at = models.DateTimeField(null=True, blank=True, db_index=True)

    class Meta:
        ordering = ["-created_at"]
        indexes = [
            models.Index(fields=["slug"]),
            models.Index(fields=["status"]),
            models.Index(fields=["featured"]),
            models.Index(fields=["category"]),
            models.Index(fields=["published_at"]),
        ]

    def __str__(self):
        return self.title