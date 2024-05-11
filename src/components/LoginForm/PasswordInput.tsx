import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { useState } from 'react'

interface PasswordInputProps {
  password: string
  handlePassword: () => void
}

export default function PasswordInput({ password, handlePassword }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <TextField
      size="small"
      type={showPassword ? 'text' : 'password'}
      label="Password"
      value={password}
      onChange={handlePassword}
      required={true}
      fullWidth
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
    />
  )
}
