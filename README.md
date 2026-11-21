\# CRAFT — Operations Management Platform



CRAFT is a full-stack operations management platform designed to help infrastructure and field-service teams manage incidents, coordinate operations, and monitor service performance through a centralized command center.



The project is being developed as a production-oriented SaaS engineering showcase, with a focus on clean architecture, scalable backend design, and AI-assisted operational workflows.



\## Project Goals



\- Centralize operational monitoring and incident management.

\- Help managers track incidents and coordinate field teams.

\- Provide structured incident workflows from creation to resolution.

\- Introduce AI-assisted incident analysis and recommendations.

\- Build a maintainable, scalable full-stack application.



\## Current Features



\- Dark-themed operations command center dashboard.

\- Incident management interface.

\- Create and manage incidents using frontend state.

\- Incident search, filtering, and status updates.

\- Operations monitoring interface.

\- Initial Express API with a health-check endpoint.

\- TypeScript-based frontend and backend.

\- Monorepo project structure.



\## Technology Stack



| Layer | Technologies |

|---|---|

| Frontend | React, TypeScript, Vite |

| Styling | Tailwind CSS |

| Backend | Node.js, Express |

| Language | TypeScript |

| Package Manager | Yarn Workspaces |

| Database | Planned: PostgreSQL |

| AI Integration | Planned |



\## Architecture



```text

craft/

├── apps/

│   ├── react-app/       # React frontend

│   │   └── src/

│   │       └── components/

│   │           ├── dashboard/

│   │           ├── incidents/

│   │           ├── operations/

│   │           └── layout/

│   │

│   └── api/             # Express backend

│       └── src/

│           ├── app.ts

│           └── server.ts

│

├── packages/            # Shared packages (planned)

├── package.json

└── yarn.lock

```



\## Getting Started



\### Prerequisites



\- Node.js 22+

\- Yarn 1.22+



\### Installation



Clone the repository:



```bash

git clone https://github.com/vivekvks/craft-operations-platform.git

cd

