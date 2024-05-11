'use client'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { ReactNode } from 'react'

import useUserPreferencesStore from '@/stores/preferences'
import { LightTheme } from '@/themes'
import { DarkTheme } from '@/themes/Dark'

type AppLayoutProps = {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  const { themeName } = useUserPreferencesStore()

  // const theme = useMemo(() => {
  //   if (themeName === 'light') return LightTheme

  //   return DarkTheme
  // }, [themeName])

  return (
    <ThemeProvider theme={themeName === 'light' ? LightTheme : DarkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
