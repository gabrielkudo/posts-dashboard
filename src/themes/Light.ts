'use client'

import { createTheme, responsiveFontSizes } from '@mui/material'

export const LightTheme = responsiveFontSizes(
  createTheme({
    palette: {
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
        default: '#D6E6F3',
        paper: '#fff',
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
  }),
)
