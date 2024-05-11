'use client'

import { createTheme } from '@mui/material'

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#337BB1',
      dark: '#28588B',
      light: '#699ED3',
      contrastText: '#fff',
    },
    secondary: {
      main: '#F37C27',
      dark: '#7A381E',
      light: '#F9C097',
      contrastText: '#fff',
    },
    background: {
      paper: '#303134',
      default: '#202124',
    },
  },
  typography: {
    allVariants: {
      color: 'white',
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        outlinedError: {
          backgroundColor: '#fff',
        },
      },
    },
  },
})
