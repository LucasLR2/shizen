# Shizen

> Dashboard modular para gestionar cuentas, notas y herramientas desde un único espacio personal.

Shizen es una aplicación web en desarrollo construida con Next.js, React, TypeScript y Tailwind CSS. El entorno de desarrollo está preparado para ejecutarse localmente o mediante Docker Compose.

## Requisitos

- Node.js 20 o superior y npm, para ejecutar el proyecto localmente.
- Docker y Docker Compose, si se prefiere el entorno recomendado.

## Inicio rápido con Docker

Desde la raíz del proyecto, ejecuta:

```bash
docker compose up -d
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

Para detener el contenedor:

```bash
docker compose down
```

El servicio monta el repositorio dentro del contenedor, por lo que los cambios en el código se reflejan durante el desarrollo.

## Ejecución local

Instala las dependencias y arranca el servidor de desarrollo:

```bash
npm install
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Estructura principal

```text
.
├── public/                 # Recursos estáticos
├── src/app/
│   ├── globals.css         # Estilos globales
│   ├── layout.tsx          # Layout raíz y metadatos
│   └── page.tsx            # Dashboard principal
├── docker-compose.yml      # Servicio de desarrollo con Docker
├── Dockerfile.dev          # Imagen de desarrollo
└── package.json            # Dependencias y scripts
```
