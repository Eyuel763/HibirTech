// Common / Shared API Types
export interface BaseEntity {
  id: string;
  created_at?: string;
  updated_at?: string;
}

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

// Programs & Categories
export type DeliveryMethod = 'in_person' | 'online' | 'hybrid';
export type ContentStatus = 'draft' | 'published' | 'archived';

export interface ProgramCategory extends BaseEntity {
  name: string;
  slug: string;
  description: string;
}

export interface Program extends BaseEntity {
  title: string;
  slug: string;
  short_description: string;
  description: string;
  category: ProgramCategory;
  age_min?: number;
  age_max?: number;
  grade_min?: number;
  grade_max?: number;
  duration: string;
  schedule: string;
  location: string;
  delivery_method: DeliveryMethod;
  fee?: string;
  currency: string;
  prerequisites: string;
  objectives: string;
  curriculum_overview: string;
  image: string;
  status: ContentStatus;
  featured: boolean;
  published_at?: string;
}

// Projects & Media
export interface ProjectCategory extends BaseEntity {
  name: string;
  slug: string;
  description: string;
}

export interface ProjectMedia extends BaseEntity {
  media: string;
  media_url?: string;
  caption: string;
  sort_order: number;
  is_featured: boolean;
}

export interface Project extends BaseEntity {
  title: string;
  slug: string;
  short_description: string;
  description: string;
  problem_statement: string;
  solution: string;
  category: ProjectCategory;
  technologies: string;
  project_date?: string;
  results: string;
  impact: string;
  featured: boolean;
  status: ContentStatus;
  media_gallery?: ProjectMedia[];
}

// Inquiry Payloads (Form Submissions)
export interface GeneralInquiryPayload {
  name: string;
  email: string;
  phone?: string;
  type: string;
  subject: string;
  message: string;
}

export interface ProgramInquiryPayload {
  parent_name: string;
  student_name: string;
  student_age?: number;
  student_grade?: string;
  email: string;
  phone: string;
  program: string;
  preferred_schedule?: string;
  message?: string;
}

export interface SchoolInquiryPayload {
  organization_name: string;
  organization_type: string;
  contact_name: string;
  email: string;
  phone: string;
  location?: string;
  website?: string;
  area_of_interest?: string;
  message?: string;
}