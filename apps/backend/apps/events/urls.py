from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EventViewSet, EventCategoryViewSet

router = DefaultRouter()
router.register(r"categories", EventCategoryViewSet, basename="event-category")
router.register(r"", EventViewSet, basename="event")

urlpatterns = [
    path("", include(router.urls)),
]