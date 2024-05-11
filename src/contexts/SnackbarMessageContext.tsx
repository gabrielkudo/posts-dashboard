'use client'

import { createContext, useContext } from 'react'

export interface SnackbarMessageData {
  message: string
  open: boolean
  dismissAfter?: number
}

export interface SnackbarMessageContextData {
  snack: SnackbarMessageData
  setSnack: (newSnack: SnackbarMessageData) => void
  errorSnack: SnackbarMessageData
  setErrorSnack: (newErrorSnack: SnackbarMessageData) => void
}

export const AppSnackbarMessageContext = createContext({} as SnackbarMessageContextData)

export const useSnackbarMessageContext = () => {
  return useContext(AppSnackbarMessageContext)
}
