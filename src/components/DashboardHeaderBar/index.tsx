'use client'

import { AccountCircle } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { MouseEvent, ReactNode, useState } from 'react'

import { useDashboardLayoutContext } from '@/contexts/DashboardLayoutContext'
import { AppRoutePaths } from '@/utils/routes/paths'

interface DashboardHeaderBarProps {
  children: ReactNode
}

export default function DashboardHeaderBar({ children }: DashboardHeaderBarProps) {
  const { title, isDashboardSideBarOpen, toggleDashboardSideBarOpen } = useDashboardLayoutContext()
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const router = useRouter()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  async function logout() {
    await signOut({
      redirect: false,
    })

    router.replace(AppRoutePaths.Login)
  }

  return (
    <Box sx={{ h: '100%', display: 'flex', flexDirection: 'column', gap: 1 }}>
      <AppBar position="absolute" sx={{ minHeight: 8 }}>
        <Toolbar sx={{ pr: 4 }}>
          {!isDashboardSideBarOpen && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDashboardSideBarOpen}
              sx={{ mr: 4 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            noWrap
            sx={{
              flexGrow: 1,
              ml: !isDashboardSideBarOpen ? 0 : !smDown ? 30 : 0,
            }}
          >
            {title}
          </Typography>
          <Box>
            <IconButton
              size="large"
              aria-label="account"
              aria-controls="menu-appbar"
              aria-haspopup={true}
              onClick={handleMenu}
              color="inherit"
              sx={{}}
            >
              <AccountCircle fontSize="large" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ flex: 1, overflow: 'auto', mt: 8 }}>{children}</Box>
    </Box>
  )
}
