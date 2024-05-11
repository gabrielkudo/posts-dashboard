import { SignOptions, sign, verify } from 'jsonwebtoken'

import { DecodeInput, DecodeOutput, SignInput, SingOutput } from './types'

export class JWTGateway {
  public static async sign({
    expires = false,
    expiresIn,
    payload,
  }: SignInput): Promise<SingOutput> {
    const options: SignOptions = {}
    if (expires) {
      options.expiresIn = expiresIn || '24h'
    }

    let secret = process.env.NEXTAUTH_SECRET
    if (!secret) {
      throw new Error('You must add the jwt secret in the environment')
    }

    return sign(payload, secret, options)
  }

  public static async decode<T>({ token }: DecodeInput): Promise<DecodeOutput<T>> {
    let secret = process.env.NEXTAUTH_SECRET
    if (!secret) {
      throw new Error('You must add the jwt secret in the environment')
    }
    console.log('JWT Gateway - decoding token: ', token)
    return verify(token, secret) as DecodeOutput<T>
  }
}
