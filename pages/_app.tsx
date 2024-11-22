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
        <meta name="description" content="Digitaal bureau gespecialiseerd in fotografie en social media." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" type="image/png" sizes="192x192" href="/web-app-manifest-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/web-app-manifest-512x512.png" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Morris The Agency" />
        <meta property="og:description" content="Digitaal bureau gespecialiseerd in fotografie en social media." />
        <meta property="og:image" content="https://www.morristheagency.be/assets/morris-the-agency.png" /> {/* Update with your logo URL */}
        <meta property="og:type" content="website" />
      </Head>
      <main className={`${robotoMono.variable} ${vibes.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}