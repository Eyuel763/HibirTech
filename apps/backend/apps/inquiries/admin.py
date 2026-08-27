from django.contrib import admin
from .models import Inquiry, ProgramInquiry, SchoolInquiry


@admin.register(Inquiry)
class InquiryAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "email",
        "phone",
        "type",
        "status",
        "created_at",
    )
    list_filter = ("type", "status", "created_at")
    search_fields = ("name", "email", "phone", "subject", "message")
    list_editable = ("status",)
    readonly_fields = ("created_at", "updated_at")

    fieldsets = (
        (
            "Contact Information",
            {
                "fields": (
                    "name",
                    "email",
                    "phone",
                    "type",
                )
            },
        ),
        (
            "Inquiry Content",
            {
                "fields": (
                    "subject",
                    "message",
                )
            },
        ),
        (
            "Workflow Status",
            {
                "fields": (
                    "status",
                    "created_at",
                    "updated_at",
                )
            },
        ),
    )


@admin.register(ProgramInquiry)
class ProgramInquiryAdmin(admin.ModelAdmin):
    list_display = (
        "parent_name",
        "student_name",
        "student_age",
        "program",
        "email",
        "phone",
        "status",
        "created_at",
    )
    list_filter = ("status", "program", "created_at")
    search_fields = (
        "parent_name",
        "student_name",
        "email",
        "phone",
        "message",
    )
    list_editable = ("status",)
    readonly_fields = ("created_at", "updated_at")

    fieldsets = (
        (
            "Applicant Details",
            {
                "fields": (
                    "parent_name",
                    "student_name",
                    "student_age",
                    "program",
                )
            },
        ),
        (
            "Contact Information",
            {
                "fields": (
                    "email",
                    "phone",
                    "preferred_contact_method",
                )
            },
        ),
        (
            "Additional Notes",
            {
                "fields": ("message",)
            },
        ),
        (
            "Workflow Status",
            {
                "fields": (
                    "status",
                    "created_at",
                    "updated_at",
                )
            },
        ),
    )


@admin.register(SchoolInquiry)
class SchoolInquiryAdmin(admin.ModelAdmin):
    list_display = (
        "organization_name",
        "contact_name",
        "organization_type",
        "email",
        "phone",
        "status",
        "created_at",
    )
    list_filter = ("organization_type", "status", "created_at")
    search_fields = (
        "organization_name",
        "contact_name",
        "email",
        "phone",
        "message",
    )
    list_editable = ("status",)
    readonly_fields = ("created_at", "updated_at")

    fieldsets = (
        (
            "Organization Details",
            {
                "fields": (
                    "organization_name",
                    "organization_type",
                    "estimated_students",
                )
            },
        ),
        (
            "Contact Representative",
            {
                "fields": (
                    "contact_name",
                    "email",
                    "phone",
                )
            },
        ),
        (
            "Requirement Details",
            {
                "fields": ("message",)
            },
        ),
        (
            "Workflow Status",
            {
                "fields": (
                    "status",
                    "created_at",
                    "updated_at",
                )
            },
        ),
    )