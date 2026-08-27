from django.contrib import admin
from .models import Project, ProjectCategory, ProjectMedia


class ProjectMediaInline(admin.TabularInline):
    model = ProjectMedia
    extra = 1


@admin.register(ProjectCategory)
class ProjectCategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "slug", "is_active", "created_at")
    list_filter = ("is_active",)
    search_fields = ("name", "description")
    prepopulated_fields = {"slug": ("name",)}


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
    search_fields = ("title", "description", "technologies")
    prepopulated_fields = {"slug": ("title",)}
    inlines = [ProjectMediaInline]
    list_editable = ("status", "featured")