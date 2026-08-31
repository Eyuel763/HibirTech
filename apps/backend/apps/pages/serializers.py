from rest_framework import serializers
from .models import FAQ, Page


class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = (
            "id",
            "title",
            "slug",
            "content",
            "meta_title",
            "meta_description",
            "published_at",
            "updated_at",
        )


class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = (
            "id",
            "question",
            "answer",
            "category",
            "sort_order",
        )