'use client'

import { ReactNode, useCallback, useState } from 'react'

import { DashboardLayoutContext, DashboardSideBarItem } from '@/contexts/DashboardLayoutContext'

interface DashboardLayoutProviderProps {
  children: ReactNode
  appBarTitle?: string
  sideBarItemsList?: DashboardSideBarItem[]
}

export function DashboardLayoutProvider({
  children,
  appBarTitle = 'Dashboard',
  sideBarItemsList,
}: DashboardLayoutProviderProps) {
  const [title, setTitle] = useState<string>(appBarTitle)
  const [dashboardSideBarItemsList, setDashboardSideBarItemsList] = useState<
    DashboardSideBarItem[]
  >(sideBarItemsList ?? [])
  const [isDashboardSideBarOpen, setIsDashboardSideBarOpen] = useState(false)

  const handleSetTitle = useCallback((newTitle: string) => {
    setTitle(newTitle)
  }, [])

  const toggleDashboardSideBarOpen = useCallback(() => {
    setIsDashboardSideBarOpen((oldDashboardSideBarOpen) => !oldDashboardSideBarOpen)
  }, [])

  const handleSetDashboardSideBarItemsList = useCallback(
    (newDashboardSideBarItemsList: DashboardSideBarItem[]) => {
      setDashboardSideBarItemsList(newDashboardSideBarItemsList)
    },
    [],
  )

  return (
    <DashboardLayoutContext.Provider
      value={{
        title,
        setTitle: handleSetTitle,
        isDashboardSideBarOpen,
        dashboardSideBarItemsList,
        toggleDashboardSideBarOpen,
        setDashboardSideBarItemsList: handleSetDashboardSideBarItemsList,
      }}
    >
      {children}
    </DashboardLayoutContext.Provider>
  )
}
