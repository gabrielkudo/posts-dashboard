'use client'

import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import { usePathname, useRouter } from 'next/navigation'
import { ReactNode } from 'react'

export interface BreadCrumbItem {
  path: string
  name: string
}

export interface DashboardWrapperProps {
  children: ReactNode
}

export default function DashboardWrapper({ children }: DashboardWrapperProps) {
  const router = useRouter()
  const currPath = usePathname()
  const pathNames = currPath.split('/').filter((path) => path)
  const breadCrumbsList: BreadCrumbItem[] = []
  pathNames.forEach((path, index) => {
    let href = `/${pathNames.slice(0, index + 1).join('/')}`
    let name = path[0].toUpperCase() + path.slice(1, path.length)
    breadCrumbsList.push({
      name,
      path: href,
    })
  })

  function handleOnClick(to: string) {
    router.push(to)
  }

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {breadCrumbsList.length > 1 && (
        <Box sx={{ m: { xs: 1, sm: 2 }, pl: 2 }}>
          <Breadcrumbs aria-label="breadcrumb">
            {breadCrumbsList.map(({ path, name }) => {
              return currPath !== path ? (
                <Link
                  key={path}
                  underline="hover"
                  color="inherit"
                  component="button"
                  onClick={() => handleOnClick(path)}
                >
                  {name}
                </Link>
              ) : (
                <Typography key={path} color="text.primary">
                  {name}
                </Typography>
              )
            })}
          </Breadcrumbs>
        </Box>
      )}
      <Box
        sx={{
          m: { xs: 2, sm: 4 },
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
