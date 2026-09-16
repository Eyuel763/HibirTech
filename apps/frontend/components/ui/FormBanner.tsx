import React from 'react';
import { CheckCircle2, AlertTriangle, RefreshCw } from 'lucide-react';

interface FormBannerProps {
  status: 'idle' | 'submitting' | 'success' | 'error';
  successMessage?: string;
  errorMessage?: string;
  onReset?: () => void;
}

export const FormBanner: React.FC<FormBannerProps> = ({
  status,
  successMessage = 'Your request has been submitted successfully!',
  errorMessage = 'An unexpected error occurred. Please try again.',
  onReset,
}) => {
  if (status === 'success') {
    return (
      <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-start justify-between gap-3 text-sm">
        <div className="flex items-start gap-2.5">
          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="flex flex-col gap-1">
            <span className="font-semibold">Success</span>
            <p className="text-xs opacity-90">{successMessage}</p>
          </div>
        </div>
        {onReset && (
          <button
            type="button"
            onClick={onReset}
            className="text-xs font-semibold underline hover:opacity-80 transition-opacity"
          >
            Submit Another
          </button>
        )}
      </div>
    );
  }

  if (status === 'error' && errorMessage) {
    return (
      <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 flex items-start gap-2.5 text-sm">
        <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
        <div className="flex flex-col gap-1">
          <span className="font-semibold">Submission Error</span>
          <p className="text-xs opacity-90">{errorMessage}</p>
        </div>
      </div>
    );
  }

  return null;
};