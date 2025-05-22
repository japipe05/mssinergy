'use client';

import { Button, Label, TextInput } from "flowbite-react";
import React, { useState, useRef } from "react";
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
import { Modal } from "flowbite-react";

const AuthRegister = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ usr_nombre: '', usr_correo: '', usr_codigo_pais: '+57', usr_celular: '', usr_credencial: '' });
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<string | null>(null); 
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
const [showTerms, setShowTerms] = useState(false);

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTerms(e.target.checked);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setImage(imageUrl);
    } else {
      setImage(null);
    }
  };

  const onCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (!acceptTerms) {
      setMessage({ text: 'Debes aceptar los términos para continuar.', type: 'error' });
      setLoading(false);
      return;
    }

    if (!captchaToken) {
      setMessage({ text: 'Por favor, completa el CAPTCHA para continuar.', type: 'error' });

      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('usr_nombre', form.usr_nombre);
    formData.append('usr_correo', form.usr_correo);
    formData.append('usr_codigo_pais', form.usr_codigo_pais);
    formData.append('usr_celular', form.usr_celular);
    formData.append('usr_credencial', form.usr_credencial);
    if (file) formData.append('file', file);
    formData.append('captchaToken', captchaToken);

    try {
      console.log("AuthRegister.tsx ingresa");
      await axios.post('/api/auth/register', formData);

      setMessage({ text: 'Usuario registrado', type: 'success' });

      // Limpiar formulario si quieres:
      setForm({ usr_nombre: '', usr_correo: '', usr_codigo_pais: '+57', usr_celular: '', usr_credencial: '' });
      setFile(null);
      setImage(null);
      setAcceptTerms(false);
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setMessage({ text: err.response?.data?.error || 'Error desconocido', type: 'error' });
      } else {

        setMessage({ text: 'Error inesperado', type: 'error' });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

    <Modal show={showTerms} onClose={() => setShowTerms(false)} size="lg">
  <Modal.Header>Términos y Condiciones de Ms Sinergy S.A.S</Modal.Header>
  <Modal.Body>
    <div className="space-y-3 text-sm text-gray-700">
      <p>
        Al registrarse en nuestra plataforma, usted acepta cumplir con todos los términos
        establecidos por Ms Sinergy S.A.S.
      </p>
      <p>
        Nos comprometemos a proteger sus datos personales conforme a nuestra política de
        privacidad. Su información será usada únicamente para fines relacionados con la
        prestación de nuestros servicios.
      </p>
      <p>
        Usted no podrá usar nuestros servicios para actividades ilegales, fraudulentas o
        que infrinjan derechos de terceros. Nos reservamos el derecho de suspender
        cuentas que violen estos términos.
      </p>
      <p>
        Ms Sinergy S.A.S podrá actualizar estos términos sin previo aviso. Es
        responsabilidad del usuario revisarlos periódicamente.
      </p>
      <p>
        Si tiene dudas, contáctenos a través del correo soporte@mssinergy.com.
      </p>
    </div>
  </Modal.Body>
  <Modal.Footer>
    <button
      onClick={() => setShowTerms(false)}
      className="bg-primary text-white px-4 py-2 rounded hover:bg-primaryemphasis"
    >
      Cerrar
    </button>
  </Modal.Footer>
</Modal>

      <form onSubmit={handleSubmit} className="mt-6">
        {/* Imagen */}
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="image" value="Cargar Imagen" />
          </div>
          <input
            id="image"
            type="file"
            accept="image/*"
            className="form-control"
            onChange={handleImageChange}
            required
            style={{ borderRadius: '0.375rem', height: '2.5rem', padding: '0.5rem 1rem' }}
          />
        </div>

        {image && (
          <div className="mb-4">
            <div className="flex justify-center">
              <img
                src={image}
                alt="Vista previa"
                className="w-32 h-32 object-cover rounded-md"
              />
            </div>
          </div>
        )}

        {/* Nombre */}
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="usr_nombre" value="Nombre" />
          </div>
          <TextInput
            id="usr_nombre"
            name="usr_nombre"
            placeholder="Nombre Completo"
            value={form.usr_nombre}
            onChange={handleChange}
            type="text"
            sizing="md"
            required
            minLength={3}
            maxLength={100}
          />
        </div>

        {/* Correo */}
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="usr_correo" value="Correo" />
          </div>
          <TextInput
            id="usr_correo"
            name="usr_correo"
            placeholder="@gmail.com"
            value={form.usr_correo}
            onChange={handleChange}
            type="email"
            sizing="md"
          />
        </div>

        {/* Celular con código de país */}
        <div className="mb-4">
          <Label htmlFor="usr_celular" value="Celular" className="mb-2 block" />
          <div className="flex gap-2">
            <select
              id="usr_codigo_pais"
              name="usr_codigo_pais"
              value={form.usr_codigo_pais}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 text-sm"
            >
              <option value="">Seleccionar</option>
              <option value="+57">🇨🇴 +57</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+52">🇲🇽 +52</option>
              <option value="+54">🇦🇷 +54</option>
            </select>
            <TextInput
              id="usr_celular"
              name="usr_celular"
              value={form.usr_celular}
              onChange={handleChange}
              type="tel"
              placeholder="3214567890"
              required
              sizing="md"
              pattern="[0-9]*"
              minLength={10}
              maxLength={100}
              className="w-full rounded-none"
            />
          </div>
        </div>

        {/* Contraseña */}
        <div className="mb-6">
          <div className="mb-2 block">
            <Label htmlFor="usr_credencial" value="Contraseña" />
          </div>
          <TextInput
            id="usr_credencial"
            name="usr_credencial"
            value={form.usr_credencial}
            onChange={handleChange}
            type={showPassword ? "text" : "password"}
            required
            sizing="md"
            minLength={5}
            maxLength={100}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,100}$"
            title="La contraseña debe tener al menos 5 caracteres, incluyendo mayúsculas, minúsculas y números."
            className="w-full text-lg"
          />
        </div>

        {/* Checkbox obligatorio */}
        {/* Checkbox obligatorio con enlace a términos */}
<div className="mb-6 flex items-start gap-2">
  <input
    id="acceptTerms"
    name="acceptTerms"
    type="checkbox"
    checked={acceptTerms}
    onChange={handleCheckboxChange}
    className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
    required
  />
  <Label htmlFor="acceptTerms" className="text-sm">
    Acepto los{" "}
    <button
      type="button"
      className="text-blue-600 underline hover:text-blue-800"
      onClick={() => setShowTerms(true)}
    >
      Términos y Condiciones
    </button>
  </Label>
</div>


        {/* Google reCAPTCHA */}
        <div className="mb-6 flex justify-center">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
            onChange={onCaptchaChange}
            ref={recaptchaRef}
          />
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="rounded-md bg-primary text-white hover:bg-primaryemphasis w-full py-2"
          disabled={loading}
        >
          {loading ? 'Cargando...' : 'Crear'}
        </button>

        {message && (
          <p
            className={`mt-2 text-center ${message.type === 'success' ? 'text-green-500' : 'text-red-500'
              }`}
          >
            {message.text}
          </p>
        )}

      </form>
    </>
  );
};

export default AuthRegister;
