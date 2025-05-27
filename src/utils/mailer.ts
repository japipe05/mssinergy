// src/utils/mailer.ts
import nodemailer from 'nodemailer';

export async function sendPasswordResetEmail(email: string, link: string) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: '"Soporte" <no-reply@example.com>',
    to: email,
    subject: 'Recupera tu contraseña',
    html: `<p>Haz clic en el siguiente enlace para recuperar tu contraseña:</p>
           <a href="${link}">${link}</a>`,
  });
}
