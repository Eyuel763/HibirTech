from django.contrib import admin
from .models import MediaAsset


@admin.register(MediaAsset)
class MediaAssetAdmin(admin.ModelAdmin):
    list_display = ("name", "mime_type", "file_size", "created_at")
    search_fields = ("name", "storage_key", "alt_text")
    readonly_fields = ("file_size", "mime_type", "width", "height")