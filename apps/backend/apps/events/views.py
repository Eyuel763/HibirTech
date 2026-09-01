from rest_framework import viewsets, permissions
from .models import Event, EventCategory
from .serializers import EventSerializer, EventCategorySerializer


class EventCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = EventCategory.objects.filter(is_active=True)
    serializer_class = EventCategorySerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = "slug"


class EventViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Event.objects.filter(status="published")
    serializer_class = EventSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = "slug"
    filterset_fields = ["category__slug", "featured"]
    search_fields = ["title", "description", "location", "target_audience"]
    ordering_fields = ["start_datetime", "registration_deadline", "title"]