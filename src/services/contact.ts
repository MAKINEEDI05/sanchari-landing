/**
 * Client-side contact/email service.
 *
 * The UI calls {@link submitContact}, which posts to the `/api/contact`
 * serverless function (see `api/contact.ts`). No SMTP logic or secrets live on
 * the client. When a backend API is introduced later, only `ENDPOINT` and the
 * payload types here need to change — the form components stay the same.
 */

const ENDPOINT = '/api/contact';

export type ContactType = 'waitlist' | 'investor';

export interface WaitlistPayload {
  type: 'waitlist';
  name: string;
  email: string;
  city: string;
  role: string;
}

export interface InvestorPayload {
  type: 'investor';
  name: string;
  org: string;
  email: string;
  range: string;
  message: string;
}

export type ContactPayload = WaitlistPayload | InvestorPayload;

export interface SubmitResult {
  ok: boolean;
  /** User-facing error message when `ok` is false. */
  error?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_RE.test(value.trim());
}

/** Returns a user-facing validation message, or null when the payload is valid. */
export function validateContact(payload: ContactPayload): string | null {
  if (!payload.name.trim()) return 'Please enter your name.';
  if (!isValidEmail(payload.email)) return 'Please enter a valid email address.';

  if (payload.type === 'waitlist') {
    if (!payload.city) return 'Please select your city.';
    if (!payload.role) return 'Please tell us how you plan to use Sanchari.';
  } else {
    if (!payload.range) return 'Please select an investment range.';
  }
  return null;
}

export async function submitContact(payload: ContactPayload): Promise<SubmitResult> {
  const validationError = validateContact(payload);
  if (validationError) return { ok: false, error: validationError };

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const data = (await res.json().catch(() => null)) as { error?: string } | null;
      return { ok: false, error: data?.error ?? 'Something went wrong. Please try again.' };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: 'Network error. Please check your connection and try again.' };
  }
}
