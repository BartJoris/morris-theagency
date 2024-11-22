// pages/_app.tsx
import '../styles/globals.css'; // Import your global CSS file
import { Roboto_Mono, Vibes } from 'next/font/google';
import Head from 'next/head';
import { AppProps } from 'next/app'; // Import AppProps type

const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' });
const vibes = Vibes({ weight: '400', subsets: ['latin'], variable: '--font-vibes' });

export default function MyApp({ Component, pageProps }: AppProps) { // Use AppProps for typing
  return (
    <>
      <Head>
        <title>Morris The Agency</title>
        <meta name="description" content="Creative agency specializing in photography and social media" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <main className={`${robotoMono.variable} ${vibes.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}