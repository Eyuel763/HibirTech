from celery import shared_task
from django.core.mail import send_mail
from django.conf import settings


@shared_task(bind=True, max_retries=3, default_retry_delay=60)
def send_staff_lead_notification(self, lead_type, lead_data):
    """
    Asynchronously sends email notification to Hibir Tech staff upon new lead submission.
    """
    subject = f"[Hibir Tech Alert] New {lead_type} Received"
    
    body_lines = [
        f"A new {lead_type} submission has been recorded on the website.",
        "--------------------------------------------------",
    ]
    for key, val in lead_data.items():
        body_lines.append(f"{key.replace('_', ' ').capitalize()}: {val}")
    
    body_lines.append("--------------------------------------------------")
    body_lines.append("Log into the admin portal to review all submissions.")

    message_text = "\n".join(body_lines)
    recipient_list = getattr(settings, 'HIBIR_STAFF_NOTIFICATION_EMAILS', ['staff@hibirtech.com'])

    try:
        send_mail(
            subject=subject,
            message=message_text,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=recipient_list,
            fail_silently=False,
        )
    except Exception as exc:
        # Retry celery task on failure
        raise self.retry(exc=exc)