from rest_framework import serializers
from .models import TeamMember


class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = (
            "id",
            "name",
            "slug",
            "position",
            "biography",
            "expertise",
            "qualifications",
            "profile_image",
            "email",
            "linkedin_url",
            "website_url",
            "sort_order",
        )