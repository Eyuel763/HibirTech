import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  required?: boolean;
  error?: string | string[];
  helpText?: string;
  children: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  required = false,
  error,
  helpText,
  children,
}) => {
  const errorMessage = Array.isArray(error) ? error.join(', ') : error;

  return (
    <div className="flex flex-col gap-1.5 w-full text-left">
      <label htmlFor={name} className="text-xs font-semibold text-secondary flex items-center justify-between">
        <span>
          {label} {required && <span className="text-primary">*</span>}
        </span>
      </label>

      {children}

      {helpText && !errorMessage && (
        <span className="text-[11px] text-muted">{helpText}</span>
      )}

      {errorMessage && (
        <span className="text-[11px] font-medium text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};