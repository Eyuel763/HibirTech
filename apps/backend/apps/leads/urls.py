from django.urls import path
from .views import (
    ContactSubmissionAPIView,
    ProgramInterestAPIView,
    SchoolPartnershipAPIView,
    EventRegistrationAPIView,
)

urlpatterns = [
    path('contact/', ContactSubmissionAPIView.as_view(), name='lead-contact'),
    path('program-interest/', ProgramInterestAPIView.as_view(), name='lead-program-interest'),
    path('school-partner/', SchoolPartnershipAPIView.as_view(), name='lead-school-partner'),
    path('event-register/', EventRegistrationAPIView.as_view(), name='lead-event-register'),
]