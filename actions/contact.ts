"use server"

import { redirect } from 'next/navigation';
import {Resend} from 'resend'


const resend = new Resend(process.env.RESEND_API_KEY);

export async function contactAction(formData:FormData) {

  const first_name = formData.get('first_name') as string;
  const last_name = formData.get('last_name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  const response = await resend.emails.send({
    to: 'admin@lrprojects.co.za',
    from: 'dev@lrprojects.co.za',
    subject: `Contact form submission from ${first_name} ${last_name}`,
    html:`<div>
              <h2>New Form Submission<h2>
              <p>Name: ${first_name} ${last_name}</p>
              <p>Email: ${email}</p>
              <p>Message: ${message}</p>
              </div>
              `,
    text: `Name ${first_name} ${last_name} \n Email: ${email} \n Message: ${message}`,
  });

  redirect('/');
}
