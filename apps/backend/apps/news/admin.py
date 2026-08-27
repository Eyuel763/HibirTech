from django.contrib import admin
from .models import NewsArticle, NewsCategory


@admin.register(NewsCategory)
class NewsCategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "slug", "is_active", "created_at")
    list_filter = ("is_active",)
    search_fields = ("name", "description")
    prepopulated_fields = {"slug": ("name",)}
    list_editable = ("is_active",)


@admin.register(NewsArticle)
class NewsArticleAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "category",
        "author",
        "status",
        "featured",
        "published_at",
    )
    list_filter = ("status", "featured", "category", "published_at")
    search_fields = ("title", "content", "excerpt")
    prepopulated_fields = {"slug": ("title",)}
    list_editable = ("status", "featured")
    date_hierarchy = "published_at"
    readonly_fields = ("created_at", "updated_at")
    actions = ["make_published", "make_archived"]

    fieldsets = (
        (
            "Article Overview",
            {
                "fields": (
                    "title",
                    "slug",
                    "category",
                    "author",
                    "excerpt",
                    "content",
                )
            },
        ),
        (
            "Media & Coverage",
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
                    "published_at",
                    "created_at",
                    "updated_at",
                )
            },
        ),
    )

    @admin.action(description="Mark selected articles as Published")
    def make_published(self, request, queryset):
        queryset.update(status="published")

    @admin.action(description="Mark selected articles as Archived")
    def make_archived(self, request, queryset):
        queryset.update(status="archived")