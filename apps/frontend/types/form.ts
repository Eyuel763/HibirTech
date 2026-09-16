export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface ApiFieldError {
  [fieldName: string]: string[] | string;
}

export interface FormSubmissionState {
  status: FormStatus;
  message?: string;
  fieldErrors?: ApiFieldError;
  serverError?: string;
}