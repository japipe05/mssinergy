// src/utils/captcha.ts

/**
 * Verifica el token del CAPTCHA con Google reCAPTCHA.
 * 
 * @param token - Token enviado desde el frontend
 * @returns boolean indicando si el CAPTCHA fue válido
 */
export async function verifyCaptchaToken(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) throw new Error('RECAPTCHA_SECRET_KEY no configurado');

  const res = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    { method: 'POST' }
  );

  const data = await res.json();
  return data.success === true;
}
