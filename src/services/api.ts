import axios from 'axios'
import { store } from '../store/store'
import { showToast } from '../components/ToastProvider'

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
  async error => {
    const { config, response } = error as { config: any; response?: { status: number } }
    const shouldRetry = !config.__retry && (!response || response.status >= 500)
    if (shouldRetry) {
      config.__retry = true
      await new Promise(r => setTimeout(r, 500))
      return api(config)
    }
    showToast('Request failed', 'error')
    console.error('API Error', error)
    return Promise.reject(error)
  }
)

export default api
