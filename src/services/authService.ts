import api from './api'
import type { User } from '../types/User'

export interface LoginPayload {
  email: string
  password: string
}

export interface LoginResponse {
  user: User
  token: string
}

export const authService = {
  login(payload: LoginPayload): Promise<LoginResponse> {
    return api.post<LoginResponse>('/auth/login', payload).then(res => res.data)
  },
}
