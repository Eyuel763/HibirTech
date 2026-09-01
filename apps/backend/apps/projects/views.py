from rest_framework import viewsets, permissions
from .models import Project, ProjectCategory
from .serializers import ProjectSerializer, ProjectCategorySerializer


class ProjectCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ProjectCategory.objects.filter(is_active=True)
    serializer_class = ProjectCategorySerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = "slug"


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.filter(status="published")
    serializer_class = ProjectSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = "slug"
    filterset_fields = ["category__slug", "featured"]
    search_fields = ["title", "description", "short_description", "technologies"]
    ordering_fields = ["project_date", "title"] 