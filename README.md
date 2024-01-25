# Prisma ORM & Vercel Edge Functions (Example)

This sample application deploys a Next.js API route that uses Prisma ORM to Vercel Edge Functions. Support for running inside of edge functions is currently in Preview in Prisma ORM, you can learn more [here]().

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fprisma%2Fnextjs-edge-functions)

## Prerequisites

A [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) or [Neon](https://neon.tech/) database (Vercel Postgres uses Neon under the hood, so you can choose either for this project).


## Usage

### 1. Clone repo

```
git clone git@github.com:prisma/nextjs-edge-functions.git
cd nextjs-edge-functions
```

### 2. Configure database connection

Add the connection URLs that you received after setting up the Vercel Postgres (or Neon) database to the [`.env`](./.env) file. 

```bash
POSTGRES_PRISMA_URL="your-db-connection-string-with-pgbouncer=true"
POSTGRES_URL_NON_POOLING="your-db-connection-string"
```

The values may look similar to this:

```bash
POSTGRES_PRISMA_URL="postgres://default:password@ep-wild-voice-61367780-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?pgbouncer=true&connect_timeout=15"
POSTGRES_URL_NON_POOLING="postgres://default:password@ep-wild-voice-61367780.us-east-1.postgres.vercel-storage.com:5432/verceldb"
```

### 3. Install dependencies

```
npm install
```

### 4. Create tables & seed database

```
npx prisma migrate dev
npx prisma db seed
```

### 5. Run the app

```
npm run dev
```

## Deployment

To deploy the app, you can use the [Vercel CLI](https://vercel.com/docs/cli):

```
vercel deploy
```