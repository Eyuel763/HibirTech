from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import NewsArticle, NewsCategory

User = get_user_model()


class AuthorSerializer(serializers.ModelSerializer):
    """Minimal author representation for articles."""
    full_name = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ("id", "username", "full_name")

    def get_full_name(self, obj):
        return f"{obj.first_name} {obj.last_name}".strip() or obj.username


class NewsCategorySerializer(serializers.ModelSerializer):
    article_count = serializers.IntegerField(source='articles.count', read_only=True)

    class Meta:
        model = NewsCategory
        fields = ("id", "name", "slug", "description", "article_count")


class NewsArticleListSerializer(serializers.ModelSerializer):
    """Lightweight serializer for index grid, cards, and list views."""
    category = NewsCategorySerializer(read_only=True)
    author = AuthorSerializer(read_only=True)

    class Meta:
        model = NewsArticle
        fields = (
            "id",
            "title",
            "slug",
            "category",
            "author",
            "excerpt",
            "featured_image",
            "featured",
            "published_at",
        )


class NewsArticleDetailSerializer(serializers.ModelSerializer):
    """Comprehensive serializer including article content and SEO overrides."""
    category = NewsCategorySerializer(read_only=True)
    author = AuthorSerializer(read_only=True)

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
            "meta_title",
            "meta_description",
        )