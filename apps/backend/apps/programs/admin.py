from django.contrib import admin
from .models import Program, ProgramCategory


@admin.register(ProgramCategory)
class ProgramCategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "slug", "is_active", "created_at")
    list_filter = ("is_active",)
    search_fields = ("name", "description")
    prepopulated_fields = {"slug": ("name",)}
    list_editable = ("is_active",)


@admin.register(Program)
class ProgramAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "category",
        "delivery_method",
        "status",
        "featured",
        "published_at",
    )
    list_filter = (
        "status",
        "featured",
        "delivery_method",
        "category",
        "created_at",
    )
    search_fields = ("title", "description", "short_description")
    prepopulated_fields = {"slug": ("title",)}
    list_editable = ("status", "featured")
    readonly_fields = ("created_at", "updated_at")
    actions = ["make_published", "make_archived"]

    fieldsets = (
        (
            "Program Details",
            {
                "fields": (
                    "title",
                    "slug",
                    "category",
                    "short_description",
                    "description",
                )
            },
        ),
        (
            "Target Audience & Delivery",
            {
                "fields": (
                    "age_group",
                    "delivery_method",
                    "duration",
                    "prerequisites",
                )
            },
        ),
        (
            "Media & Pricing",
            {
                "fields": ("featured_image", "price_info")
            },
        ),
        (
            "Publishing & Visibility",
            {
                "fields": (
                    "status",
                    "featured",
                    "published_at",
                    "created_at",
                    "updated_at",
                )
            },
        ),
    )

    @admin.action(description="Mark selected programs as Published")
    def make_published(self, request, queryset):
        queryset.update(status="published")

    @admin.action(description="Mark selected programs as Archived")
    def make_archived(self, request, queryset):
        queryset.update(status="archived")