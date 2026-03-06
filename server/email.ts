import nodemailer from "nodemailer";
import { log } from "./index";

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "587", 10);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@provenarc.com";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "info@provenarc.com";
const SITE_URL = process.env.SITE_URL || "https://provenarc.com";

function createTransport() {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return null;
  }
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

async function sendMail(options: nodemailer.SendMailOptions) {
  const transport = createTransport();
  if (!transport) {
    log(`[email] SMTP not configured — would have sent to ${options.to}: ${options.subject}`, "email");
    return;
  }
  try {
    await transport.sendMail({ from: FROM_EMAIL, ...options });
  } catch (err) {
    log(`[email] Failed to send to ${options.to}: ${err}`, "email");
  }
}

export async function sendQuoteRequestNotification(data: {
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  division?: string | null;
  assetType?: string | null;
  serviceTier?: string | null;
  location?: string | null;
  timeline?: string | null;
  message?: string | null;
}) {
  // Notify internal team
  await sendMail({
    to: ADMIN_EMAIL,
    subject: `New Quote Request from ${data.name}`,
    html: `
      <h2>New Quote Request</h2>
      <table cellpadding="8" style="border-collapse:collapse;width:100%">
        <tr><td><strong>Name</strong></td><td>${data.name}</td></tr>
        <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
        ${data.phone ? `<tr><td><strong>Phone</strong></td><td>${data.phone}</td></tr>` : ""}
        ${data.company ? `<tr><td><strong>Company</strong></td><td>${data.company}</td></tr>` : ""}
        ${data.division ? `<tr><td><strong>Division</strong></td><td>${data.division}</td></tr>` : ""}
        ${data.assetType ? `<tr><td><strong>Asset Type</strong></td><td>${data.assetType}</td></tr>` : ""}
        ${data.serviceTier ? `<tr><td><strong>Service Tier</strong></td><td>${data.serviceTier}</td></tr>` : ""}
        ${data.location ? `<tr><td><strong>Location</strong></td><td>${data.location}</td></tr>` : ""}
        ${data.timeline ? `<tr><td><strong>Timeline</strong></td><td>${data.timeline}</td></tr>` : ""}
        ${data.message ? `<tr><td><strong>Message</strong></td><td>${data.message}</td></tr>` : ""}
      </table>
    `,
  });

  // Confirm to the submitter
  await sendMail({
    to: data.email,
    subject: "We received your quote request — Provenarc",
    html: `
      <p>Dear ${data.name},</p>
      <p>Thank you for reaching out to Provenarc. We have received your quote request and a member of our team will be in touch within one business day.</p>
      <p>If you have any urgent questions in the meantime, please reply to this email or visit <a href="${SITE_URL}/contact">${SITE_URL}/contact</a>.</p>
      <p>Warm regards,<br/>The Provenarc Team</p>
    `,
  });
}

export async function sendContactNotification(data: {
  name: string;
  email: string;
  phone?: string | null;
  inquiryType: string;
  message: string;
}) {
  await sendMail({
    to: ADMIN_EMAIL,
    subject: `New Contact Inquiry: ${data.inquiryType} from ${data.name}`,
    html: `
      <h2>New Contact Inquiry</h2>
      <table cellpadding="8" style="border-collapse:collapse;width:100%">
        <tr><td><strong>Name</strong></td><td>${data.name}</td></tr>
        <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
        ${data.phone ? `<tr><td><strong>Phone</strong></td><td>${data.phone}</td></tr>` : ""}
        <tr><td><strong>Inquiry Type</strong></td><td>${data.inquiryType}</td></tr>
        <tr><td><strong>Message</strong></td><td>${data.message}</td></tr>
      </table>
    `,
  });

  await sendMail({
    to: data.email,
    subject: "We received your message — Provenarc",
    html: `
      <p>Dear ${data.name},</p>
      <p>Thank you for contacting Provenarc. We have received your message and will respond within one business day.</p>
      <p>Warm regards,<br/>The Provenarc Team</p>
    `,
  });
}

export async function sendPasswordResetEmail(email: string, name: string, token: string) {
  const resetUrl = `${SITE_URL}/reset-password?token=${token}`;
  await sendMail({
    to: email,
    subject: "Reset your Provenarc password",
    html: `
      <p>Dear ${name},</p>
      <p>We received a request to reset the password for your Provenarc partner account.</p>
      <p><a href="${resetUrl}" style="display:inline-block;padding:12px 24px;background:#c9a96e;color:#fff;text-decoration:none;border-radius:4px">Reset Password</a></p>
      <p>This link expires in 1 hour. If you did not request a password reset, you can safely ignore this email.</p>
      <p>Warm regards,<br/>The Provenarc Team</p>
    `,
  });
}
