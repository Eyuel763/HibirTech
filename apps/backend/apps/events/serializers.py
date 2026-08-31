from rest_framework import serializers
from .models import Event, EventCategory

class EventCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = EventCategory
        fields = ("id", "name", "slug", "description")

class EventSerializer(serializers.ModelSerializer):
    category = EventCategorySerializer(read_only=True)

    class Meta:
        model = Event
        fields = (
            "id", "title", "slug", "category", "short_description",
            "description", "start_datetime", "end_datetime",
            "location", "is_virtual", "registration_link",
            "featured_image", "featured",
        )