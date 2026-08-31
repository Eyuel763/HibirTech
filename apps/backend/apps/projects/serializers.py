from rest_framework import serializers
from .models import Project, ProjectCategory, ProjectMedia

class ProjectCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectCategory
        fields = ("id", "name", "slug", "description")

class ProjectMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectMedia
        fields = ("id", "file_url", "caption", "sort_order")

class ProjectSerializer(serializers.ModelSerializer):
    category = ProjectCategorySerializer(read_only=True)
    media_gallery = ProjectMediaSerializer(source="projectmedia_set", many=True, read_only=True)

    class Meta:
        model = Project
        fields = (
            "id", "title", "slug", "category", "client_name",
            "short_description", "description", "technologies",
            "project_url", "github_url", "project_date",
            "featured_image", "featured", "media_gallery",
        )