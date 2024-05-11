'use client'

import { SvgIconComponent } from '@mui/icons-material'
import { createContext, useContext } from 'react'

export interface DashboardSideBarItem {
  icon: SvgIconComponent
  path: string
  label: string
}

interface DashboardLayoutContextData {
  title: string
  setTitle: (newTitle: string) => void
  isDashboardSideBarOpen: boolean
  toggleDashboardSideBarOpen: () => void
  dashboardSideBarItemsList: DashboardSideBarItem[]
  setDashboardSideBarItemsList: (newDashboardSideBarItemsList: DashboardSideBarItem[]) => void
}

export const DashboardLayoutContext = createContext({} as DashboardLayoutContextData)

export const useDashboardLayoutContext = () => {
  return useContext(DashboardLayoutContext)
}
