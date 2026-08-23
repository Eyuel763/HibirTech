# **Hibir Technologies Public Website — Database Design**

**Document Version:** 1.0
**Status:** Draft
**Date:** August 16, 2026
**Project:** Hibir Technologies Public Website
**Database:** PostgreSQL
**ORM:** Django ORM

---

# **1\. Purpose**

This document defines the database architecture and data model for the Hibir Technologies public website.

The database is designed for the Phase 1 public website while providing a clean foundation for the future Hibir STEM Academy platform.

The database shall store:

* Corporate website content.
* STEM Academy programs.
* Events.
* Projects.
* News.
* Team members.
* FAQs.
* Contact inquiries.
* Program inquiries.
* School partnership inquiries.
* Media metadata.
* Site configuration.
* Administrative users and permissions.

The database shall **not** directly serve the public website. All application access shall occur through Django.

---

# **2\. Database Technology**

## **2.1 Primary Database**

**PostgreSQL**

Reasons:

* Strong relational capabilities.
* Excellent Django support.
* Reliable transactions.
* Mature indexing.
* Full-text search capabilities.
* JSON/JSONB support where appropriate.
* Good scalability.
* Suitable for future Academy relationships.

---

# **3\. Database Principles**

The database design shall follow these principles:

1. Use relational modeling for structured business data.
2. Avoid unnecessary duplication.
3. Use foreign keys for relationships.
4. Use indexes for frequently queried fields.
5. Use timestamps on major entities.
6. Use UUIDs where appropriate.
7. Use database constraints to protect data integrity.
8. Keep media files outside PostgreSQL.
9. Avoid storing derived data when it can be calculated reliably.
10. Design for future Academy expansion without prematurely implementing Academy-specific tables.

---

# **4\. High-Level Entity Model**

                        ┌───────────────┐

                         │ SiteSettings  │

                         └───────────────┘

┌──────────────┐       ┌────────────────┐

│  Categories  │──────▶│    Programs    │

└──────────────┘       └────────────────┘

                               │

                               │

                               ▼

                        Program Inquiries

┌──────────────┐       ┌────────────────┐

│  Categories  │──────▶│     Events     │

└──────────────┘       └────────────────┘

┌──────────────┐       ┌────────────────┐

│  Categories  │──────▶│    Projects    │

└──────────────┘       └────────────────┘

┌──────────────┐       ┌────────────────┐

│  Categories  │──────▶│  News Articles │

└──────────────┘       └────────────────┘

┌──────────────┐

│ Team Members │

└──────────────┘

┌──────────────┐

│     FAQs     │

└──────────────┘

┌────────────────────┐

│ General Inquiries  │

└────────────────────┘

┌──────────────────────┐

│ School Partnerships │

└──────────────────────┘

┌────────────────┐

│ Media Assets   │

└────────────────┘

---

# **5\. Application-to-Database Ownership**

Django applications should own their related models.

core/

 └── SiteSettings

users/

 └── User/Profile extensions

programs/

 ├── Program

 └── ProgramCategory

events/

 ├── Event

 └── EventCategory

projects/

 ├── Project

 └── ProjectCategory

news/

 ├── Article

 └── NewsCategory

team/

 └── TeamMember

inquiries/

 ├── Inquiry

 ├── ProgramInquiry

 └── SchoolInquiry

media/

 └── MediaAsset

Where a category can be shared across domains, a shared taxonomy design may be introduced. However, separate category models are preferred initially when the domains have different requirements.

---

# **6\. Common Model Fields**

Major content models should generally contain:

created\_at

updated\_at

Publishable content should additionally contain:

status

published\_at

Recommended status values:

draft

published

archived

Not every entity needs all three states.

---

# **7\. Identifier Strategy**

UUIDs are recommended for externally exposed entities.

Example:

id \= UUID

Advantages:

* Difficult to enumerate.
* Suitable for distributed systems.
* Safer for public API identifiers.
* Supports future system integration.

Human-readable URLs should use slugs.

Example:

id:

550e8400-e29b-41d4-a716-446655440000

slug:

robotics-fundamentals

Public URLs should use:

/programs/robotics-fundamentals

rather than exposing numeric database IDs.

---

# **8\. Program Domain**

## **8.1 ProgramCategory**

Stores categories for STEM programs.

### **Fields**

name

slug

description

is\_active

created\_at

updated\_at

### **Constraints**

* `name` should be unique.
* `slug` should be unique.

---

# **9\. Program**

Represents a STEM Academy program.

### **Fields**

title

slug

short\_description

description

category

age\_min

age\_max

grade\_min

grade\_max

duration

schedule

location

delivery\_method

fee

currency

prerequisites

objectives

curriculum\_overview

image

status

featured

published\_at

created\_at

updated\_at

### **Relationships**

ProgramCategory 1 ──── \* Program

### **Suggested Delivery Methods**

in\_person

online

hybrid

### **Suggested Status**

draft

published

archived

### **Indexes**

Recommended:

slug

status

featured

category\_id

published\_at

---

# **10\. Program Inquiry**

Stores requests from prospective students/parents.

### **Fields**

program

parent\_name

student\_name

student\_age

student\_grade

email

phone

preferred\_schedule

message

status

created\_at

updated\_at

### **Status**

new

contacted

in\_progress

completed

cancelled

### **Relationship**

Program 1 ──── \* ProgramInquiry

A program inquiry should use `SET NULL` or another deliberate deletion strategy if the related program is removed.

Historical inquiries should not accidentally disappear because an administrator deletes a program.

---

# **11\. Event Domain**

## **11.1 EventCategory**

### **Fields**

id

name

slug

description

is\_active

created\_at

updated\_at

---

# **12\. Event**

Represents an event, workshop, camp, competition, or similar activity.

### **Fields**

id

title

slug

short\_description

description

category

start\_datetime

end\_datetime

location

target\_audience

registration\_deadline

registration\_url

status

featured

image

created\_at

updated\_at

### **Suggested Status**

draft

published

cancelled

completed

### **Indexes**

slug

category\_id

status

start\_datetime

registration\_deadline

---

# **13\. Event Registration Interest**

If Phase 1 supports event interest collection, use a separate model.

### **Fields**

id

event

name

email

phone

participant\_age

message

status

created\_at

updated\_at

### **Relationship**

Event 1 ──── \* EventRegistrationInterest

A full event-ticketing system is out of scope for Phase 1\.

---

# **14\. Project Domain**

## **14.1 ProjectCategory**

### **Fields**

id

name

slug

description

is\_active

created\_at

updated\_at

---

# **15\. Project**

Represents a company or student project.

### **Fields**

id

title

slug

short\_description

description

problem\_statement

solution

category

technologies

project\_date

results

impact

featured

status

created\_at

updated\_at

### **Suggested Status**

draft

published

archived

### **Indexes**

slug

category\_id

status

featured

project\_date

---

# **16\. Project Media**

Projects may contain multiple images/videos.

A separate relationship is recommended rather than storing multiple URLs directly in the Project table.

Project

   │

   ├── ProjectMedia

   ├── ProjectMedia

   └── ProjectMedia

### **Fields**

id

project

media

caption

sort\_order

is\_featured

created\_at

---

# **17\. News Domain**

## **17.1 NewsCategory**

### **Fields**

id

name

slug

description

is\_active

created\_at

updated\_at

---

# **18\. NewsArticle**

### **Fields**

id

title

slug

excerpt

content

category

author

featured\_image

status

featured

published\_at

created\_at

updated\_at

### **Indexes**

slug

category\_id

status

featured

published\_at

---

# **19\. Team Domain**

## **19.1 TeamMember**

Represents a publicly displayed Hibir employee, leader, or instructor.

### **Fields**

id

name

slug

position

biography

expertise

qualifications

profile\_image

email

linkedin\_url

website\_url

sort\_order

is\_active

created\_at

updated\_at

Sensitive personal information should not be stored unless required.

Public-facing email addresses should be optional.

---

# **20\. FAQ Domain**

## **20.1 FAQ**

### **Fields**

id

question

answer

category

sort\_order

is\_active

created\_at

updated\_at

### **Indexes**

category

is\_active

sort\_order

---

# **21\. Inquiry Domain**

## **21.1 Inquiry**

General contact inquiries.

### **Fields**

id

type

name

email

phone

subject

message

status

source

created\_at

updated\_at

### **Inquiry Types**

general

program

event

school

partnership

other

### **Status**

new

read

in\_progress

resolved

spam

archived

---

# **22\. School Inquiry**

Stores school partnership requests.

### **Fields**

id

organization\_name

organization\_type

contact\_name

email

phone

location

website

area\_of\_interest

message

status

created\_at

updated\_at

### **Organization Types**

Examples:

school

university

ngo

government

company

other

---

# **23\. Media Domain**

## **23.1 MediaAsset**

Media files should be stored externally.

The database stores metadata.

### **Fields**

id

name

file\_url

storage\_key

mime\_type

file\_size

width

height

alt\_text

caption

created\_at

updated\_at

### **Storage**

Recommended:

S3-compatible object storage

Examples include:

* Amazon S3.
* Cloudflare R2.
* DigitalOcean Spaces.
* Other S3-compatible services.

---

# **24\. Site Settings**

## **24.1 SiteSettings**

Stores global website configuration.

### **Fields**

id

company\_name

tagline

description

logo

favicon

email

phone

address

google\_maps\_url

facebook\_url

instagram\_url

linkedin\_url

youtube\_url

twitter\_url

default\_meta\_title

default\_meta\_description

created\_at

updated\_at

There should normally be only one active global settings record.

---

# **25\. Page Content**

For pages such as About, Schools, and Academy Overview, there are two reasonable approaches.

## **Option A — Code-based pages**

Content is stored directly in Next.js.

Best for:

* Very stable content.
* Small websites.
* Maximum developer control.

## **Option B — CMS-managed pages**

Content is stored in Django.

Recommended for Hibir.

A `Page` model can support editable pages.

### **Fields**

id

title

slug

excerpt

content

meta\_title

meta\_description

status

published\_at

created\_at

updated\_at

This allows Hibir staff to update content without developer intervention.

---

# **26\. Page Model**

Recommended initial implementation:

Page

├── Home

├── About

├── Technology Solutions

├── STEM Academy

├── For Schools

├── Contact

└── Other

However, the homepage may continue to use specialized structured components rather than a generic page editor.

---

# **27\. Relationships**

High-level relationships:

ProgramCategory

      │

      └──────\< Program

                    │

                    └──────\< ProgramInquiry

EventCategory

      │

      └──────\< Event

                    │

                    └──────\< EventRegistrationInterest

ProjectCategory

      │

      └──────\< Project

                    │

                    └──────\< ProjectMedia

                                      │

                                      ▼

                                  MediaAsset

NewsCategory

      │

      └──────\< NewsArticle

                       │

                       ▼

                   TeamMember

TeamMember

      │

      └──────\< NewsArticle

Inquiry

SchoolInquiry

ProgramInquiry

EventRegistrationInterest

---

# **28\. Proposed ER Diagram**

                        ┌─────────────────────┐

                         │    ProgramCategory  │

                         └──────────┬──────────┘

                                    │

                                  1 │

                                    │ \*

                         ┌──────────▼──────────┐

                         │       Program       │

                         └──────────┬──────────┘

                                    │

                                  1 │

                                    │ \*

                         ┌──────────▼──────────┐

                         │  ProgramInquiry     │

                         └─────────────────────┘

                         ┌─────────────────────┐

                         │     EventCategory   │

                         └──────────┬──────────┘

                                    │

                                  1 │

                                    │ \*

                         ┌──────────▼──────────┐

                         │        Event        │

                         └──────────┬──────────┘

                                    │

                                  1 │

                                    │ \*

                         ┌──────────▼──────────┐

                         │ EventRegistration   │

                         └─────────────────────┘

                         ┌─────────────────────┐

                         │    ProjectCategory  │

                         └──────────┬──────────┘

                                    │

                                  1 │

                                    │ \*

                         ┌──────────▼──────────┐

                         │       Project       │

                         └──────────┬──────────┘

                                    │

                                  1 │

                                    │ \*

                         ┌──────────▼──────────┐

                         │    ProjectMedia     │

                         └──────────┬──────────┘

                                    │

                                    │ \*

                                    ▼

                              ┌────────────┐

                              │ MediaAsset │

                              └────────────┘

                         ┌─────────────────────┐

                         │     NewsCategory    │

                         └──────────┬──────────┘

                                    │

                                  1 │

                                    │ \*

                         ┌──────────▼──────────┐

                         │     NewsArticle     │

                         └──────────┬──────────┘

                                    │

                                    │ \*

                                    ▼

                              ┌────────────┐

                              │ TeamMember  │

                              └────────────┘

                         ┌─────────────────────┐

                         │        Page         │

                         └─────────────────────┘

                         ┌─────────────────────┐

                         │         FAQ         │

                         └─────────────────────┘

                         ┌─────────────────────┐

                         │       Inquiry       │

                         └─────────────────────┘

                         ┌─────────────────────┐

                         │   SchoolInquiry     │

                         └─────────────────────┘

                         ┌─────────────────────┐

                         │    SiteSettings     │

                         └─────────────────────┘

---

# **29\. Slug Strategy**

Public content shall use unique slugs.

Examples:

/programs/robotics-fundamentals

/events/summer-stem-camp-2026

/projects/autonomous-robot

/news/hibir-stem-academy-launch

Slug rules:

* Lowercase.
* Hyphen-separated.
* Unique within the content type.
* Stable after publication where possible.

Changing a published slug should trigger appropriate redirect handling.

---

# **30\. Indexing Strategy**

The following fields should be indexed:

### **Programs**

slug

status

category\_id

featured

published\_at

### **Events**

slug

status

category\_id

start\_datetime

featured

### **Projects**

slug

status

category\_id

featured

project\_date

### **News**

slug

status

category\_id

published\_at

featured

### **Inquiries**

status

type

created\_at

Indexes should be added based on actual query patterns rather than indiscriminately indexing every column.

---

# **31\. Search Strategy**

Phase 1 search can use PostgreSQL capabilities.

For simple search:

icontains

or PostgreSQL full-text search can be introduced for:

* Programs.
* Projects.
* News.
* Events.

A dedicated search engine such as Elasticsearch/OpenSearch is **not required for Phase 1**.

---

# **32\. Data Validation**

Validation shall occur at multiple levels.

## **Application Level**

Django models and DRF serializers shall validate:

* Required fields.
* Field formats.
* Allowed status values.
* Age ranges.
* Date relationships.
* Email addresses.

## **Database Level**

PostgreSQL shall enforce:

* Unique constraints.
* Foreign keys.
* NOT NULL constraints where appropriate.
* Check constraints where beneficial.

---

# **33\. Deletion Strategy**

Hard deletion should be avoided for important published content.

Recommended behavior:

Published Content

       │

       ▼

    Archive

For relationships:

### **Programs**

Program inquiries should not automatically disappear if a program is archived.

### **Events**

Historical event registrations should remain available for reporting.

### **News**

Published news should normally be archived rather than deleted.

### **Media**

Media should only be physically deleted when no longer referenced.

---

# **34\. Auditability**

Phase 1 should maintain:

created\_at

updated\_at

For sensitive administrative actions, a future audit-log system may record:

user

action

entity

entity\_id

timestamp

changes

A full audit system is not required for the first release unless business or compliance requirements demand it.

---

# **35\. Privacy**

The database may contain personal information from:

* Contact inquiries.
* Program inquiries.
* School inquiries.
* Event interest forms.

Personal data shall be:

* Collected only when necessary.
* Stored securely.
* Accessible only to authorized personnel.
* Retained according to Hibir's privacy policy.
* Deleted/anonymized according to the defined retention policy.

---

# **36\. Sensitive Data**

The following shall never be stored in plaintext:

* Passwords.
* Authentication secrets.
* API keys.
* Payment credentials.
* Access tokens.

Passwords shall be managed through Django's secure password hashing system.

Payment card information should **never** be stored in this database.

---

# **37\. Future Academy Database**

The Phase 1 schema shall leave room for future Academy entities.

Potential future models:

Student

Parent

Instructor

StudentParent

Course

Lesson

CourseModule

Enrollment

Assignment

Submission

Assessment

Question

Answer

Attendance

Certificate

Payment

Invoice

Notification

Potential future relationships:

Parent

  │

  └────\< Student

             │

             └────\< Enrollment

                       │

                       ▼

                     Course

                       │

                       ├────\< Lesson

                       ├────\< Assignment

                       └────\< Assessment

These models shall be introduced only when Academy requirements are formally defined.

---

# **38\. Future Database Evolution**

The database should evolve incrementally.

Recommended progression:

Phase 1

│

├── Content

├── Programs

├── Events

├── Projects

├── News

├── Inquiries

└── Media

       │

       ▼

Phase 2

│

├── Users

├── Students

├── Parents

├── Instructors

└── Enrollments

       │

       ▼

Phase 3

│

├── Courses

├── Lessons

├── Assignments

├── Assessments

└── Progress

       │

       ▼

Phase 4

│

├── Payments

├── Certificates

├── Notifications

└── Reporting

---

# **39\. Migration Strategy**

All database schema changes shall be managed through Django migrations.

Developers shall not manually modify production tables unless there is an approved emergency procedure.

Standard workflow:

Model Change

     │

     ▼

makemigrations

     │

     ▼

Migration Review

     │

     ▼

Test Environment

     │

     ▼

Staging

     │

     ▼

Production

---

# **40\. Backup Strategy**

Production PostgreSQL shall have automated backups.

Recommended:

* Daily backups at minimum.
* Point-in-time recovery where supported.
* Encrypted backups.
* Defined retention period.
* Periodic restoration testing.

Media storage should have its own backup/versioning strategy.

---

# **41\. Database Environment Separation**

Each environment shall use a separate database.

Development

    │

    └── PostgreSQL Development

Staging

    │

    └── PostgreSQL Staging

Production

    │

    └── PostgreSQL Production

Production data must not be copied into development environments without appropriate anonymization and authorization.

---

# **42\. Database Performance**

Performance practices shall include:

* Appropriate indexes.
* Pagination.
* Query optimization.
* `select_related()` for foreign keys.
* `prefetch_related()` for many-to-many/reverse relationships.
* Avoiding N+1 queries.
* Database connection pooling where appropriate.
* Redis caching for suitable read-heavy content.

---

# **43\. Transaction Management**

Django transactions shall be used where multiple database operations must succeed or fail together.

Example:

Program Inquiry

      │

      ├── Create inquiry

      ├── Record metadata

      └── Queue notification

Critical database writes should use appropriate transactional boundaries.

---

# **44\. Database Security**

Production database access shall:

* Require authentication.
* Use encrypted connections where supported.
* Restrict network access.
* Use least-privilege database users.
* Avoid exposing PostgreSQL directly to the public internet.
* Use separate credentials per environment.

The Django application should be the primary application-level interface to the database.

---

# **45\. Recommended Initial Tables**

The initial production database should contain approximately these logical entities:

users

pages

site\_settings

program\_categories

programs

program\_inquiries

event\_categories

events

event\_registration\_interests

project\_categories

projects

project\_media

news\_categories

news\_articles

team\_members

faqs

inquiries

school\_inquiries

media\_assets

Django's own framework tables will also exist for:

users

groups

permissions

sessions

admin logs

migrations

Exact table names will be generated by Django migrations.

---

# **46\. Database Scope**

The database is intentionally designed around the Phase 1 public website.

It should **not** initially contain:

* Student academic records.
* Grades.
* Attendance.
* Course progress.
* Payment card information.
* LMS content delivery data.
* Student assessments.
* Parent accounts.

Those belong to future Academy phases.

---

# **47\. Final Database Architecture**

The Phase 1 database architecture is:

                      Django Application

                              │

                              ▼

                       ┌──────────────┐

                       │  Django ORM  │

                       └──────┬───────┘

                              │

                              ▼

                     ┌─────────────────┐

                     │   PostgreSQL    │

                     │                 │

                     │ Core            │

                     │ Pages           │

                     │ Programs        │

                     │ Events          │

                     │ Projects        │

                     │ News            │

                     │ Team            │

                     │ FAQs            │

                     │ Inquiries       │

                     │ Media Metadata  │

                     └─────────────────┘

                              │

                    ┌─────────┴─────────┐

                    ▼                   ▼

                 Backups             Reports

Media files are stored separately:

Django

   │

   ▼

S3-Compatible Storage

   │

   ├── Images

   ├── Documents

   └── Other Media

The resulting database is a **normalized PostgreSQL schema managed entirely through Django migrations and Django ORM**, with enough flexibility to evolve into the future Hibir STEM Academy platform without prematurely adding unnecessary complexity.
