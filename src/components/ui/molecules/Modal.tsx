import React from 'react'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded shadow p-4">
        {children}
        <div className="text-right mt-2">
          <button className="px-3 py-1 bg-blue-500 text-white rounded" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
