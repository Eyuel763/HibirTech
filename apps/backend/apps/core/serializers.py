from rest_framework import serializers
from .models import SiteSettings


class SiteSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteSettings
        fields = (
            "company_name",
            "tagline",
            "description",
            "logo",
            "favicon",
            "email",
            "phone",
            "address",
            "google_maps_url",
            "facebook_url",
            "instagram_url",
            "linkedin_url",
            "youtube_url",
            "twitter_url",
            "default_meta_title",
            "default_meta_description",
            "updated_at",
        )