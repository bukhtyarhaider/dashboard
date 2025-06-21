import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../store/hooks'
import { login } from '../store/authSlice'
import { authService } from '../services/authService'

function Login() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const data = await authService.login({ email, password })
      dispatch(login(data))
      navigate('/')
    } catch (err) {
      setError('Login failed')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto space-y-4">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <label className="block mb-1">Email</label>
        <input
          type="email"
          className="w-full border px-2 py-1"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-1">Password</label>
        <input
          type="password"
          className="w-full border px-2 py-1"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button className="w-full bg-blue-500 text-white py-2 rounded">Log In</button>
    </form>
  )
}

export default Login
