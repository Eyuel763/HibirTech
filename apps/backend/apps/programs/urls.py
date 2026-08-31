from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProgramViewSet, ProgramCategoryViewSet

router = DefaultRouter()
router.register(r"categories", ProgramCategoryViewSet, basename="program-category")
router.register(r"", ProgramViewSet, basename="program")

urlpatterns = [
    path("", include(router.urls)),
]