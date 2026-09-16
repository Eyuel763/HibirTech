import logging
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.throttling import AnonRateThrottle
from rest_framework import permissions

from .serializers import (
    ContactSubmissionSerializer,
    ProgramInterestSerializer,
    SchoolPartnershipSerializer,
    EventRegistrationSerializer,
)
from .tasks import send_staff_lead_notification

logger = logging.getLogger(__name__)


class LeadSubmissionThrottle(AnonRateThrottle):
    rate = '5/hour'  # Max 5 submissions per hour per IP address


def dispatch_lead_notification(lead_type: str, lead_data: dict):
    """
    Safely enqueues the email notification task via Celery.
    Falls back to synchronous execution if the message broker is unavailable.
    """
    try:
        send_staff_lead_notification.delay(
            lead_type=lead_type,
            lead_data=lead_data
        )
    except Exception as exc:
        logger.warning(
            f"Celery broker unavailable ({exc}). Falling back to synchronous execution for {lead_type}."
        )
        try:
            send_staff_lead_notification(
                lead_type=lead_type,
                lead_data=lead_data
            )
        except Exception as inner_exc:
            logger.error(f"Failed to send lead notification synchronously: {inner_exc}")


class ContactSubmissionAPIView(APIView):
    throttle_classes = [LeadSubmissionThrottle]
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = ContactSubmissionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            
            # Safe task dispatch
            dispatch_lead_notification("Contact Message", serializer.data)
            
            return Response(
                {"message": "Thank you for getting in touch. Your message has been received!"},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProgramInterestAPIView(APIView):
    throttle_classes = [LeadSubmissionThrottle]
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = ProgramInterestSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            
            # Safe task dispatch
            dispatch_lead_notification("Program Interest Inquiry", serializer.data)
            
            return Response(
                {"message": "Inquiry recorded! Our academy team will reach out shortly."},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SchoolPartnershipAPIView(APIView):
    throttle_classes = [LeadSubmissionThrottle]
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = SchoolPartnershipSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            
            # Safe task dispatch
            dispatch_lead_notification("School Partnership Request", serializer.data)
            
            return Response(
                {"message": "Partnership request received. We look forward to collaborating with your school!"},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EventRegistrationAPIView(APIView):
    throttle_classes = [LeadSubmissionThrottle]
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = EventRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            
            # Safe task dispatch
            dispatch_lead_notification("Event Registration", serializer.data)
            
            return Response(
                {"message": "Registration successful! We look forward to seeing you at the event."},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)