'use client'

import { ChevronLeft, DarkMode, Logout } from '@mui/icons-material'
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

import { useDashboardLayoutContext } from '@/contexts/DashboardLayoutContext'
import useUserPreferencesStore from '@/stores/preferences'
import { AppRoutePaths } from '@/utils/routes/paths'

import { DashboardSideBarLinkItem } from './LinkItem'

interface DashboardSideBarProps {
  children: ReactNode
}

export default function DashboardSideBar({ children }: DashboardSideBarProps) {
  const { toggleTheme } = useUserPreferencesStore()
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const router = useRouter()
  const { isDashboardSideBarOpen, toggleDashboardSideBarOpen, dashboardSideBarItemsList } =
    useDashboardLayoutContext()

  async function logout() {
    await signOut({
      redirect: false,
    })

    router.replace(AppRoutePaths.Login)
  }

  return (
    <>
      <Drawer
        open={isDashboardSideBarOpen}
        variant="temporary"
        onClose={toggleDashboardSideBarOpen}
        hideBackdrop={!smDown}
        disableScrollLock={!smDown}
        sx={{ maxWidth: theme.spacing(30) }}
        PaperProps={{
          elevation: smDown ? 12 : 0,
        }}
      >
        <Box
          sx={{
            width: (theme) => theme.spacing(30),
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {isDashboardSideBarOpen && (
            <>
              <Toolbar
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  px: [1],
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    px: 1,
                  }}
                >
                  <Avatar
                    sx={{
                      height: (theme) => theme.spacing(5),
                      width: (theme) => theme.spacing(5),
                    }}
                    src="/logo.png"
                  />
                  <Typography
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{
                      ml: 1,
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      letterSpacing: '.1rem',
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                  >
                    LOGO
                  </Typography>
                </Box>
                <IconButton onClick={toggleDashboardSideBarOpen}>
                  <ChevronLeft />
                </IconButton>
              </Toolbar>
              <Divider />
            </>
          )}

          <Divider />

          <Box sx={{ flex: 1 }}>
            <List component="nav">
              {dashboardSideBarItemsList.map((item) => (
                <DashboardSideBarLinkItem
                  to={item.path}
                  key={item.path}
                  icon={item.icon}
                  label={item.label}
                  onClick={smDown ? toggleDashboardSideBarOpen : undefined}
                />
              ))}
            </List>
          </Box>

          <Box>
            <List component="nav">
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  <DarkMode></DarkMode>
                </ListItemIcon>
                <ListItemText primary="Alternar tema" />
              </ListItemButton>
              <ListItemButton onClick={logout}>
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box sx={{ height: '100%', ml: smDown ? 0 : isDashboardSideBarOpen ? 30 : 0 }}>
        {children}
      </Box>
    </>
  )
}
