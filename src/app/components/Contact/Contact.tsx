"use client"
import React, { useState } from 'react';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion'
import useEmail from '@/app/hooks/useEmail';
import { useTranslations } from 'next-intl'

type TypeForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {

  const [form, setForm] = useState<TypeForm>({ name: '', email: '', subject: '', message: '' });

  const t = useTranslations("contact");

  // agregar setStatus al destructuring
  const { sendEmail, status, setStatus, success, error, loading } = useEmail();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus(t("error_message"));
      return;
    }

    const result = await sendEmail(form);
    if (result.ok) {
      setForm({ name: '', email: '', subject: '', message: '' });
    }
  };

  const h2Ref = useRef(null);
  const inView = useInView(h2Ref, { once: false });

  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: false });
  return (
      <>
      {success && (
      <div className="fixed inset-x-0 top-6 z-50 flex items-center justify-center">
        <div className="flex items-center justify-center gap-3 min-w-[350px] max-w-[400px] w-fit h-14 bg-teal-100 border-t-4 border-teal-500 px-4 py-3 shadow-lg rounded animate-slideDown">
          <svg className="fill-current h-6 w-6  text-teal-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
          </svg>
        <div>
        <p className="font-bold text-teal-900">{t("status_ok")}</p>
        <p className="text-sm text-teal-800">{t("status_ok_message")}</p>
        </div>
      </div>
    </div>
    )}
      {error && (
  <div className="fixed inset-x-0 top-6 z-50 flex items-center justify-center">
    <div className="flex items-center justify-center gap-3 min-w-[350px] max-w-[400px] w-fit h-14 bg-rose-100 border-t-4 border-rose-500 px-4 py-3 shadow-lg rounded animate-slideDown">
      <svg className="fill-current h-6 w-6  text-rose-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
      </svg>
      <div>
        <p className="font-bold text-red-900">{t("status_error")}</p>
        <p className="text-sm text-red-800">{t("status_error_message")}</p>
      </div>
    </div>
  </div>
)}
      
    <section id="contact" className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col justify-center items-center gap-6 ">
        {/* texto Contactme */}
        <div className="text-center p-2">
          <motion.h2 ref={h2Ref} initial={{ opacity: 0, scale: 0 }} animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="text-4xl md:text-5xl font-bold text-sky-500 mb-4">{t("title")}</motion.h2>
        </div>

        <div className='flex flex-col md:flex-row gap-4 '>
          
        {/* Formulario */}
        <motion.div  ref={formRef} initial={{opacity: 0, x:100}} animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}transition={{ duration: 0.6, ease: "easeOut" }} className="h-[500px]  md:self-start  flex items-center justify-center rounded-lg p-8 w-[300px] border border-gray-700  shadow-[rgba(6,24,44,0.4)_0px_0px_0px_2px,rgba(6,24,44,0.65)_0px_4px_6px_-1px,rgba(255,255,255,0.08)_0px_1px_0px_inset]">
          <form className=" p-2  flex flex-col gap-6 " onSubmit={handleSubmit}>
            {/* Nombre */}
            <div className="relative w-60 group hover:ring-sky-500">
              <span className="absolute -left-0.5 top-2 bottom-2 w-1.5 rounded bg-gradient-to-b from-sky-400 to-sky-600 opacity-70 transition-all duration-300 group-focus-within:opacity-100"></span>
              <input
                disabled={loading}
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder=" "
                className={`peer w-full pl-6 pr-4 pt-6 pb-2 text-sm disabled:opacity-70 bg-transparent border border-gray-200 rounded-lg shadow-md focus:border-transparent focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all duration-150 placeholder-transparent ${form.name ? 'bg-white' : 'bg-transparent'}`}
              />
              <label
                    htmlFor="name"
                    className={
                        `absolute left-6 text-sm text-gray-500 transition-all duration-200 ease-in-out cursor-text
                        ${form.name
                        ? 'top-1 text-sm text-sky-500 font-semibold'
                        : 'top-3.5 text-base'}
                        peer-focus:top-1 peer-focus:text-sm peer-focus:text-sky-500 peer-focus:font-semibold`
                    }
                    >
                    {t("name")}
              </label>
            </div>

            {/* Email */}
            <div className="relative w-60 group hover:ring-sky-500">
              <span className="absolute -left-0.5 top-2 bottom-2 w-1.5 rounded bg-gradient-to-b from-sky-400 to-sky-600 opacity-70 transition-all duration-300 group-focus-within:opacity-100"></span>
              <input
                disabled={loading}
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder=" "
                className={`peer w-full pl-6 pr-4 pt-6 pb-2 text-sm disabled:opacity-70 bg-transparent border border-gray-200 rounded-lg shadow-md focus:border-transparent focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all duration-150 placeholder-transparent ${form.email ? 'bg-white' : 'bg-transparent'}`}
              />
              <label
                htmlFor="email"
                className={`absolute left-6 text-sm text-gray-500 transition-all duration-200 ease-in-out cursor-text
                  ${form.email
                    ? 'top-1 text-sm text-sky-500 font-semibold'
                    : 'top-3.5 text-base'}
                  peer-focus:top-1 peer-focus:text-sm peer-focus:text-sky-500 peer-focus:font-semibold`}
              >
                {t("email")}
              </label>
            </div>

            {/* Asunto */}
            <div className="relative w-60 group hover:ring-sky-500">
              <span className="absolute -left-0.5 top-2 bottom-2 w-1.5 rounded bg-gradient-to-b from-sky-400 to-sky-600 opacity-70 transition-all duration-300 group-focus-within:opacity-100"></span>
              <input
                disabled={loading}
                type="text"
                id="subject"
                name="subject"
                required
                value={form.subject}
                onChange={handleChange} 
                placeholder=" "
                className={`peer w-full pl-6 pr-4 pt-6 pb-2 text-sm disabled:opacity-70 bg-transparent border border-gray-200 rounded-lg shadow-md focus:border-transparent focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all duration-150 placeholder-transparent ${form.subject ? 'bg-white' : 'bg-transparent'}`}
              />
              <label
                htmlFor="subject"
                className={
                    `absolute left-6 text-sm text-gray-500 transition-all duration-200 ease-in-out cursor-text
                    ${form.subject
                    ? 'top-1 text-sm text-sky-500 font-semibold'
                    : 'top-3.5 text-base'}
                    peer-focus:top-1 peer-focus:text-sm peer-focus:text-sky-500 peer-focus:font-semibold`
                }
                >
                {t("subject")}
                </label>
            </div>

            {/* Mensaje */}
            <div className="relative w-60 group hover:ring-sky-500">
                <span className="absolute -left-0.5 top-2 bottom-2 w-1.5 rounded bg-gradient-to-b from-sky-400 to-sky-600 opacity-70 transition-all duration-300 group-focus-within:opacity-100"></span>
                <textarea
                    disabled={loading}
                    id="message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t("placeholder")}
                    className={`peer w-full disabled:opacity-70 pl-6 pr-4 pt-2 pb-2 text-sm bg-transparent border border-gray-200 rounded-lg shadow-md focus:border-transparent focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all duration-150 resize-none
                        ${form.message ? 'bg-white' : 'bg-transparent'}
                        placeholder:text-gray-500 placeholder:text-sm placeholder:font-normal`}
                    rows={4}
                />
            </div>

            {/* Botón de envío */}
            <button
  type="submit"
  disabled={loading}
  className="mt-4 px-6 py-2 bg-sky-500 flex justify-center items-center text-white rounded-lg font-semibold hover:bg-sky-600 transition cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed min-w-[120px]"
>
  {loading ? (
    <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
  ) : (
    t("enviar")
  )}
</button>
          </form>
        </motion.div>

        <motion.div
          ref={formRef}
          initial={{ opacity: 0, x: 100 }}
          animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center md:items-start justify-center rounded-2xl p-8 min-w-[280px] h-[400px] md:h-[500px]  shadow-xl backdrop-blur-sm border border-gray-700">
          <ul className="flex flex-col p-1 justify-center items-center gap-6 w-full ">
            {[
              {
                id: "icon-ig",
                text: "Instagram",
                link: "https://www.instagram.com/fedemelgin/",
                hoverClass: "group-hover:text-rose-400",
                borderLink:"hover:border-rose-500",
              },
              {
                id: "icon-github",
                text: "Github",
                link: "https://github.com/fedemelgin",
                hoverClass: "group-hover:text-gray-400",
                borderLink:"hover:border-gray-500",
              },
              {
                id: "icon-whatsapp",
                text: "Whatsapp",
                link: "https://wa.me/+5491150298817",
                hoverClass: "group-hover:text-green-400",
                borderLink:"hover:border-green-500",
              },
              {
                id: "icon-linkedin",
                text: "Linkedin",
                link: "https://linkedin.com",
                hoverClass: "group-hover:text-blue-400",
                borderLink:"hover:border-blue-500",
              },
              {
                id: "icon-gmail",
                text: "Gmail",
                link: "https://mail.google.com/mail/?view=cm&fs=1&to=federicomelgin@gmail.com&su=Contacto%20desde%20tu%20portfolio&body=Hola%20Federico,",
                hoverClass: "group-hover:text-yellow-400",
                borderLink:"hover:border-yellow-500",
              },
            ].map((item) => (
              <li key={item.id} className=' m-0.5 w-[200px]'>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-3 rounded-lg border-transparent ${item.borderLink} hover:bg-gray-800 transition hover:translate-x-2 duration-300 group`}
                >
                  <svg className={`size-4 md:size-6 fill-sky-400 transition group-hover:scale-110 ${item.hoverClass}`} aria-hidden>
                    <use href={`#${item.id}`}></use>
                  </svg>
                  <span className={`text-sm md:text-lg font-semibold text-gray-200 ${item.hoverClass}`}>
                    {item.text}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
        </div>
        </div>
    </section>
    </>
  );
}