import './globals.css'
import { Roboto_Mono, Vibes } from 'next/font/google'

const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' })
const vibes = Vibes({ weight: '400', subsets: ['latin'], variable: '--font-vibes' })

export const metadata = {
  title: 'Morris The Agency',
  description: 'Creative agency specializing in photography and social media',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${robotoMono.variable} ${vibes.variable}`}>
      <head>
        <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/assets/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}

