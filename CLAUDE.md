# TicketFlow

A concert ticket management app built as a MERN stack monorepo. Users can browse concerts, view details, purchase tickets, and create new events.

## Stack

**Frontend** (`/client`)
- React 18 + Vite (port 3010)
- React Router DOM 6 for routing
- TanStack React Query 5 for server state / data fetching
- CSS-in-JS via inline style objects with a design token system (`src/styles/tokens.ts`)
- TypeScript (strict mode)

**Backend** (`/server`)
- Node.js + Express 4 (port 5010)
- MongoDB 7 via Docker + Mongoose 8
- TypeScript compiled with ts-node (CommonJS target)

## Project Structure

```
/
├── client/             # React + Vite frontend
│   └── src/
│       ├── components/ # Navbar, SearchBar, ConcertCard, EventCard, ConcertForm, PageHeader
│       ├── pages/      # Home, BuyTickets, CreateConcert, ConcertDetails
│       ├── services/   # API fetch functions + React Query hooks
│       └── styles/     # Design tokens and common styles
├── server/             # Express backend
│   ├── db/             # Mongoose connection, models (Concert, Message), seed script
│   ├── mock/           # Static mock data for concerts, messages, stats
│   └── routes/         # /api/concerts, /api/stats
└── docker-compose.yml  # MongoDB container
```

## Running the Project

### Prerequisites
- Node.js 18+
- Docker (for MongoDB)

### Install dependencies
```bash
npm run install:all
```

### Start everything (Docker + server + client)
```bash
npm run dev
```

This starts MongoDB in Docker, then runs the server and client concurrently.

| Service  | URL                        |
|----------|---------------------------|
| Frontend | http://localhost:3010      |
| Backend  | http://localhost:5010      |
| MongoDB  | mongodb://localhost:27017  |

### Start individually
```bash
npm run server   # Express backend only
npm run client   # Vite frontend only
```

### Stop Docker
```bash
npm run stop
```

### VS Code debugging
Open the Run & Debug panel and use:
- **Server** — attaches Node debugger to the Express process
- **Client** — launches Chrome pointed at the frontend
- **Full Stack** — starts both together

## API Endpoints

| Method | Path                  | Description          |
|--------|-----------------------|----------------------|
| GET    | `/api/concerts`       | List all concerts    |
| GET    | `/api/concerts/:id`   | Get concert by ID    |
| POST   | `/api/concerts`       | Create a concert     |
| GET    | `/api/stats`          | Get platform stats   |
| GET    | `/api/health`         | Health check         |

## Environment Variables

Copy `server/.env.example` to `server/.env`:

```
MONGO_URI=mongodb://localhost:27017/ticketflow
PORT=5010
```

## Key Conventions

- **Styles**: Each component has a co-located `.styles.ts` file exporting a `Record<string, CSSProperties>` object. Use design tokens from `src/styles/tokens.ts` for colors, spacing, and typography — don't hardcode values.
- **Data fetching**: All API calls go through custom React Query hooks in `src/services/api/hooks/`. Add new hooks there rather than fetching directly in components.
- **Types**: Shared data shapes (`Concert`, `IConcert`, `Stat`) are defined in `src/services/api/api.ts` (client) and `server/db/models/` (server). Keep them in sync.
- **Mock data**: `server/mock/` contains static data used by routes during development. The seed script (`server/db/seed.ts`) populates MongoDB from this mock data.

## Testing

No test suite is currently configured. To add one:
- **Client**: Vitest + React Testing Library
- **Server**: Jest + Supertest
