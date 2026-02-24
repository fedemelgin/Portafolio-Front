import type { ProductStructure } from "../types/TypeProduct";

export const mockProjects: ProductStructure[] = [
  {
    id: 1,
    title: "E-commerce Full Stack",
    category: "Web Application",
    description: "Plataforma completa de e-commerce con autenticación, pagos y panel de administración.",
    image: "/assets/mock_1.png",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Stripe"],
    link: "https://github.com/fedemelgin/ecommerce",
    featured: true
  },
  {
    id: 2,
    title: "Task Manager API",
    category: "Backend",
    description: "API REST para gestión de tareas con JWT y roles.",
    image: "/assets/mock_1.png",
    technologies: ["NestJS", "TypeORM", "PostgreSQL"],
    link: "https://github.com/fedemelgin/task-api",
    featured: false
  },
  {
    id: 3,
    title: "Portfolio Personal",
    category: "Frontend",
    description: "Portfolio desarrollado con animaciones modernas y diseño responsive.",
    image: "/assets/mock_1.png",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
    link: "https://fedemelgin.dev",
    featured: false
  },
  {
    id: 4,
    title: "Chat en Tiempo Real",
    category: "Full Stack",
    description: "Aplicación de chat con WebSockets y autenticación.",
    image: "/assets/mock_1.png",
    technologies: ["React", "Node.js", "Socket.io"],
    link: "https://github.com/fedemelgin/chat-app",
    featured: true
  }
];