from rest_framework import viewsets, permissions
from .models import Program, ProgramCategory
from .serializers import ProgramSerializer, ProgramCategorySerializer

class ProgramCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ProgramCategory.objects.filter(is_active=True)
    serializer_class = ProgramCategorySerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = "slug"

class ProgramViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Program.objects.filter(status="published")
    serializer_class = ProgramSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = "slug"
    filterset_fields = ["category__slug", "delivery_method", "featured"]
    search_fields = ["title", "description", "short_description"]
    ordering_fields = ["published_at", "title"]