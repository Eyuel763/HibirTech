from rest_framework import serializers
from .models import Project, ProjectCategory, ProjectMedia


class ProjectCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectCategory
        fields = ("id", "name", "slug", "description")


class ProjectMediaSerializer(serializers.ModelSerializer):
    media_url = serializers.CharField(source="media.file.url", read_only=True)

    class Meta:
        model = ProjectMedia
        fields = ("id", "media", "media_url", "caption", "sort_order", "is_featured")


class ProjectSerializer(serializers.ModelSerializer):
    category = ProjectCategorySerializer(read_only=True)
    media_gallery = ProjectMediaSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = (
            "id",
            "title",
            "slug",
            "category",
            "short_description",
            "description",
            "problem_statement",
            "solution",
            "technologies",
            "project_date",
            "results",
            "impact",
            "featured",
            "status",
            "media_gallery",
            "created_at",
            "updated_at",
        )