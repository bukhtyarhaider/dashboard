import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'

interface Props {
  children: JSX.Element
  role?: string
}

function RequireAuth({ children, role }: Props) {
  const token = useAppSelector(state => state.auth.token)
  const user = useAppSelector(state => state.auth.user)
  if (!token) return <Navigate to="/login" replace />
  if (role && user?.role !== role) return <Navigate to="/" replace />
  return children
}

export default RequireAuth
