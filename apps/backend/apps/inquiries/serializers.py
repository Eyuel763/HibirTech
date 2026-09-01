from rest_framework import serializers
from .models import Inquiry, ProgramInquiry, SchoolInquiry
from apps.events.models import EventRegistrationInterest


class InquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inquiry
        fields = (
            "id",
            "name",
            "email",
            "phone",
            "type",
            "subject",
            "message",
            "created_at",
        )
        read_only_fields = ("id", "created_at")


class ProgramInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgramInquiry
        fields = (
            "id",
            "parent_name",
            "student_name",
            "student_age",
            "student_grade",
            "email",
            "phone",
            "program",
            "preferred_schedule",
            "message",
            "created_at",
        )
        read_only_fields = ("id", "created_at")


class SchoolInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = SchoolInquiry
        fields = (
            "id",
            "organization_name",
            "organization_type",
            "contact_name",
            "email",
            "phone",
            "location",
            "website",
            "area_of_interest",
            "message",
            "created_at",
        )
        read_only_fields = ("id", "created_at")


class EventRegistrationInterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventRegistrationInterest
        fields = (
            "id",
            "name",
            "email",
            "phone",
            "participant_age",
            "event",
            "message",
            "created_at",
        )
        read_only_fields = ("id", "created_at")