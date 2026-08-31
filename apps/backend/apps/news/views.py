from rest_framework import viewsets, permissions
from .models import NewsArticle, NewsCategory
from .serializers import NewsArticleSerializer, NewsCategorySerializer


class NewsCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = NewsCategory.objects.filter(is_active=True)
    serializer_class = NewsCategorySerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = "slug"


class NewsArticleViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = NewsArticle.objects.filter(status="published")
    serializer_class = NewsArticleSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = "slug"
    filterset_fields = ["category__slug", "featured", "author"]
    search_fields = ["title", "content", "excerpt"]
    ordering_fields = ["published_at", "title"]