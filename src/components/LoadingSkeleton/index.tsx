import { Typography } from '@mui/material'

export default function LoadingSkeleton() {
  return (
    <Typography
      sx={{
        typography: { xs: 'h5', sm: 'h4', md: 'h3' },
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
