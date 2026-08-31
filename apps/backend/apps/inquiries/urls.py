from django.urls import path
from .views import (
    ContactInquiryCreateView,
    ProgramInquiryCreateView,
    SchoolInquiryCreateView,
    EventInterestCreateView,
)

urlpatterns = [
    path("contact/", ContactInquiryCreateView.as_view(), name="inquiry-contact"),
    path("program/", ProgramInquiryCreateView.as_view(), name="inquiry-program"),
    path("school/", SchoolInquiryCreateView.as_view(), name="inquiry-school"),
    path("event/", EventInterestCreateView.as_view(), name="inquiry-event"),
]