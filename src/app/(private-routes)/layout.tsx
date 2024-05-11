import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

import { nextAuthOptions } from '@/lib/auth'
import { AppRoutePaths } from '@/utils/routes/paths'

interface PrivateRoutesLayoutProps {
  children: ReactNode
}

export default async function PrivateRoutesLayout({ children }: PrivateRoutesLayoutProps) {
  const session = await getServerSession(nextAuthOptions)

  if (!session) {
    redirect(AppRoutePaths.Login)
  }

  return <>{children}</>
}
