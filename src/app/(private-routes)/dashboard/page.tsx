import { Box, Card, CardContent, Grid, Typography } from '@mui/material'

import DashboardWrapper from '@/components/DashboardWrapper'

export default function Dashboard() {
  return (
    <DashboardWrapper>
      <Box sx={{ display: 'flex' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4} xl={3} margin={2}>
            <Card>
              <CardContent>
                <Typography variant="h5" align="center">
                  Posts
                </Typography>

                <Box padding={5} display="flex" justifyContent="center" alignItems="center">
                  <Typography variant="h1">100</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={4} xl={3} margin={2}>
            <Card>
              <CardContent>
                <Typography variant="h5" align="center">
                  Comments
                </Typography>

                <Box padding={5} display="flex" justifyContent="center" alignItems="center">
                  <Typography variant="h1">500</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </DashboardWrapper>
  )
}
