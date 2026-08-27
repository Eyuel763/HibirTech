from django.contrib import admin
from .models import Project, ProjectCategory, ProjectMedia


class ProjectMediaInline(admin.TabularInline):
    model = ProjectMedia
    extra = 1
    fields = ("file_url", "caption", "sort_order")


@admin.register(ProjectCategory)
class ProjectCategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "slug", "is_active", "created_at")
    list_filter = ("is_active",)
    search_fields = ("name", "description")
    prepopulated_fields = {"slug": ("name",)}
    list_editable = ("is_active",)


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "category",
        "project_date",
        "status",
        "featured",
    )
    list_filter = ("status", "featured", "category", "project_date")
    search_fields = ("title", "description", "technologies", "client_name")
    prepopulated_fields = {"slug": ("title",)}
    inlines = [ProjectMediaInline]
    list_editable = ("status", "featured")
    date_hierarchy = "project_date"
    readonly_fields = ("created_at", "updated_at")
    actions = ["make_published", "make_archived"]

    fieldsets = (
        (
            "Project Overview",
            {
                "fields": (
                    "title",
                    "slug",
                    "category",
                    "client_name",
                    "short_description",
                    "description",
                )
            },
        ),
        (
            "Technical Stack & Links",
            {
                "fields": (
                    "technologies",
                    "project_url",
                    "github_url",
                    "project_date",
                )
            },
        ),
        (
            "Featured Assets",
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

    @admin.action(description="Mark selected projects as Published")
    def make_published(self, request, queryset):
        queryset.update(status="published")

    @admin.action(description="Mark selected projects as Archived")
    def make_archived(self, request, queryset):
        queryset.update(status="archived")