'use client';

import { useState } from 'react';

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormFields {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(fields: FormFields): FormErrors {
  const errs: FormErrors = {};

  if (!fields.name.trim()) {
    errs.name = 'Name is required.';
  }

  if (!fields.email.trim()) {
    errs.email = 'Email is required.';
  } else if (!EMAIL_REGEX.test(fields.email)) {
    errs.email = 'Please enter a valid email address.';
  }

  if (!fields.message.trim()) {
    errs.message = 'Message is required.';
  } else if (fields.message.trim().length < 10) {
    errs.message = 'Message must be at least 10 characters.';
  }

  return errs;
}

export function useContactForm() {
  const [fields, setFields] = useState<FormFields>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange =
    (field: keyof FormFields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setFields((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errs = validate(fields);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'Something went wrong.');
      }

      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return { fields, errors, status, handleChange, handleSubmit };
}
