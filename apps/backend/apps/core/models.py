import uuid
from django.db import models


class TimeStampedUUIDModel(models.Model):
    """Abstract base model providing UUID primary key and timestamp fields."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class SiteSettings(TimeStampedUUIDModel):
    """Global website configuration model."""

    company_name = models.CharField(max_length=255, default="Hibir Technologies")
    tagline = models.CharField(max_length=255, blank=True)
    description = models.TextField(blank=True)
    logo = models.CharField(max_length=500, blank=True)  # File URL / Key
    favicon = models.CharField(max_length=500, blank=True)
    email = models.EmailField(blank=True)
    phone = models.CharField(max_length=50, blank=True)
    address = models.TextField(blank=True)
    google_maps_url = models.URLField(max_length=500, blank=True)
    facebook_url = models.URLField(max_length=500, blank=True)
    instagram_url = models.URLField(max_length=500, blank=True)
    linkedin_url = models.URLField(max_length=500, blank=True)
    youtube_url = models.URLField(max_length=500, blank=True)
    twitter_url = models.URLField(max_length=500, blank=True)
    default_meta_title = models.CharField(max_length=255, blank=True)
    default_meta_description = models.TextField(blank=True)

    class Meta:
        verbose_name = "Site Settings"
        verbose_name_plural = "Site Settings"

    def __str__(self):
        return self.company_name