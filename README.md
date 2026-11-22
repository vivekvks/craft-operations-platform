# CRAFT — Operations Management Platform

CRAFT is a full-stack operations management platform designed to help infrastructure and field-service teams manage incidents, coordinate operations, and monitor service performance through a centralized command center.

The project is being developed as a SaaS engineering showcase, focusing on clean architecture, scalable backend design, and AI-assisted operational workflows.

## Project Goals

- Centralize operational monitoring and incident management.
- Help managers track incidents and coordinate field teams.
- Manage incidents from creation to resolution.
- Introduce AI-assisted incident analysis and recommendations.
- Build a maintainable, scalable full-stack application.

## Current Features

- Dark-themed operations command center dashboard.
- Incident management interface.
- Incident creation workflow.
- Incident search, filtering, and status updates.
- Operations monitoring interface.
- REST API for incident management.
- Incident creation and retrieval endpoints.
- Request validation using Zod.
- Reusable Express validation middleware.
- Modular backend architecture with routes, controllers, and services.
- TypeScript-based frontend and backend.
- Monorepo architecture using Yarn Workspaces.

## Technology Stack

| Layer           | Technologies            |
| --------------- | ----------------------- |
| Frontend        | React, TypeScript, Vite |
| Styling         | Tailwind CSS            |
| Backend         | Node.js, Express        |
| Validation      | Zod                     |
| Language        | TypeScript              |
| Package Manager | Yarn Workspaces         |
| Database        | PostgreSQL (planned)    |
| AI Integration  | Planned                 |

## Architecture

```text
craft/
├── apps/
│   ├── react-app/                 # React frontend
│   │   └── src/
│   │       └── components/
│   │           ├── dashboard/
│   │           ├── incidents/
│   │           ├── operations/
│   │           └── layout/
│   │
│   └── api/                       # Express backend
│       └── src/
│           ├── middleware/
│           │   └── validate.ts
│           ├── modules/
│           │   └── incidents/
│           │       ├── incident.controller.ts
│           │       ├── incident.routes.ts
│           │       ├── incident.schema.ts
│           │       ├── incident.service.ts
│           │       └── incident.types.ts
│           ├── app.ts
│           └── server.ts
│
├── packages/                      # Shared packages (planned)
├── package.json
└── yarn.lock
```

## API Endpoints

Base URL: `http://localhost:5000`

| Method | Endpoint         | Description            |
| ------ | ---------------- | ---------------------- |
| GET    | `/api/health`    | API health check       |
| GET    | `/api/incidents` | Retrieve all incidents |
| POST   | `/api/incidents` | Create a new incident  |

### Create Incident

**Request:**

```json
{
  "title": "Payment service failure",
  "severity": "High",
  "service": "Payment Gateway",
  "team": "Backend"
}
```

**Successful response:** `201 Created`

The API validates incoming request bodies using Zod before passing them to the incident controller.

Invalid requests return `400 Bad Request` with field-specific validation errors.

**Supported severity levels:**

- Critical
- High
- Medium
- Low

## Getting Started

### Prerequisites

- Node.js 22+
- Yarn 1.22+

### Installation

Clone the repository:

```bash
git clone https://github.com/vivekvks/craft-operations-platform.git
cd craft-operations-platform
```

Install dependencies:

```bash
yarn install
```

### Run the Frontend

```bash
yarn workspace react-app dev
```

Frontend: http://localhost:5173

### Run the Backend

Open another terminal:

```bash
yarn workspace api dev
```

Backend: http://localhost:5000

Health check: http://localhost:5000/api/health

### Build Applications

Frontend:

```bash
yarn workspace react-app build
```

Backend:

```bash
yarn workspace api build
```

## Development Roadmap

- [x] Operations dashboard.
- [x] Incident management interface.
- [x] Incident creation workflow.
- [x] Initial Express API.
- [x] Incident retrieval and creation endpoints.
- [x] Zod request validation.
- [x] Reusable validation middleware.
- [x] Modular backend architecture.
- [x] Monorepo architecture.
- [ ] PostgreSQL database integration.
- [ ] Persistent incident management.
- [ ] Frontend and backend integration.
- [ ] Authentication and role-based access control.
- [ ] Technician assignment and incident resolution workflow.
- [ ] AI-powered incident analysis.
- [ ] AI agent with controlled operational actions.
- [ ] Analytics and reporting.
- [ ] Public demo deployment.

## Project Status

CRAFT is actively under development.

The frontend currently uses sample data and local application state.

The backend provides REST API endpoints for incident retrieval and creation, with modular route, controller, and service layers. Incoming incident creation requests are validated using Zod and reusable Express middleware.

Incident data is currently stored in memory and resets when the backend restarts. PostgreSQL integration, persistent storage, authentication, and AI functionality are planned for future development.

## Engineering Focus

- Feature-oriented frontend architecture.
- Modular backend architecture.
- Separation of concerns.
- Type-safe API development.
- Reusable validation middleware.
- Maintainable backend structure.
- Secure configuration and API credential handling.
- Validated business workflows.
- Practical AI integration with controlled permissions.

## License

MIT License
