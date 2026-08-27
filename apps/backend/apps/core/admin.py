from django.contrib import admin
from .models import SiteSettings


@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):
    list_display = ("company_name", "email", "phone", "updated_at")
    fieldsets = (
        (
            "General Information",
            {
                "fields": (
                    "company_name",
                    "tagline",
                    "description",
                    "logo",
                    "favicon",
                )
            },
        ),
        (
            "Contact Details",
            {
                "fields": (
                    "email",
                    "phone",
                    "address",
                    "google_maps_url",
                )
            },
        ),
        (
            "Social Media Profiles",
            {
                "fields": (
                    "facebook_url",
                    "instagram_url",
                    "linkedin_url",
                    "youtube_url",
                    "twitter_url",
                )
            },
        ),
        (
            "SEO Defaults",
            {
                "fields": ("default_meta_title", "default_meta_description")
            },
        ),
    )

    def has_add_permission(self, request):
        # Prevent creating more than one instance of SiteSettings
        if self.model.objects.exists():
            return False
        return super().has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        # Prevent accidental deletion of site configurations
        return False