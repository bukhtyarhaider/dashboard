import { increment } from '../store/counterSlice'
import { logout } from '../store/authSlice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { Link } from 'react-router-dom'

function Home() {
  const count = useAppSelector(state => state.counter.value)
  const user = useAppSelector(state => state.auth.user)
  const dispatch = useAppDispatch()

  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold">Admin Dashboard Starter</h1>
      <p className="mt-4">Count: {count}</p>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      {user ? (
        <div className="mt-4">
          <p>Logged in as {user.name} ({user.role})</p>
          <button
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => dispatch(logout())}
          >
            Logout
          </button>
        </div>
      ) : (
        <p className="mt-4">
          <Link className="text-blue-600 underline" to="/login">Login to get started</Link>
        </p>
      )}
    </div>
  )
}

export default Home
