from django.contrib import admin
from .models import Inquiry, ProgramInquiry, SchoolInquiry


@admin.register(Inquiry)
class InquiryAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "type", "status", "created_at")
    list_filter = ("type", "status", "created_at")
    search_fields = ("name", "email", "subject", "message")


@admin.register(ProgramInquiry)
class ProgramInquiryAdmin(admin.ModelAdmin):
    list_display = (
        "parent_name",
        "student_name",
        "program",
        "status",
        "created_at",
    )
    list_filter = ("status", "created_at", "program")
    search_fields = ("parent_name", "student_name", "email", "phone")


@admin.register(SchoolInquiry)
class SchoolInquiryAdmin(admin.ModelAdmin):
    list_display = (
        "organization_name",
        "contact_name",
        "organization_type",
        "status",
        "created_at",
    )
    list_filter = ("organization_type", "status", "created_at")
    search_fields = ("organization_name", "contact_name", "email", "phone")