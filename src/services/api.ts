import axios from 'axios'
import { store } from '../store/store'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  timeout: 10000,
})

api.interceptors.request.use(config => {
  const token = store.getState().auth.token
  if (token) {
    config.headers = config.headers ?? {}
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error', error)
    return Promise.reject(error)
  }
)

export default api
