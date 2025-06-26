# Portfolio Application

## Overview

This is a modern, full-stack portfolio application built with React (frontend) and Express.js (backend). The application features a responsive design with smooth animations, dark/light theme support, and a contact form system. It's designed to showcase a developer's skills, experience, education, and projects in an interactive and visually appealing way.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth animations and transitions
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL support
- **Schema Validation**: Zod for request/response validation
- **Development**: tsx for TypeScript execution in development

### Database Architecture
- **Database**: PostgreSQL (configured via Drizzle)
- **Schema Management**: Drizzle migrations
- **Current Storage**: In-memory storage (MemStorage) for development
- **Schema**: Contact form submissions table with fields for name, email, subject, message, and timestamp

## Key Components

### Frontend Components
1. **Portfolio Sections**: Modular components for hero, about, skills, experience, projects, education, and contact sections
2. **UI Components**: Comprehensive set of reusable components (buttons, forms, cards, etc.)
3. **Theme System**: Dark/light theme toggle with system preference detection
4. **Animation System**: Intersection observer hooks and predefined animation variants
5. **Contact Form**: Validated form with real-time feedback

### Backend Components
1. **API Routes**: RESTful endpoints for contact form submission and retrieval
2. **Storage Layer**: Abstract storage interface with in-memory implementation
3. **Validation**: Zod schema validation for incoming requests
4. **Error Handling**: Centralized error handling middleware

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Request Validation**: Backend validates requests using Zod schemas
3. **Data Processing**: Business logic processes validated data
4. **Storage Operations**: Data is persisted using the storage layer
5. **Response**: JSON responses sent back to client
6. **UI Updates**: Frontend updates based on response status

### Contact Form Flow
1. User fills out contact form
2. Form data validated client-side with Zod
3. POST request sent to `/api/contact` endpoint
4. Server validates and stores contact data
5. Success/error response returned to client
6. UI displays appropriate feedback to user

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Components**: Radix UI primitives, class-variance-authority
- **Animation**: Framer Motion, Embla Carousel
- **Forms**: React Hook Form, @hookform/resolvers
- **State**: TanStack React Query
- **Validation**: Zod, Drizzle-Zod
- **Routing**: Wouter
- **Utilities**: clsx, date-fns, cmdk

### Backend Dependencies
- **Server**: Express.js
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Validation**: Zod
- **Session**: connect-pg-simple (configured for PostgreSQL sessions)
- **Development**: tsx for TypeScript execution

### Development Dependencies
- **Build**: Vite, esbuild
- **TypeScript**: Full TypeScript support across the stack
- **Replit Integration**: Vite plugins for Replit environment

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev`
- **Process**: tsx runs the Express server with Vite middleware
- **Hot Reload**: Both frontend and backend support hot reloading
- **Port**: Application runs on port 5000

### Production Build
- **Frontend**: Vite builds optimized static assets
- **Backend**: esbuild bundles server code for Node.js
- **Output**: `dist/` directory contains both client and server builds
- **Command**: `npm run build && npm run start`

### Replit Configuration
- **Modules**: Node.js 20, Web, PostgreSQL 16
- **Deployment**: Autoscale deployment target
- **Port Mapping**: Internal port 5000 maps to external port 80
- **Build Process**: npm run build
- **Start Command**: npm run start

### Database Setup
- **Development**: In-memory storage for rapid development
- **Production**: PostgreSQL with Drizzle migrations
- **Environment**: DATABASE_URL environment variable required
- **Migration**: `npm run db:push` to apply schema changes

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 26, 2025. Initial setup