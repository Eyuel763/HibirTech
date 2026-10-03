from rest_framework import viewsets, permissions, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend

from .models import NewsArticle, NewsCategory
from .serializers import (
    NewsCategorySerializer,
    NewsArticleListSerializer,
    NewsArticleDetailSerializer,
)


class NewsCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for categories list and details.
    """
    queryset = NewsCategory.objects.filter(is_active=True)
    serializer_class = NewsCategorySerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = "slug"


class NewsArticleViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for news articles list, detail, filtering, and related content.
    """
    queryset = NewsArticle.objects.filter(status="published").select_related('category', 'author')
    permission_classes = [permissions.AllowAny]
    lookup_field = "slug"
    
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = {
        'category__slug': ['exact'],
        'featured': ['exact'],
    }
    search_fields = ["title", "content", "excerpt"]
    ordering_fields = ["published_at", "title"]
    ordering = ["-published_at"]

    def get_serializer_class(self):
        if self.action == "retrieve":
            return NewsArticleDetailSerializer
        return NewsArticleListSerializer

    @action(detail=True, methods=["get"], url_path="related")
    def related_articles(self, request, slug=None):
        """
        Retrieves up to 3 published articles within the same category (excluding current article).
        """
        article = self.get_object()
        related_qs = (
            NewsArticle.objects.filter(status="published", category=article.category)
            .exclude(id=article.id)
            .select_related("category", "author")[:3]
        )
        serializer = NewsArticleListSerializer(related_qs, many=True)
        return Response(serializer.data)