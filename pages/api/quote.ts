import prisma from '../../lib/prisma'

export const config = {
  runtime: 'edge',
};

export default async function () {

  const count = 178 // number of quotes in prisma/data.json

  const randomNo = Math.floor(Math.random() * count);

  console.log(`Request log from DB`)
  const quote = await prisma.quote.findUnique({
    where: { id: randomNo, }
  })
  console.log({ quote })

  return new Response(
    JSON.stringify(quote),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, s-maxage=10, stale-while-revalidate=60',
      },
    }
  )
}
