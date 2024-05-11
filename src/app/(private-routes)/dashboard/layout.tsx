import { FeedTwoTone, Home } from '@mui/icons-material'
import { ReactNode } from 'react'

import DashboardHeaderBar from '@/components/DashboardHeaderBar'
import DashboardSideBar from '@/components/DashboardSideBar'
import { DashboardSideBarItem } from '@/contexts/DashboardLayoutContext'
import { DashboardLayoutProvider } from '@/providers/DashboardLayoutProvider'

type LayoutProps = {
  children: ReactNode
}

const sideBarItemsList: DashboardSideBarItem[] = [
  {
    icon: Home,
    path: '/dashboard',
    label: 'Home',
  },
  {
    icon: FeedTwoTone,
    path: '/dashboard/posts',
    label: 'Posts',
  },
]

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <DashboardLayoutProvider sideBarItemsList={sideBarItemsList}>
      <DashboardSideBar>
        <DashboardHeaderBar>{children}</DashboardHeaderBar>
      </DashboardSideBar>
    </DashboardLayoutProvider>
  )
}
