import { NavLink } from 'react-router-dom'

function Navbar() {
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
      </ul>
    </nav>
  )
}

export default Navbar
