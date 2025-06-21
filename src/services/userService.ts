import api from './api'
import type { User } from '../types/User'

export const userService = {
  getAll(): Promise<User[]> {
    return api.get<User[]>('/users').then(res => res.data)
  },
}
