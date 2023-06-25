# nextjs-template

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and enahnced with my favorite configuration and tooling.

## Preconfigured packages and tools

- https://nextjs.org/
- https://vitest.dev/
- https://tailwindcss.com/docs/guides/nextjs
- https://prettier.io/
- https://typescript-eslint.io/docs/linting/configs/#strict
- https://code.visualstudio.com/

## Vercel configuration

Vercel will automatically run Prettier and tests (as well as ESLint) before building and deploying the app. No additional configuration is needed.

## Recommendations

- Use [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md) to install Node.js and NPM
- [Visual Studio Code](https://code.visualstudio.com/)
- [GitHub Desktop](https://desktop.github.com/)

## Dev prerequisites

You only have to do this the first time you set up the app.

1. Install Node.js 18 and NPM 9 (using [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md))

1. Check out this [Git repo](https://github.com/lirbank/nextjs-template) locally.

1. Run `npm install` or `npm run deps-check` to install dependencies

1. Run `npx vercel@latest link` to link your local project to Vercel. This will enable you to automatically pull environment variables for development. nextjs-template is hosted under the `Mikael Lirbank` Vercel project as `lirbank/nextjs-template`. The development environment variables are pulled down from Vercel every time the app is started with `npm run dev`.

## Start the app locally

1. Start the app with `npm run dev`

# The default Next.js README follows

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
