import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>nextjs-template</title>
        <meta name="description" content="nextjs-template" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="flex h-full">
        <div className="m-auto">nextjs-template</div>
      </main>
    </>
  );
}
