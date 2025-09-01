# 🖥️ Portafolio Frontend

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**Live Demo:** [https://portafolio-front-xi.vercel.app/](https://portafolio-front-xi.vercel.app/)

---

## 📖 Descripción
Este es el **frontend de mi portafolio personal**, construido con **Next.js**.  
Consume un backend hecho en **NestJS** con base de datos **PostgreSQL**.  

El portafolio permite:

- Mostrar proyectos con animaciones 3D.  
- Sección "About Me" con información personal.  
- Formulario de contacto que envía mensajes al backend.  
- Experiencia responsive y optimizada para todos los dispositivos.

---

## 🛠 Tecnologías

| Frontend | Backend | Deploy |
|----------|---------|--------|
| Next.js, React, TypeScript | NestJS, TypeORM | Vercel (frontend), Render (backend) |
| Tailwind CSS, Framer Motion | PostgreSQL | |

---

## 📁 Estructura del Proyecto

```text
Portafolio-Front/
├─ app/                # Páginas de Next.js
├─ components/         # Componentes reutilizables
├─ hooks/              # Hooks personalizados
├─ public/             # Imágenes y assets
├─ types/              # Tipos TypeScript
├─ package.json
├─ next.config.js
└─ README.md


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
