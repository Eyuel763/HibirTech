import logging
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework.throttling import AnonRateThrottle
from .models import Inquiry, ProgramInquiry, SchoolInquiry
from apps.events.models import EventRegistrationInterest
from .serializers import (
    InquirySerializer,
    ProgramInquirySerializer,
    SchoolInquirySerializer,
    EventRegistrationInterestSerializer,
)

logger = logging.getLogger(__name__)


class PublicFormThrottle(AnonRateThrottle):
    rate = "5/min"


class ContactInquiryCreateView(generics.CreateAPIView):
    queryset = Inquiry.objects.all()
    serializer_class = InquirySerializer
    permission_classes = [permissions.AllowAny]
    throttle_classes = [PublicFormThrottle]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        logger.info(f"New Contact Inquiry submitted by {serializer.validated_data.get('email')}")
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class ProgramInquiryCreateView(generics.CreateAPIView):
    queryset = ProgramInquiry.objects.all()
    serializer_class = ProgramInquirySerializer
    permission_classes = [permissions.AllowAny]
    throttle_classes = [PublicFormThrottle]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        logger.info(f"New Program Inquiry for {serializer.validated_data.get('program')} submitted by {serializer.validated_data.get('email')}")
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class SchoolInquiryCreateView(generics.CreateAPIView):
    queryset = SchoolInquiry.objects.all()
    serializer_class = SchoolInquirySerializer
    permission_classes = [permissions.AllowAny]
    throttle_classes = [PublicFormThrottle]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        logger.info(f"New School Inquiry from {serializer.validated_data.get('organization_name')}")
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class EventInterestCreateView(generics.CreateAPIView):
    queryset = EventRegistrationInterest.objects.all()
    serializer_class = EventRegistrationInterestSerializer
    permission_classes = [permissions.AllowAny]
    throttle_classes = [PublicFormThrottle]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        logger.info(f"New Event Interest for {serializer.validated_data.get('event')} submitted by {serializer.validated_data.get('email')}")
        return Response(serializer.data, status=status.HTTP_201_CREATED)