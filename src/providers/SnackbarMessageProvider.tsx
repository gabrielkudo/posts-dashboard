'use client'

import { Alert, Snackbar } from '@mui/material'
import { ReactNode, useCallback, useState } from 'react'

import { AppSnackbarMessageContext, SnackbarMessageData } from '../contexts/SnackbarMessageContext'

interface SnackbarMessageProviderProps {
  children: ReactNode
}

export function SnackbarMessageProvider({ children }: SnackbarMessageProviderProps) {
  const [snack, setSnack] = useState<SnackbarMessageData>({
    message: '',
    open: false,
  })

  const [errorSnack, setErrorSnack] = useState<SnackbarMessageData>({
    message: '',
    open: false,
  })

  const handleSetSnackbar = useCallback((newSnack: SnackbarMessageData) => {
    setSnack(newSnack)
  }, [])

  const handleSetErrorSnackbar = useCallback((newErrorSnack: SnackbarMessageData) => {
    setErrorSnack(newErrorSnack)
  }, [])

  const handleClose = () => {
    setSnack({
      ...snack,
      open: false,
    })
  }

  const handleErrorSnackClose = () => {
    setErrorSnack({
      ...snack,
      open: false,
    })
  }

  return (
    <AppSnackbarMessageContext.Provider
      value={{
        snack,
        setSnack: handleSetSnackbar,
        errorSnack,
        setErrorSnack: handleSetErrorSnackbar,
      }}
    >
      <Snackbar
        open={snack.open}
        autoHideDuration={snack?.dismissAfter || 4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="info" variant="outlined">
          {snack.message}
        </Alert>
      </Snackbar>
      <Snackbar
        open={errorSnack.open}
        autoHideDuration={errorSnack?.dismissAfter || 4000}
        onClose={handleErrorSnackClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleErrorSnackClose} severity="error" variant="outlined">
          {errorSnack.message}
        </Alert>
      </Snackbar>
      {children}
    </AppSnackbarMessageContext.Provider>
  )
}
