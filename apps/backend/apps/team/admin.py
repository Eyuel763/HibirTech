from django.contrib import admin
from .models import TeamMember


@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ("name", "position", "sort_order", "is_active")
    list_filter = ("is_active",)
    search_fields = ("name", "position", "expertise")
    prepopulated_fields = {"slug": ("name",)}
    list_editable = ("sort_order", "is_active")