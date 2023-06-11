import Head from 'next/head'
import './globals.css'
import { Metadata } from "next"
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { fontSans } from '@/lib/fonts'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/site-header'
import { siteConfig } from '@/config/site'
import { TailwindIndicator } from '@/components/tailwind-indicator'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className='relative flex min-h-screen flex-col'>
            <SiteHeader />
            <div className='flex-1'>
              {children}
            </div>
          </div>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
