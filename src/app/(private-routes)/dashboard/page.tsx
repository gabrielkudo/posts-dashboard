import { Typography } from '@mui/material'

import DashboardWrapper from '@/components/DashboardWrapper'

export default function Dashboard() {
  return (
    <DashboardWrapper>
      <Typography
        variant="h1"
        sx={{
          ml: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.2rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        DASHBOARD
      </Typography>
    </DashboardWrapper>
  )
}
