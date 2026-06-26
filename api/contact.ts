import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

/**
 * Serverless email endpoint (Vercel Function).
 *
 * Receives waitlist / investor submissions and relays them over SMTP. All
 * credentials come from environment variables — nothing is hard-coded. See
 * DEPLOYMENT.md for the required variables and Vercel setup.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactBody {
  type?: 'waitlist' | 'investor';
  name?: string;
  email?: string;
  city?: string;
  role?: string;
  org?: string;
  range?: string;
  message?: string;
}

function validate(body: ContactBody): string | null {
  if (body.type !== 'waitlist' && body.type !== 'investor') return 'Invalid submission type.';
  if (!body.name?.trim()) return 'Name is required.';
  if (!body.email || !EMAIL_RE.test(body.email)) return 'A valid email is required.';
  if (body.type === 'waitlist') {
    if (!body.city) return 'City is required.';
    if (!body.role) return 'Role is required.';
  } else if (!body.range) {
    return 'Investment range is required.';
  }
  return null;
}

function buildEmail(body: ContactBody): { subject: string; text: string } {
  if (body.type === 'investor') {
    return {
      subject: `New investor enquiry — ${body.name}`,
      text: [
        `Name: ${body.name}`,
        `Organisation: ${body.org || '—'}`,
        `Email: ${body.email}`,
        `Investment range: ${body.range}`,
        `Message: ${body.message || '—'}`,
      ].join('\n'),
    };
  }
  return {
    subject: `New waitlist signup — ${body.name}`,
    text: [
      `Name: ${body.name}`,
      `Email: ${body.email}`,
      `City: ${body.city}`,
      `Role: ${body.role}`,
    ].join('\n'),
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const body = (typeof req.body === 'string' ? safeParse(req.body) : req.body) as ContactBody;
  const validationError = validate(body || {});
  if (validationError) return res.status(400).json({ error: validationError });

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE, MAIL_FROM, MAIL_TO } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !MAIL_FROM || !MAIL_TO) {
    console.error('Mailer is not configured: missing SMTP environment variables.');
    return res.status(500).json({ error: 'Email service is not configured.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: SMTP_SECURE ? SMTP_SECURE === 'true' : Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const { subject, text } = buildEmail(body);

    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: body.email,
      subject,
      text,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Failed to send contact email:', err);
    return res.status(502).json({ error: 'Could not send your message. Please try again later.' });
  }
}

function safeParse(value: string): ContactBody {
  try {
    return JSON.parse(value) as ContactBody;
  } catch {
    return {};
  }
}
