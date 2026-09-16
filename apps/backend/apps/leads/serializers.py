from rest_framework import serializers
from .models import ContactSubmission, ProgramInterest, SchoolPartnership, EventRegistration


class ContactSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactSubmission
        fields = ['id', 'name', 'email', 'subject', 'message', 'created_at']


class ProgramInterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgramInterest
        fields = ['id', 'program_slug', 'full_name', 'email', 'phone', 'participant_age', 'notes', 'created_at']


class SchoolPartnershipSerializer(serializers.ModelSerializer):
    class Meta:
        model = SchoolPartnership
        fields = ['id', 'school_name', 'contact_person', 'email', 'phone', 'estimated_students', 'message', 'created_at']


class EventRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventRegistration
        fields = ['id', 'event_slug', 'full_name', 'email', 'phone', 'attendee_count', 'created_at']