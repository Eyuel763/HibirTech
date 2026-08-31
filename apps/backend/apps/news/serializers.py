from rest_framework import serializers
from .models import NewsArticle, NewsCategory


class NewsCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsCategory
        fields = ("id", "name", "slug", "description")


class NewsArticleSerializer(serializers.ModelSerializer):
    category = NewsCategorySerializer(read_only=True)

    class Meta:
        model = NewsArticle
        fields = (
            "id",
            "title",
            "slug",
            "category",
            "author",
            "excerpt",
            "content",
            "featured_image",
            "featured",
            "published_at",
        )