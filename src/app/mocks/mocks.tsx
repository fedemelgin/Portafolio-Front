import type { ProductStructure } from "../types/TypeProduct";

export const mockProjects: ProductStructure[] = [
  {
    "id": 1,
    "title": "Store Management Platform",
    "category": "Fullstack / Arquitectura",
    "description": "Sistema administrativo con roles (RBAC), gestión de stock, CRUD avanzado con paginación y arquitectura modular en NestJS.",
    "image": "/assets/projects/store-management.png",
    "technologies": ["Angular", "NestJS", "TypeORM", "PostgreSQL", "JWT"],
    "link": "https://github.com/fedemelgin/store-management-platform",
    "featured": true
  },
  {
    "id": 2,
    "title": "E-commerce Full Stack",
    "category": "Aplicación Web",
    "description": "Plataforma de comercio electrónico con carrito dinámico e integración de pagos mediante la API de Mercado Pago.",
    "image": "/assets/projects/ecommerce.png",
    "technologies": ["React", "NestJS", "TypeScript", "TailwindCSS", "Mercado Pago"],
    "link": "https://github.com/fedemelgin/ecommerce",
    "featured": true
  },
  {
    "id": 3,
    "title": "Sistema de Turnos Enterprise",
    "category": "Microservicios",
    "description": "Arquitectura escalable estilo SaaS con API Gateway y microservicios comunicados mediante RabbitMQ para gestión de citas y notificaciones.",
    "image": "/assets/projects/appointments.png",
    "technologies": ["NestJS", "RabbitMQ", "Docker", "PostgreSQL", "Redis"],
    "link": "https://github.com/fedemelgin/appointment-service",
    "featured": true
  },
  {
    "id": 4,
    "title": "Simulador de Sistema Operativo",
    "category": "Sistemas de Bajo Nivel",
    "description": "Implementación de Kernel, CPU y Filesystem en C/Go. Incluye planificación de procesos, gestión de memoria y protocolos de comunicación.",
    "image": "/assets/projects/so-utn.png",
    "technologies": ["C / Go", "Linux", "Sockets", "Sistemas Operativos"],
    "link": "https://github.com/fedemelgin/so-project-utn",
    "featured": true
  }
]