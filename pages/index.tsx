import React from "react";
import { useRouter } from 'next/router'
import type { GetServerSideProps } from "next";
import type { Quote } from "@prisma/client";

type Props = {
  quote: Quote;
};

export const getServerSideProps: GetServerSideProps = async () => {

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  console.log(`getServerSideProps, apiUrl`, apiUrl)
  const fullUrl = `${apiUrl}/api/quote`
  console.log(`getServerSideProps, fetch from full URL`, fullUrl)
  const response = await fetch(fullUrl)
  console.log(`getServerSideProps, response`, response)
  const quote = await response.json()
  console.log(`getServerSideProps, quote`, quote)

  return {
    // serialize and deserialize Date values
    props: { quote: JSON.parse(JSON.stringify(quote)) }
  }
}

const Index: React.FC<Props> = (props) => {
  const router = useRouter()
  return (
    <section className="bg-gray-50">
      <div className="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            {props.quote.content}
          </h1>

          <p className="mt-4 sm:leading-relaxed sm:text-xl">
            {props.quote.author}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button className="block w-full px-12 py-3 text-sm font-medium text-red-600 rounded shadow sm:w-auto hover:text-red-700 active:text-red-500 focus:outline-none focus:ring"
              onClick={() => router.reload()}>
              Another One 🔄
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;