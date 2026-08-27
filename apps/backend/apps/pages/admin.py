from django.contrib import admin
from .models import FAQ, Page


@admin.register(Page)
class PageAdmin(admin.ModelAdmin):
    list_display = ("title", "slug", "status", "published_at", "updated_at")
    list_filter = ("status", "created_at", "published_at")
    search_fields = ("title", "content", "slug")
    prepopulated_fields = {"slug": ("title",)}


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ("question", "category", "sort_order", "is_active")
    list_filter = ("category", "is_active")
    search_fields = ("question", "answer")
    list_editable = ("sort_order", "is_active")