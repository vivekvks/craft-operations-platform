# CRAFT — Operations Management Platform

**A modern operations management platform designed to help teams monitor incidents, coordinate operations, and improve operational visibility.**

CRAFT is a portfolio project focused on building a practical, scalable operations management application using modern frontend technologies, with plans to introduce backend services, persistent data storage, and AI-powered operational assistance.

## Project Overview

CRAFT aims to provide a centralized workspace for operations teams to manage incidents, monitor operational activity, and make informed decisions.

The application is being developed incrementally, following real-world software engineering practices and a modular architecture.

## Current Features

- **Operations Dashboard** — Centralized operational overview with metrics and activity information.
- **Incident Management** — View, search, and filter incidents.
- **Incident Creation** — Create new incidents with severity, service, and team information.
- **Incident Status Management** — Update incident statuses.
- **Incident Details** — View detailed information for selected incidents.
- **Modular UI Architecture** — Reusable React components organized by application module.

## Technology Stack

| Technology   | Purpose                       |
| ------------ | ----------------------------- |
| React        | User interface                |
| TypeScript   | Type safety                   |
| Vite         | Development and build tooling |
| Tailwind CSS | Styling                       |
| Yarn         | Package management            |

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── dashboard/
│   ├── incidents/
│   ├── layout/
│   └── operations/
├── App.tsx
├── main.tsx
└── index.css
```

The application uses a component-based architecture to keep features modular and maintainable.

## Getting Started

### Prerequisites

- Node.js
- Yarn 1.x

### Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate to the application directory:

```bash
cd react-app
```

Install dependencies:

```bash
yarn install
```

Start the development server:

```bash
yarn dev
```

Open the local URL displayed in your terminal.

### Production Build

```bash
yarn build
```

### Code Quality

```bash
yarn lint
```

## Development Roadmap

CRAFT is under active development.

Planned improvements include:

- Backend API using Node.js and Express.
- PostgreSQL database integration.
- Persistent incident and operations data.
- User authentication and role-based access control.
- Technician and team management.
- Live operational map.
- Analytics and reporting.
- AI-powered incident analysis and operational assistance.
- Controlled AI actions with permission checks and user confirmation.

## Engineering Approach

The project follows these principles:

- Modular and reusable components.
- Type-safe development with TypeScript.
- Separation of application responsibilities.
- Incremental feature development.
- Build and functionality verification.
- Secure backend and AI integration as the architecture evolves.

## Project Status

**Status:** Active Development

CRAFT currently contains a functional frontend prototype. Backend integration, persistent storage, authentication, and AI capabilities are planned development milestones and are not yet implemented.

---

**CRAFT — Building smarter operations, one feature at a time.**
