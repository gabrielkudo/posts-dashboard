import { Typography } from '@mui/material'

export default function LoadingSkeleton() {
  return (
    <Typography
      sx={{
        typography: { xs: 'h4', sm: 'h3', md: 'h2' },
        ml: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.2rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      Loading...
    </Typography>
  )
}
