from django.contrib import admin
from .models import Event, EventCategory, EventRegistrationInterest


@admin.register(EventCategory)
class EventCategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "slug", "is_active", "created_at")
    list_filter = ("is_active",)
    search_fields = ("name", "description")
    prepopulated_fields = {"slug": ("name",)}
    list_editable = ("is_active",)


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "category",
        "start_datetime",
        "end_datetime",
        "status",
        "featured",
    )
    list_filter = ("status", "featured", "category", "start_datetime")
    search_fields = ("title", "description", "location")
    prepopulated_fields = {"slug": ("title",)}
    list_editable = ("status", "featured")
    date_hierarchy = "start_datetime"
    readonly_fields = ("created_at", "updated_at")
    actions = ["make_published", "make_archived"]

    fieldsets = (
        (
            "Event Information",
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
            "Schedule & Location",
            {
                "fields": (
                    "start_datetime",
                    "end_datetime",
                    "location",
                    "is_virtual",
                    "registration_link",
                )
            },
        ),
        (
            "Media",
            {
                "fields": ("featured_image",)
            },
        ),
        (
            "Publishing & Visibility",
            {
                "fields": (
                    "status",
                    "featured",
                    "created_at",
                    "updated_at",
                )
            },
        ),
    )

    @admin.action(description="Mark selected events as Published")
    def make_published(self, request, queryset):
        queryset.update(status="published")

    @admin.action(description="Mark selected events as Archived")
    def make_archived(self, request, queryset):
        queryset.update(status="archived")


@admin.register(EventRegistrationInterest)
class EventRegistrationInterestAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "email",
        "phone",
        "event",
        "status",
        "created_at",
    )
    list_filter = ("status", "created_at", "event")
    search_fields = ("name", "email", "phone", "message")
    list_editable = ("status",)
    readonly_fields = ("created_at", "updated_at")