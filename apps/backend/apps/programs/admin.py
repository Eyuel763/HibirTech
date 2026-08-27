from django.contrib import admin
from .models import Program, ProgramCategory


@admin.register(ProgramCategory)
class ProgramCategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "slug", "is_active", "created_at")
    list_filter = ("is_active",)
    search_fields = ("name", "description")
    prepopulated_fields = {"slug": ("name",)}


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
    list_filter = ("status", "featured", "delivery_method", "category")
    search_fields = ("title", "description", "short_description")
    prepopulated_fields = {"slug": ("title",)}
    list_editable = ("status", "featured")