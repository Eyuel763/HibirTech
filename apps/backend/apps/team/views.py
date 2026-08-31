from rest_framework import viewsets, permissions
from .models import TeamMember
from .serializers import TeamMemberSerializer


class TeamMemberViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = TeamMember.objects.filter(is_active=True).order_by("sort_order", "id")
    serializer_class = TeamMemberSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = "slug"
    search_fields = ["name", "position", "expertise"]
    ordering_fields = ["sort_order", "name"]