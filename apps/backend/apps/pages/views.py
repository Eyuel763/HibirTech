from rest_framework import generics, permissions
from .models import FAQ, Page
from .serializers import FAQSerializer, PageSerializer


class PageDetailView(generics.RetrieveAPIView):
    queryset = Page.objects.filter(status="published")
    serializer_class = PageSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = "slug"


class FAQListView(generics.ListAPIView):
    queryset = FAQ.objects.filter(is_active=True).order_by("sort_order", "id")
    serializer_class = FAQSerializer
    permission_classes = [permissions.AllowAny]
    filterset_fields = ["category"]
    search_fields = ["question", "answer"]