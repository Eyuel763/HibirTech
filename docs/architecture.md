# **Hibir Technologies Public Website — Architecture**

**Document Version:** 1.0
**Status:** Draft
**Date:** August 16, 2026
**Project:** Hibir Technologies Public Website

---

# **1\. Overview**

This document defines the technical architecture for the Hibir Technologies public website.

The system will use a **decoupled frontend/backend architecture**:

* **Next.js** will provide the public-facing website.
* **Django** will provide the backend, business logic, REST API, and administration interface.
* **Django REST Framework (DRF)** will expose APIs consumed by Next.js.
* **PostgreSQL** will be the primary database.
* **Redis \+ Celery** will support caching and asynchronous/background processing.
* **S3-compatible object storage** will be used for media files.
* **Docker** will standardize development and deployment environments.

The architecture is intentionally designed to support future expansion into a full STEM Academy platform without requiring a fundamental rewrite.

---

# **2\. Architectural Goals**

The architecture shall prioritize:

1. Maintainability.
2. Security.
3. Performance.
4. SEO.
5. Scalability.
6. Developer productivity.
7. Clear separation of responsibilities.
8. Reusable components.
9. API-first backend design.
10. Future STEM Academy integration.

---

# **3\. High-Level Architecture**

                             INTERNET
                                  │
                                  ▼
                         ┌─────────────────┐
                         │      CDN                              │
                         │ / Edge / HTTPS                  │
                         └────────┬────────┘
                                                 │
                         ┌────────▼────────┐
                         │     Next.js           		  │
                         │    Frontend   		  │
                         │               			  │
                         │ React         			  │
                         │ TypeScript    		  │
                         │ Tailwind CSS   		  │
                         │ shadcn/ui      		  │
                         └────────┬────────┘
                                 		 │
                             	 HTTPS/API
                                 		 │
                         ┌────────▼────────┐
                         │     Django     		 │
                         │     Backend    		 │
                         │                			 │
                         │ Django       			 │
                         │ DRF           			 │
                         │ Business Logic  		 │
                         │ Authentication 		 │
                         │ Django Admin   		 │
                         └───────┬─────────┘
                               		│
                    ┌────────────┼────────────┐
                    │        		    │          			  │
                    ▼           		   ▼          			  ▼
              ┌──────────┐ ┌──────────┐ ┌─────────────┐
              │PostgreSQL       │ │  Redis               │ │ S3 Storage 	       │
              │ Database          │  │ Cache/  	    │ │   Media    	       │
              │         	       │ │ Queue               │ │                                 │
              └──────────┘ └────┬─────┘ └─────────────┘
                              			│
                                			▼
                        		  ┌───────────┐
                        		  │  Celery 		│
                         		  │ Workers   		│
                         		 └───────────┘

---

# **4\. System Components**

## **4.1 Next.js Frontend**

The frontend is responsible for the public user experience.

### **Responsibilities**

* Rendering public pages.
* SEO metadata.
* Responsive UI.
* Navigation.
* Program browsing.
* Event browsing.
* Project showcase.
* News.
* Contact forms.
* Program inquiry forms.
* API consumption.
* Client-side interactions.
* Image optimization.

### **Technologies**

* Next.js
* React
* TypeScript
* Tailwind CSS
* shadcn/ui
* React Hook Form
* Zod

The frontend shall not directly access the PostgreSQL database.

All application data shall be accessed through the Django API.

---

# **5\. Django Backend**

Django is the central application backend.

### **Responsibilities**

* Business logic.
* Database access.
* API endpoints.
* Authentication.
* Authorization.
* Content management.
* Form processing.
* Inquiry management.
* Media management.
* Administrative operations.
* Background-job coordination.

The backend shall be implemented using Django and Django REST Framework.

---

# **6\. Django REST Framework**

DRF will provide the API layer between Next.js and Django.

The API shall use versioning:

/api/v1/

Example endpoints:

GET    /api/v1/programs/
GET    /api/v1/programs/{slug}/

GET    /api/v1/events/
GET    /api/v1/events/{slug}/

GET    /api/v1/projects/
GET    /api/v1/projects/{slug}/

GET    /api/v1/news/
GET    /api/v1/news/{slug}/

GET    /api/v1/team/

POST   /api/v1/inquiries/
POST   /api/v1/program-inquiries/

GET    /api/v1/faqs/

Public endpoints shall expose only information intended for public consumption.

Administrative endpoints shall require appropriate authentication and permissions.

---

# **7\. Django Application Structure**

The backend should be organized into domain-oriented Django applications.

Recommended structure:

backend/
│
├── manage.py
│
├── config/
│   ├── settings/
│   │   ├── base.py
│   │   ├── development.py
│   │   ├── staging.py
│   │   └── production.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
│
├── apps/
│   ├── core/
│   ├── users/
│   ├── programs/
│   ├── events/
│   ├── projects/
│   ├── news/
│   ├── team/
│   ├── inquiries/
│   ├── academy/
│   └── media/
│
├── requirements/
│
├── tests/
│
└── Dockerfile

Not every application needs to contain complex functionality in Phase 1\.

---

# **8\. Domain Applications**

## **8.1 Core**

Contains shared functionality:

* Site settings.
* Common models.
* Utilities.
* Constants.
* Health checks.
* Shared permissions.

---

## **8.2 Users**

Responsible for:

* Administrator accounts.
* Staff accounts.
* Roles.
* Permissions.

Future user types may include:

* Student.
* Parent.
* Instructor.

These should not be implemented until the Academy platform phase.

---

## **8.3 Programs**

Responsible for:

* STEM programs.
* Program categories.
* Program descriptions.
* Age ranges.
* Schedules.
* Fees.
* Program status.
* Program media.

---

## **8.4 Events**

Responsible for:

* STEM camps.
* Workshops.
* Competitions.
* Hackathons.
* Exhibitions.
* Event registration information.

---

## **8.5 Projects**

Responsible for:

* Student projects.
* Company projects.
* Project categories.
* Technologies used.
* Project media.
* Project descriptions.

---

## **8.6 News**

Responsible for:

* News articles.
* Announcements.
* Categories.
* Authors.
* Publication status.

---

## **8.7 Team**

Responsible for:

* Leadership.
* Staff.
* Instructors.
* Public profiles.

---

## **8.8 Inquiries**

Responsible for:

* Contact inquiries.
* Program inquiries.
* School partnership inquiries.
* Inquiry status.
* Administrative notifications.

---

## **8.9 Media**

Responsible for:

* Image metadata.
* Uploaded files.
* Media references.
* S3-compatible storage integration.

---

# **9\. Database Architecture**

PostgreSQL will be the primary relational database.

High-level model relationships:

                 	       ┌──────────────┐
                   	       │   Category  	         │
                   	      └──────┬───────┘
                           	            │
              ┌────────────┴────────────┐
              ▼                        			         ▼
        ┌───────────┐             ┌───────────┐
        │  Program  	    │             │   Event  	   │
        └───────────┘             └───────────┘

        ┌───────────┐             ┌───────────┐
        │  Project 	    │             │   News                │
        └───────────┘             └───────────┘

        ┌───────────┐             ┌───────────┐
        │TeamMember 	    │             │    FAQ   	   │
        └───────────┘             └───────────┘

        ┌───────────────────────────────┐
        │          Inquiry              │
        └───────────────────────────────┘

The database schema shall use appropriate:

* Primary keys.
* Foreign keys.
* Unique constraints.
* Indexes.
* Timestamps.
* Status fields.

---

# **10\. Initial Data Models**

The initial system should support the following entities.

## **Program**

id
title
slug
description
category
age\_min
age\_max
duration
schedule
location
fee
status
image
objectives
prerequisites
created\_at
updated\_at
published\_at

## **Event**

id
title
slug
description
category
start\_datetime
end\_datetime
location
registration\_deadline
status
image
created\_at
updated\_at

## **Project**

id
title
slug
description
category
technologies
project\_date
results
status
created\_at
updated\_at

## **News Article**

id
title
slug
excerpt
content
category
author
featured\_image
status
published\_at
created\_at
updated\_at

## **Team Member**

id
name
position
biography
expertise
qualifications
profile\_image
social\_links
status
created\_at
updated\_at

## **Inquiry**

id
type
name
email
phone
subject
message
status
created\_at
updated\_at

---

# **11\. API Architecture**

The API shall follow REST principles.

Example:

/api/v1/programs
/api/v1/events
/api/v1/projects
/api/v1/news
/api/v1/team
/api/v1/faqs
/api/v1/inquiries

Responses should use consistent JSON structures.

Example:

{
  "id": "123",
  "title": "Robotics Fundamentals",
  "slug": "robotics-fundamentals",
  "description": "...",
  "status": "published"
}

List endpoints should support appropriate:

* Pagination.
* Filtering.
* Ordering.
* Searching.

---

# **12\. API Security**

Public API endpoints shall expose only required data.

Administrative APIs shall require authentication.

Security controls shall include:

* Authentication.
* Authorization.
* Input validation.
* Rate limiting.
* CORS configuration.
* CSRF protection where applicable.
* Secure HTTP headers.
* Request logging where appropriate.

Sensitive fields shall never be returned through public endpoints.

---

# **13\. Authentication Architecture**

Phase 1 authentication requirements are primarily for the Django Admin and administrative APIs.

The architecture should support future authentication expansion.

Future structure:

![][image1]
Authentication implementation should be selected based on whether the future Academy requires:

* Session authentication.
* Token authentication.
* JWT.
* OAuth/social authentication.

No authentication mechanism should be introduced solely for hypothetical future functionality during Phase 1\.

---

# **14\. Django Admin Architecture**

Django Admin will serve as the initial CMS and administration interface.

Administrators shall manage:

Programs
Events
Projects
News
Team Members
FAQs
Inquiries
Media
Site Settings
Users

Admin interfaces shall include:

* Search.
* Filtering.
* Sorting.
* Pagination.
* Status management.
* Draft/publish workflows where appropriate.

---

# **15\. Frontend Architecture**

Recommended Next.js structure:

frontend/
│
├── app/
│   ├── page.tsx
│   ├── about/
│   ├── solutions/
│   ├── academy/
│   ├── programs/
│   ├── events/
│   ├── projects/
│   ├── news/
│   ├── team/
│   ├── schools/
│   ├── contact/
│   └── api/
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── navigation/
│   ├── programs/
│   ├── events/
│   ├── projects/
│   └── news/
│
├── lib/
│   ├── api/
│   ├── utils/
│   └── validation/
│
├── hooks/
│
├── types/
│
├── public/
│
└── tests/

The exact directory structure may evolve during implementation.

---

# **16\. Rendering Strategy**

Next.js rendering shall be selected according to page requirements.

## **Static/Cacheable Pages**

Suitable for:

* About.
* Mission/Vision.
* Technology Solutions.
* Contact.
* Schools.

## **Dynamic/Content Pages**

Suitable for:

* Programs.
* Events.
* Projects.
* News.

Content pages should support caching and revalidation where appropriate.

The architecture should avoid unnecessary client-side rendering.

Server-side rendering and static generation should be preferred when they improve:

* SEO.
* Performance.
* Initial page load.

---

# **17\. Frontend Data Flow**

Example program page:

User
 │
 ▼
Next.js
 │
 │ GET /api/v1/programs/robotics/
 ▼
Django REST API
 │
 ▼
Django ORM
 │
 ▼
PostgreSQL
 │
 └──── Program Data
          │
          ▼
     Django API
          │
          ▼
       Next.js
          │
          ▼
        Browser

The browser shall not directly access the database.

---

# **18\. Media Architecture**

Media should not be stored directly inside the application server when scalable object storage is available.

Recommended:

Next.js
   │
   ▼
Django
   │
   ▼
S3-Compatible Storage
   │
   ├── program-images/
   ├── event-images/
   ├── project-images/
   ├── news-images/
   └── team-images/

The database should store metadata and references to files rather than large binary files.

---

# **19\. Image Optimization**

Next.js Image shall be used where appropriate.

Images should be:

* Resized.
* Compressed.
* Served in modern formats where supported.
* Lazy-loaded where appropriate.
* Provided with appropriate dimensions.
* Given meaningful alternative text.

---

# **20\. Redis Architecture**

Redis will provide:

* Application caching.
* Rate limiting where appropriate.
* Celery broker functionality.
* Temporary data.

Redis shall not be treated as the primary persistent database.

---

# **21\. Celery Architecture**

Celery shall process asynchronous tasks.

Potential tasks include:

Contact inquiry
      │
      ▼
Django
      │
      ▼
Celery
 ├── Send email
 ├── Notify administrator
 └── Record processing status

Future tasks may include:

* Enrollment notifications.
* Scheduled reminders.
* Certificate generation.
* Report generation.
* Bulk email.
* Data processing.

---

# **22\. Email Architecture**

Application emails should be sent through a transactional email provider.

Examples:

Contact form
      │
      ▼
Django
      │
      ▼
Celery
      │
      ▼
Email Provider
      │
      ▼
Recipient

Email sending should not unnecessarily block HTTP requests.

---

# **23\. Caching Strategy**

Caching should be applied selectively.

Potential cache candidates:

* Programs.
* Events.
* Published news.
* Frequently accessed pages.
* Site settings.

Content updates should invalidate or revalidate relevant caches.

Highly sensitive or user-specific data shall not be cached publicly.

---

# **24\. Security Architecture**

The application shall follow secure development practices.

Required controls include:

* HTTPS.
* Secure cookies.
* Strong password policies.
* Password hashing.
* CSRF protection.
* CORS restrictions.
* Input validation.
* Output encoding.
* SQL injection protection through Django ORM.
* XSS protection.
* Secure file uploads.
* Rate limiting.
* Admin access controls.
* Security headers.

The system should be periodically reviewed against OWASP recommendations.

---

# **25\. Secrets Management**

Secrets shall never be committed to source control.

Examples include:

DATABASE\_URL
SECRET\_KEY
REDIS\_URL
AWS\_ACCESS\_KEY\_ID
AWS\_SECRET\_ACCESS\_KEY
EMAIL\_API\_KEY
SENTRY\_DSN

Development secrets should be stored locally through environment configuration.

Production secrets shall be managed through the hosting/platform secret-management mechanism.

---

# **26\. Environment Architecture**

Three environments are recommended:

Development
     │
     ▼
Staging
     │
     ▼
Production

## **Development**

Used by developers.

## **Staging**

Used for:

* QA.
* Client review.
* Integration testing.
* Pre-production validation.

## **Production**

Public Hibir Technologies website.

Each environment should have separate:

* Database.
* Credentials.
* Storage configuration.
* API configuration.

---

# **27\. Docker Architecture**

Development should use Docker Compose.

Example:

docker-compose.yml

services:

  frontend:
    Next.js

  backend:
    Django

  database:
    PostgreSQL

  redis:
    Redis

  worker:
    Celery

The exact production deployment may use managed services instead of running all components in a single Docker environment.

---

# **28\. Deployment Architecture**

Recommended deployment:

                      ![][image2]

The exact cloud provider may be selected during infrastructure planning.

---

# **29\. CI/CD**

GitHub Actions should automate:

### **Pull Request**

Pull Request
     │
     ├── Frontend lint
     ├── Frontend tests
     ├── Backend lint
     ├── Backend tests
     └── Build verification

### **Production**

Merge to main
      │
      ▼
Automated tests
      │
      ▼
Build
      │
      ▼
Deploy
      │
      ▼
Health Check

Deployment should fail if critical tests fail.

---

# **30\. Testing Architecture**

## **Backend**

Use:

* Pytest.
* pytest-django.
* Django test utilities.

Test:

* Models.
* Services.
* API endpoints.
* Permissions.
* Validation.
* Business logic.

## **Frontend**

Use:

* Vitest.
* React Testing Library.

Test:

* Components.
* Forms.
* UI states.
* API integration behavior.

## **End-to-End**

Use Playwright.

Important scenarios:

Homepage navigation
Program browsing
Event browsing
Contact form
Program inquiry
News browsing
Mobile navigation
Admin content publication

---

# **31\. Observability**

The production system should include:

* Error tracking.
* Application logs.
* Server monitoring.
* Database monitoring.
* Uptime monitoring.

Sentry should be considered for application error tracking.

Logs should not expose:

* Passwords.
* Authentication tokens.
* API secrets.
* Sensitive personal information.

---

# **32\. Backup Architecture**

The following should be backed up:

* PostgreSQL database.
* Important uploaded media.
* Configuration required for recovery.

Backups should be:

* Automated.
* Encrypted where appropriate.
* Retained according to policy.
* Tested periodically through restoration procedures.

---

# **33\. SEO Architecture**

Next.js will be responsible for frontend SEO implementation.

The architecture shall support:

Metadata
Open Graph
Twitter/X Cards
Canonical URLs
Sitemap
Robots.txt
Structured Data
Breadcrumbs
Semantic HTML

Django shall provide the underlying content.

Next.js shall transform that content into search-engine-friendly pages.

---

# **34\. Performance Architecture**

Performance priorities include:

1. Server-rendered content where appropriate.
2. Static generation for stable content.
3. Incremental revalidation/caching.
4. Optimized images.
5. Minimal client-side JavaScript.
6. CDN/edge delivery.
7. Database indexing.
8. API pagination.
9. Redis caching where beneficial.
10. Lazy loading of non-critical resources.

---

# **35\. Scalability Strategy**

The system should be designed so that individual components can scale independently.

                  ![][image3]

Horizontal scaling should only be introduced when actual traffic or workload requires it.

---

# **36\. Future STEM Academy Architecture**

The public website architecture must allow future Academy functionality.

The expected evolution is:

Phase 1

Next.js
   │
Django
   │
PostgreSQL

Then:

Phase 2

                    Next.js
                       │
             ┌─────────┴─────────┐
             │                   │
       Public Website       Academy Portal
             │                   │
             └─────────┬─────────┘
                       │
                    Django
                       │
                  PostgreSQL

Eventually:

                    HIBIR PLATFORM
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
       Website          Academy          Admin
          │                │                │
          │          ┌─────┼─────┐          │
          │          ▼     ▼     ▼          │
          │       Student Parent Instructor │
          │                │                │
          └────────────────┼────────────────┘
                           ▼
                        Django
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
         PostgreSQL      Redis       Storage

The architecture should avoid introducing premature microservices.

---

# **37\. Future Academy Domains**

The backend can eventually be expanded with domains such as:

academy/
students/
parents/
instructors/
courses/
lessons/
enrollments/
assignments/
assessments/
attendance/
certificates/
payments/
notifications/

These should be introduced when the Academy requirements are formally defined.

---

# **38\. Architectural Principles**

The project shall follow these principles:

### **38.1 Separation of Concerns**

Frontend, API, business logic, and persistence shall have clear responsibilities.

### **38.2 API-First Backend**

The Django backend shall expose reusable APIs rather than tightly coupling all frontend functionality to Django templates.

### **38.3 Modular Backend**

Django functionality shall be organized by business domain.

### **38.4 Type Safety**

TypeScript shall be used throughout the Next.js application.

### **38.5 Secure by Default**

Security shall be considered at every layer.

### **38.6 Progressive Complexity**

The system shall not introduce infrastructure before it is needed.

### **38.7 Avoid Premature Microservices**

The initial system shall remain a modular monolith on the backend.

### **38.8 Future-Proof, Not Over-Engineered**

The architecture shall accommodate the future STEM Academy without building the entire Academy during Phase 1\.

---

# **39\. Architectural Decision Summary**

| Decision | Choice | Reason |
| ----- | ----- | ----- |
| Frontend | Next.js | SEO, performance, React ecosystem |
| UI | Tailwind \+ shadcn/ui | Consistent modern UI |
| Backend | Django | Mature framework and strong admin |
| API | DRF | Mature REST API ecosystem |
| Database | PostgreSQL | Reliable relational database |
| CMS | Django Admin | Avoid separate CMS |
| Cache | Redis | Fast caching |
| Background Jobs | Celery | Reliable asynchronous processing |
| Media | S3-compatible storage | Scalable file storage |
| Testing | Pytest \+ RTL \+ Playwright | Full-stack coverage |
| Containers | Docker | Consistent environments |
| CI/CD | GitHub Actions | Automation |
| Frontend Hosting | Vercel | Next.js deployment |
| Backend Hosting | Managed cloud | Flexible Django deployment |
| Monitoring | Sentry | Error tracking |
| Architecture | Modular monolith | Simpler and scalable enough for current phase |
| Future API | REST | Simple, mature, maintainable |

---

# **40\. Final Architecture**

The approved baseline architecture is:

                        ┌──────────────────────┐
                         │       USERS         			 │
                         └──────────┬───────────┘
                                   		      │
                                    	      ▼
                         ┌──────────────────────┐
                         │        CDN           			│
                         │     HTTPS / Edge    		 │
                         └──────────┬───────────┘
                                   		      │
                                    	      ▼
                         ┌──────────────────────┐
                         │       Next.js        			│
                         │      Frontend       			 │
                         │                    			  │
                         │ React \+ TypeScript   		│
                         │ Tailwind \+ shadcn/ui 		│
                         └──────────┬───────────┘
                                   		      │
                             	         REST / HTTPS
                                    	     │
                                    	     ▼
                         ┌──────────────────────┐
                         │        Django       			 │
                         │       Backend       			 │
                         │                     			 │
                         │ Django \+ DRF       			  │
                         │ Business Logic      			 │
                         │ Authentication      			 │
                         │ Django Admin        			 │
                         └──────────┬───────────┘
                                  		     │
             ┌──────────────────────┼─────────────────────┐
             │                     			 │                    				 │
             ▼                      			▼                    				 ▼
      ┌──────────────┐       ┌──────────────┐      ┌──────────────┐
      │ PostgreSQL   		│       │    Redis     		│      │ S3 Storage  		 │
      │           			   │       │            		  │      │              		│
      │ Application  		│       │ Cache/Queue  	│      │ Media        		│
      │ Data        		 │       │            		  │      │ Files      		  │
      └──────────────┘       └──────┬───────┘      └──────────────┘
                                   				 │
                                   				 ▼
                            		 ┌─────────────┐
                           		  │   Celery   		 │
                           		  │   Workers  		 │
                           		  └─────────────┘

This architecture is the baseline for **Phase 1: Hibir Technologies Public Website**.

The architecture deliberately keeps the backend as a **modular Django monolith**, rather than introducing microservices. This provides a simpler development and deployment model today while leaving a clean path toward the future **Hibir STEM Academy platform**.

[image1]: <data:image/png;base64,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>

[image2]: <data:image/png;base64,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>

[image3]: <data:image/png;base64,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>
