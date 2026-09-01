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
            "id",
            "title",
            "slug",
            "category",
            "short_description",
            "description",
            "age_min",
            "age_max",
            "grade_min",
            "grade_max",
            "duration",
            "schedule",
            "location",
            "delivery_method",
            "fee",
            "currency",
            "prerequisites",
            "objectives",
            "curriculum_overview",
            "image",
            "status",
            "featured",
            "published_at",
            "created_at",
            "updated_at",
        )