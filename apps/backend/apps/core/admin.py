from django.contrib import admin
from .models import SiteSettings


@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):
    list_display = ("company_name", "email", "phone", "updated_at")

    def has_add_permission(self, request):
        # Limit to a single site settings instance
        if self.model.objects.exists():
            return False
        return super().has_add_permission(request)