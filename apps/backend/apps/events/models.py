from django.db import models
from apps.core.models import TimeStampedUUIDModel


class EventCategory(TimeStampedUUIDModel):
    """Taxonomy categories for events and workshops."""

    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True, db_index=True)
    description = models.TextField(blank=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = "Event Categories"
        ordering = ["name"]

    def __str__(self):
        return self.name


class Event(TimeStampedUUIDModel):
    """Event, workshop, camp, or competition model[cite: 1]."""

    STATUS_CHOICES = (
        ("draft", "Draft"),
        ("published", "Published"),
        ("cancelled", "Cancelled"),
        ("completed", "Completed"),
    )

    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True, db_index=True)
    short_description = models.TextField()
    description = models.TextField()
    category = models.ForeignKey(
        EventCategory,
        on_delete=models.PROTECT,
        related_name="events",
    )
    start_datetime = models.DateTimeField(db_index=True)
    end_datetime = models.DateTimeField()
    location = models.CharField(max_length=255)
    target_audience = models.CharField(max_length=255, blank=True)
    registration_deadline = models.DateTimeField(
        null=True, blank=True, db_index=True
    )
    registration_url = models.URLField(max_length=500, blank=True)
    status = models.CharField(
        max_length=20, choices=STATUS_CHOICES, default="draft", db_index=True
    )
    featured = models.BooleanField(default=False)
    image = models.CharField(max_length=500, blank=True)  # File URL / Key

    class Meta:
        ordering = ["-start_datetime"]
        indexes = [
            models.Index(fields=["slug"]),
            models.Index(fields=["category"]),
            models.Index(fields=["status"]),
            models.Index(fields=["start_datetime"]),
            models.Index(fields=["registration_deadline"]),
        ]

    def __str__(self):
        return self.title

class EventRegistrationInterest(TimeStampedUUIDModel):
    """Phase 1 event interest collection model[cite: 1]."""

    STATUS_CHOICES = (
        ("new", "New"),
        ("contacted", "Contacted"),
        ("confirmed", "Confirmed"),
        ("cancelled", "Cancelled"),
    )

    event = models.ForeignKey(
        Event,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="registrations",
    )
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=50)
    participant_age = models.PositiveIntegerField(null=True, blank=True)
    message = models.TextField(blank=True)
    status = models.CharField(
        max_length=20, choices=STATUS_CHOICES, default="new", db_index=True
    )

    class Meta:
        verbose_name_plural = "Event Registration Interests"
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.name} - {self.event.title if self.event else 'General'}"