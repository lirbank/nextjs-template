import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>nextjs-template</title>
        <meta name="description" content="nextjs-template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-full">
        <div className="m-auto">nextjs-template</div>
      </main>
    </>
  );
}
