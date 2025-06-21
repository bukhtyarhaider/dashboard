import { configureStore } from '@reduxjs/toolkit'
import type { Middleware } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import authReducer from './authSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware => {
    const logger: Middleware = () => next => action => {
      if (import.meta.env.DEV) {
        console.log('dispatch', action)
      }
      return next(action)
    }
    return getDefaultMiddleware().concat(logger)
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
