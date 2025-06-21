import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'

function Navbar() {
  const user = useAppSelector(state => state.auth.user)
  return (
    <nav className="bg-white shadow mb-6">
      <ul className="flex gap-4 p-4">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'font-bold' : undefined}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'font-bold' : undefined}>
            About
          </NavLink>
        </li>
        {user?.role === 'admin' && (
          <li>
            <NavLink to="/admin" className={({ isActive }) => isActive ? 'font-bold' : undefined}>
              Admin
            </NavLink>
          </li>
        )}
        {!user && (
          <li>
            <NavLink to="/login" className={({ isActive }) => isActive ? 'font-bold' : undefined}>
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
