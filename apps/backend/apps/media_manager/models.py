from django.db import models
from apps.core.models import TimeStampedUUIDModel


class MediaAsset(TimeStampedUUIDModel):
    """Media asset metadata model for external object storage[cite: 1]."""

    name = models.CharField(max_length=255)
    file_url = models.URLField(max_length=1000)
    storage_key = models.CharField(max_length=500, unique=True)
    mime_type = models.CharField(max_length=100)
    file_size = models.PositiveIntegerField(help_text="File size in bytes")
    width = models.PositiveIntegerField(null=True, blank=True)
    height = models.PositiveIntegerField(null=True, blank=True)
    alt_text = models.CharField(max_length=255, blank=True)
    caption = models.TextField(blank=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.name