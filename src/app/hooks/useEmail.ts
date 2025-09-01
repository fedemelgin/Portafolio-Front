import { p } from 'framer-motion/client';
import { useState } from 'react';

type FormPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function useEmail() {
  const [status, setStatus] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function sendEmail(payload: FormPayload) {
    setLoading(true);
    setStatus('');
    setSuccess(false);
    setError(false);

    try {
      const API_BASE = process.env.NEXT_PUBLIC_API_URL || '';
      const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });


      if (res.ok) {
        setStatus('¡Mensaje enviado!');
        setSuccess(true);
        setLoading(false);
        setTimeout(() => setSuccess(false), 4000);
        return { ok: true };
      } else {
        setStatus('Error al enviar el mensaje.');
        setError(true);
        setLoading(false);
        setTimeout(() => setError(false), 4000);
        return { ok: false };
      }
    } catch (err) {
      setStatus('Error de conexión.');
      setError(true);
      setLoading(false);
      setTimeout(() => setError(false), 4000);
      return { ok: false };
    }
  }

  return { sendEmail, status, setStatus, success, error, loading };
}