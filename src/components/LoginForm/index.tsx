'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from '@mui/material'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { useSnackbarMessageContext } from '@/contexts/SnackbarMessageContext'
import { LoginInputData, LoginInputDataValidationSchema } from '@/domain/dto/LoginData'
import { PasswordCredentialProvider } from '@/lib/auth'
import { AppRoutePaths } from '@/utils/routes/paths'

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputData>({
    resolver: yupResolver(LoginInputDataValidationSchema),
  })
  const router = useRouter()

  const [showPassword, setShowPassword] = useState(false)
  const { setErrorSnack } = useSnackbarMessageContext()

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  async function handleSignIn({ email, password }: any): Promise<void> {
    const result = await signIn(PasswordCredentialProvider, {
      redirect: false,
      email,
      password,
    })

    if (!result || result?.error) {
      let message = 'Unexpected error'
      if (result?.error === 'CredentialsSignin') {
        message = 'Invalid email or password'
      }
      setErrorSnack({
        message,
        open: true,
      })
      return
    }

    router.replace(AppRoutePaths.Dashboard)
  }

  return (
    <Box
      sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Box
        sx={{
          maxWidth: 'sm',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          m: 2,
          py: { xs: 6, sm: 10, md: 12 },
          px: { xs: 6, sm: 8, md: 12 },
          gap: 1.5,
          bgcolor: 'background.paper',
        }}
      >
        <Box
          component="img"
          src="/logo.png"
          alt="Posts Studio"
          sx={{
            width: 120,
            height: 120,
            maxWidth: { xs: 80, sm: 100, md: 120 },
            maxHeight: { xs: 80, sm: 100, md: 120 },
          }}
        ></Box>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 800 }}>
          Sign in to your account
        </Typography>
        <form style={{ width: '100%' }} onSubmit={handleSubmit(handleSignIn)}>
          <Box sx={{ m: 1 }}>
            <TextField
              fullWidth
              label="Email"
              type="text"
              variant="outlined"
              size="small"
              error={!!errors?.email}
              helperText={errors?.email?.message || ''}
              {...register('email')}
            />
          </Box>
          <Box sx={{ m: 1 }}>
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              size="small"
              error={!!errors?.password}
              helperText={errors?.password?.message || ''}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...register('password')}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'flex-start', md: 'space-between' },
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              m: 1,
              px: 1,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label={<Typography variant="body2">Remember me</Typography>}
              />
            </Box>
            <Box>
              <Link href="#" variant="body2">
                Forgot your password?
              </Link>
            </Box>
          </Box>
          <Box sx={{ m: 1, mt: 3 }}>
            <Button type="submit" fullWidth variant="contained" sx={{ color: 'primary' }}>
              Sign in
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}
