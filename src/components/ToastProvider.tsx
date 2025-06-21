import React, { createContext, useContext, useEffect, useState } from 'react'

export type ToastType = 'info' | 'error'

interface Toast {
  id: number
  message: string
  type: ToastType
}

const ToastContext = createContext<(msg: string, type?: ToastType) => void>(() => {})

let externalShowToast: (msg: string, type?: ToastType) => void = () => {}

export function showToast(message: string, type: ToastType = 'info') {
  externalShowToast(message, type)
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (message: string, type: ToastType = 'info') => {
    const id = Date.now()
    setToasts(t => [...t, { id, message, type }])
    setTimeout(() => {
      setToasts(t => t.filter(toast => toast.id !== id))
    }, 3000)
  }

  useEffect(() => {
    externalShowToast = addToast
  }, [])

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <div className="fixed bottom-4 right-4 space-y-2 z-50">
        {toasts.map(t => (
          <div
            key={t.id}
            className={`px-4 py-2 text-white rounded ${t.type === 'error' ? 'bg-red-500' : 'bg-blue-500'}`}
          >
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => useContext(ToastContext)
