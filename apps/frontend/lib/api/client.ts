import { FormSubmissionState } from '@/types/form';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

/**
 * Generic API request wrapper for Django REST Framework calls.
 */
export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;

  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  const config: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  const response = await fetch(url, config);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const error = new Error(errorData.detail || errorData.message || 'An API error occurred');
    (error as any).status = response.status;
    (error as any).data = errorData;
    throw error;
  }

  return response.json();
}

/**
 * Lead form submission utility with standardized lifecycle state and error parsing.
 * Handles validation errors (400), rate limiting (429), and server errors.
 */
export async function submitLeadForm<T extends Record<string, any>>(
  endpoint: string,
  payload: T
): Promise<FormSubmissionState> {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;

  try {
    const response = await fetch(`${API_BASE_URL}/leads/${cleanEndpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => ({}));

    if (response.ok) {
      return {
        status: 'success',
        message: data.message || 'Submission successful!',
      };
    }

    if (response.status === 400) {
      return {
        status: 'error',
        fieldErrors: data,
        serverError: 'Please correct the highlighted fields in the form.',
      };
    }

    if (response.status === 429) {
      return {
        status: 'error',
        serverError: 'Too many submissions. Please wait a while before trying again.',
      };
    }

    return {
      status: 'error',
      serverError: data.detail || 'Server processing error. Please try again later.',
    };
  } catch (err) {
    return {
      status: 'error',
      serverError: 'Network error. Please check your internet connection.',
    };
  }
}