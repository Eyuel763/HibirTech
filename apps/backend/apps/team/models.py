from django.db import models
from apps.core.models import TimeStampedUUIDModel


class TeamMember(TimeStampedUUIDModel):
    """Public employee, leader, or instructor profile model[cite: 1]."""

    name = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True, db_index=True)
    position = models.CharField(max_length=255)
    biography = models.TextField(blank=True)
    expertise = models.CharField(
        max_length=500,
        blank=True,
        help_text="Comma-separated expertise list",
    )
    qualifications = models.TextField(blank=True)
    profile_image = models.CharField(max_length=500, blank=True)  # File URL / Key
    email = models.EmailField(blank=True)
    linkedin_url = models.URLField(max_length=500, blank=True)
    website_url = models.URLField(max_length=500, blank=True)
    sort_order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["sort_order", "name"]

    def __str__(self):
        return f"{self.name} - {self.position}"