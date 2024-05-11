import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

import { nextAuthOptions } from '@/lib/auth'
import { AppRoutePaths } from '@/utils/routes/paths'

interface PublicRoutesLayoutProps {
  children: ReactNode
}

export default async function PublicRoutesLayout({ children }: PublicRoutesLayoutProps) {
  const session = await getServerSession(nextAuthOptions)

  if (session) {
    redirect(AppRoutePaths.Dashboard)
  }

  return <>{children}</>
}
