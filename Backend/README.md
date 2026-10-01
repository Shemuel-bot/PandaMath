# PandaMath Backend

Node.js API using Express, Prisma, and PostgreSQL.

## Requirements

- Node.js 20 or newer and npm
- Docker with the Compose plugin, or a local PostgreSQL server

## Run locally

From this directory, start PostgreSQL and configure the connection:

```bash
docker compose up -d db
cp .env.example .env
npm install
npm run db:migrate -- --name init
npm run dev
```

The API listens at `http://localhost:3000`. `GET /api/health` checks the database connection and returns `503` if PostgreSQL is unavailable.

Use `npm start` to run without watch mode and `npm run db:studio` to open Prisma Studio. The development database credentials in `.env.example` are for local use only.