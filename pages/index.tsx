import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>nextjs-template</title>
        <meta name="description" content="nextjs-template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="flex h-full">
        <div className="m-auto text-center">
          <div>nextjs-template</div>
          <div>
            <a
              className="underline hover:no-underline"
              href="https://github.com/lirbank/nextjs-template"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/lirbank/nextjs-template
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
