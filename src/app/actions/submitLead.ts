'use server';

import { Resend } from 'resend';
import { z } from 'zod';

const leadSchema = z.object({
 fullName: z.string().min(2),
 email: z.string().email(),
 phone: z.string().min(8),
 interest: z.enum(['FCPO', 'FEPO', 'FPKO', 'FKLI', 'FM70', 'FGLD', 'FSOY', 'Options', 'General']),
});

function escapeHtml(str: string): string {
 return str
 .replace(/&/g, '&amp;')
 .replace(/</g, '&lt;')
 .replace(/>/g, '&gt;')
 .replace(/"/g, '&quot;')
 .replace(/'/g, '&#x27;');
}

export async function submitLead(formData: FormData) {
 const rawData = {
 fullName: formData.get('fullName'),
 email: formData.get('email'),
 phone: formData.get('phone'),
 interest: formData.get('interest'),
 };

 const validatedData = leadSchema.safeParse(rawData);

 if (!validatedData.success) {
 return { success: false, error: 'Invalid submission data.' };
 }

 try {
 const { fullName, email, phone, interest } = validatedData.data;
 const resend = new Resend(process.env.RESEND_API_KEY);

 const { error } = await resend.emails.send({
 from: 'Acme <onboarding@resend.dev>',
 to: 'senghoos121887@gmail.com',
 subject: `New Lead: ${escapeHtml(fullName)} (${interest})`,
 html: `
 <h2>New Account Opening Request</h2>
 <p>A new prospect has submitted their details via the TA Futures website:</p>
 <ul>
 <li><strong>Full Name:</strong> ${escapeHtml(fullName)}</li>
 <li><strong>Email Address:</strong> ${escapeHtml(email)}</li>
 <li><strong>Phone Number:</strong> ${escapeHtml(phone)}</li>
 <li><strong>Primary Interest:</strong> ${escapeHtml(interest)}</li>
 </ul>
 <p>Please contact them ASAP.</p>
 `
 });

 if (error) {
 console.error("Resend API Error:", error);
 return { success: false, error: error.message };
 }

 return { success: true };
 } catch (error: unknown) {
 const errorMessage = error instanceof Error ? error.message : 'Failed to process lead.';
 console.error("Unexpected Error submitting lead:", error);
 return { success: false, error: errorMessage };
 }
}
