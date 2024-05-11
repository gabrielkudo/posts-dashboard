import { Typography } from '@mui/material'

import DashboardWrapper from '@/components/DashboardWrapper'

export default function Dashboard() {
  return (
    <DashboardWrapper>
      <Typography
        sx={{
          typography: { xs: 'h3', sm: 'h2', md: 'h1' },
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
