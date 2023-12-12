import { useState, ChangeEvent } from 'react'
import { TextField, Button, InputAdornment, IconButton } from "@mui/material"
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { userService } from '../services'

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '' 
  })
  const [isShowPassword, setIsShowPassword] = useState(false)
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value
    setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }))
  }

  const login = async () => {
    await userService.login(user)
  }

  return <div className="flex justify-center h-screen w-screen">
    <div
        className="flex flex-col items-center bg-sky-300 p-14 m-auto rounded-2xl gap-6"
    >
      <TextField
        label="Email"
        name="email"
        variant="standard"
        className="w-full"
        onChange={onChange}
      />
      <TextField
        className="w-full"
        name="password"
        label="Password"
        variant="standard"
        type={isShowPassword ? 'text' : 'password'}
        onChange={onChange}
        InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setIsShowPassword(!isShowPassword)}>
                  {isShowPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
      />
      <Button
        variant="contained"
        disabled={!user?.email || !user?.password}
        onClick={login}
      >
        SIGN IN
      </Button>
    </div>
  </div>
}
