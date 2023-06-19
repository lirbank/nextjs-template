/**
 * https://nextjs.org/docs/app/building-your-application/optimizing/fonts#with-tailwind-css
 */
import "./globals.css";
import { Inter, Roboto_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata = {
  title: "nextjs-template",
  description: "nextjs-template",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body>{props.children}</body>
    </html>
  );
}
