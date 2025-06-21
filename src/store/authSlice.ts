import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { User } from '../types/User'

interface AuthState {
  user: User | null
  token: string | null
}

function loadAuth(): AuthState {
  try {
    const stored = localStorage.getItem('auth')
    if (stored) {
      return JSON.parse(stored) as AuthState
    }
  } catch {}
  return { user: null, token: null }
}

const initialState: AuthState = loadAuth()

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ user: User; token: string }>) {
      state.user = action.payload.user
      state.token = action.payload.token
      localStorage.setItem('auth', JSON.stringify(state))
    },
    logout(state) {
      state.user = null
      state.token = null
      localStorage.removeItem('auth')
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
