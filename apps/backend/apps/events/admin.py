from django.contrib import admin
from .models import Event, EventCategory, EventRegistrationInterest


@admin.register(EventCategory)
class EventCategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "slug", "is_active", "created_at")
    list_filter = ("is_active",)
    search_fields = ("name", "description")
    prepopulated_fields = {"slug": ("name",)}


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "category",
        "start_datetime",
        "status",
        "featured",
    )
    list_filter = ("status", "featured", "category", "start_datetime")
    search_fields = ("title", "description", "location")
    prepopulated_fields = {"slug": ("title",)}
    list_editable = ("status", "featured")


@admin.register(EventRegistrationInterest)
class EventRegistrationInterestAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "event", "status", "created_at")
    list_filter = ("status", "created_at")
    search_fields = ("name", "email", "message")