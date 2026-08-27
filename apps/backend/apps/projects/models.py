from django.db import models
from apps.core.models import TimeStampedUUIDModel
from apps.media_manager.models import MediaAsset


class ProjectCategory(TimeStampedUUIDModel):
    """Taxonomy categories for projects[cite: 1]."""

    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True, db_index=True)
    description = models.TextField(blank=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = "Project Categories"
        ordering = ["name"]

    def __str__(self):
        return self.name


class Project(TimeStampedUUIDModel):
    """Company or student showcase project model[cite: 1]."""

    STATUS_CHOICES = (
        ("draft", "Draft"),
        ("published", "Published"),
        ("archived", "Archived"),
    )

    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True, db_index=True)
    short_description = models.TextField()
    description = models.TextField()
    problem_statement = models.TextField(blank=True)
    solution = models.TextField(blank=True)
    category = models.ForeignKey(
        ProjectCategory,
        on_delete=models.PROTECT,
        related_name="projects",
    )
    technologies = models.CharField(
        max_length=500,
        blank=True,
        help_text="Comma-separated tech stack list",
    )
    project_date = models.DateField(null=True, blank=True, db_index=True)
    results = models.TextField(blank=True)
    impact = models.TextField(blank=True)
    featured = models.BooleanField(default=False, db_index=True)
    status = models.CharField(
        max_length=20, choices=STATUS_CHOICES, default="draft", db_index=True
    )

    class Meta:
        ordering = ["-project_date", "-created_at"]
        indexes = [
            models.Index(fields=["slug"]),
            models.Index(fields=["category"]),
            models.Index(fields=["status"]),
            models.Index(fields=["featured"]),
            models.Index(fields=["project_date"]),
        ]

    def __str__(self):
        return self.title


class ProjectMedia(TimeStampedUUIDModel):
    """Multi-media association model linking Projects to MediaAssets[cite: 1]."""

    project = models.ForeignKey(
        Project, on_delete=models.CASCADE, related_name="media_gallery"
    )
    media = models.ForeignKey(
        MediaAsset, on_delete=models.CASCADE, related_name="project_references"
    )
    caption = models.CharField(max_length=255, blank=True)
    sort_order = models.PositiveIntegerField(default=0)
    is_featured = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = "Project Media"
        ordering = ["sort_order", "created_at"]

    def __str__(self):
        return f"{self.project.title} - Media {self.sort_order}"