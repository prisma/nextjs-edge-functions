import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { Pool } from "@neondatabase/serverless";

export const config = {
  runtime: 'edge',
};

export const dynamic = 'force-dynamic'

const neon = new Pool({ connectionString: process.env.POSTGRES_PRISMA_URL });
const adapter = new PrismaNeon(neon);
const prisma = new PrismaClient({ adapter });

export default async function () {

  const count = 178 // number of quotes in prisma/data.json

  const randomNo = Math.floor(Math.random() * count);

  const quote = await prisma.quote.findUnique({
    where: { id: randomNo, }
  })
  console.log(`api-route`, quote)

  return new Response(
    JSON.stringify(quote),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  )
}
