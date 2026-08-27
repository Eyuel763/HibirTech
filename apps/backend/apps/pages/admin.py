from django.contrib import admin
from .models import FAQ, Page


@admin.register(Page)
class PageAdmin(admin.ModelAdmin):
    list_display = ("title", "slug", "status", "published_at", "updated_at")
    list_filter = ("status", "created_at", "published_at")
    search_fields = ("title", "content", "slug")
    prepopulated_fields = {"slug": ("title",)}
    list_editable = ("status",)
    readonly_fields = ("created_at", "updated_at")
    actions = ["make_published", "make_archived"]

    fieldsets = (
        (
            "Page Details",
            {
                "fields": (
                    "title",
                    "slug",
                    "content",
                )
            },
        ),
        (
            "SEO Meta Attributes",
            {
                "fields": (
                    "meta_title",
                    "meta_description",
                )
            },
        ),
        (
            "Publishing & Visibility",
            {
                "fields": (
                    "status",
                    "published_at",
                    "created_at",
                    "updated_at",
                )
            },
        ),
    )

    @admin.action(description="Mark selected pages as Published")
    def make_published(self, request, queryset):
        queryset.update(status="published")

    @admin.action(description="Mark selected pages as Archived")
    def make_archived(self, request, queryset):
        queryset.update(status="archived")


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ("question", "category", "sort_order", "is_active", "updated_at")
    list_filter = ("category", "is_active", "created_at")
    search_fields = ("question", "answer")
    list_editable = ("sort_order", "is_active")
    readonly_fields = ("created_at", "updated_at")

    fieldsets = (
        (
            "Question & Answer",
            {
                "fields": (
                    "category",
                    "question",
                    "answer",
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