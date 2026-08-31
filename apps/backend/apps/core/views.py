from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
from .models import SiteSettings
from .serializers import SiteSettingsSerializer


class SiteSettingsView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, format=None):
        settings_obj = SiteSettings.objects.first()
        if not settings_obj:
            return Response({})
        serializer = SiteSettingsSerializer(settings_obj)
        return Response(serializer.data)