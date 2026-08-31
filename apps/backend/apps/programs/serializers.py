from rest_framework import serializers
from .models import Program, ProgramCategory

class ProgramCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgramCategory
        fields = ("id", "name", "slug", "description")

class ProgramSerializer(serializers.ModelSerializer):
    category = ProgramCategorySerializer(read_only=True)

    class Meta:
        model = Program
        fields = (
            "id", "title", "slug", "category", "short_description",
            "description", "age_group", "delivery_method", "duration",
            "prerequisites", "featured_image", "price_info",
            "featured", "published_at",
        )