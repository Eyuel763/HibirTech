from django.contrib import admin
from .models import TeamMember


@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "position",
        "email",
        "sort_order",
        "is_active",
    )
    list_filter = ("is_active", "created_at")
    search_fields = ("name", "position", "expertise", "email")
    prepopulated_fields = {"slug": ("name",)}
    list_editable = ("sort_order", "is_active")
    readonly_fields = ("created_at", "updated_at")

    fieldsets = (
        (
            "Personal & Role Details",
            {
                "fields": (
                    "name",
                    "slug",
                    "position",
                    "biography",
                    "expertise",
                    "qualifications",
                )
            },
        ),
        (
            "Contact & Profiles",
            {
                "fields": (
                    "profile_image",
                    "email",
                    "linkedin_url",
                    "website_url",
                )
            },
        ),
        (
            "Display Settings",
            {
                "fields": (
                    "sort_order",
                    "is_active",
                    "created_at",
                    "updated_at",
                )
            },
        ),
    )