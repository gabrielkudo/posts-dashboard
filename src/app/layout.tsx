import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import type { Metadata, Viewport } from 'next'
import { ReactNode } from 'react'

import AppLayout from '@/components/AppLayout'
import NextAuthSessionProvider from '@/providers/SessionProvider'
import { SnackbarMessageProvider } from '@/providers/SnackbarMessageProvider'

export const metadata: Metadata = {
  title: 'Wealth test - Home',
  description: 'Test application to manage posts with authenticated access',
}

export const viewPort: Viewport = {
  initialScale: 1,
  width: 'device-width',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <NextAuthSessionProvider>
          <AppRouterCacheProvider>
            <AppLayout>
              <SnackbarMessageProvider>{children}</SnackbarMessageProvider>
            </AppLayout>
          </AppRouterCacheProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  )
}
