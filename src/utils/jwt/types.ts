export type SignInput = {
  expires?: boolean
  expiresIn?: string | number
  payload: Record<string, any>
}

export type SingOutput = string

export type DecodeInput = {
  token: string
}

export type DecodeOutput<T> = T
