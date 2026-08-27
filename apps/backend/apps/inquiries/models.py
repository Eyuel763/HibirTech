from django.db import models
from apps.core.models import TimeStampedUUIDModel
from apps.programs.models import Program


class Inquiry(TimeStampedUUIDModel):
    """General contact inquiries model."""

    TYPE_CHOICES = (
        ("general", "General"),
        ("program", "Program"),
        ("event", "Event"),
        ("school", "School"),
        ("partnership", "Partnership"),
        ("other", "Other"),
    )

    STATUS_CHOICES = (
        ("new", "New"),
        ("read", "Read"),
        ("in_progress", "In Progress"),
        ("resolved", "Resolved"),
        ("spam", "Spam"),
        ("archived", "Archived"),
    )

    type = models.CharField(
        max_length=20, choices=TYPE_CHOICES, default="general", db_index=True
    )
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=50, blank=True)
    subject = models.CharField(max_length=255, blank=True)
    message = models.TextField()
    status = models.CharField(
        max_length=20, choices=STATUS_CHOICES, default="new", db_index=True
    )
    source = models.CharField(max_length=255, blank=True)

    class Meta:
        verbose_name_plural = "Inquiries"
        ordering = ["-created_at"]
        indexes = [
            models.Index(fields=["status"]),
            models.Index(fields=["type"]),
            models.Index(fields=["created_at"]),
        ]

    def __str__(self):
        return f"{self.name} - {self.subject or self.type}"


class ProgramInquiry(TimeStampedUUIDModel):
    """Program application and prospective student inquiry model."""

    STATUS_CHOICES = (
        ("new", "New"),
        ("contacted", "Contacted"),
        ("in_progress", "In Progress"),
        ("completed", "Completed"),
        ("cancelled", "Cancelled"),
    )

    program = models.ForeignKey(
        Program,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="inquiries",
    )
    parent_name = models.CharField(max_length=255)
    student_name = models.CharField(max_length=255)
    student_age = models.PositiveIntegerField(null=True, blank=True)
    student_grade = models.PositiveIntegerField(null=True, blank=True)
    email = models.EmailField()
    phone = models.CharField(max_length=50)
    preferred_schedule = models.CharField(max_length=255, blank=True)
    message = models.TextField(blank=True)
    status = models.CharField(
        max_length=20, choices=STATUS_CHOICES, default="new", db_index=True
    )

    class Meta:
        verbose_name_plural = "Program Inquiries"
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.parent_name} - {self.student_name}"


class SchoolInquiry(TimeStampedUUIDModel):
    """School and institutional partnership requests model[cite: 1]."""

    ORGANIZATION_TYPE_CHOICES = (
        ("school", "School"),
        ("university", "University"),
        ("ngo", "NGO"),
        ("government", "Government"),
        ("company", "Company"),
        ("other", "Other"),
    )

    STATUS_CHOICES = (
        ("new", "New"),
        ("contacted", "Contacted"),
        ("in_progress", "In Progress"),
        ("completed", "Completed"),
        ("cancelled", "Cancelled"),
    )

    organization_name = models.CharField(max_length=255)
    organization_type = models.CharField(
        max_length=20,
        choices=ORGANIZATION_TYPE_CHOICES,
        default="school",
    )
    contact_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=50)
    location = models.CharField(max_length=255, blank=True)
    website = models.URLField(max_length=500, blank=True)
    area_of_interest = models.TextField(blank=True)
    message = models.TextField(blank=True)
    status = models.CharField(
        max_length=20, choices=STATUS_CHOICES, default="new", db_index=True
    )

    class Meta:
        verbose_name_plural = "School Inquiries"
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.organization_name} - {self.contact_name}"