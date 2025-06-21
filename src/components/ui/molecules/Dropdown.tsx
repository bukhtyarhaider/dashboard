import React, { useState } from 'react'

export interface DropdownProps {
  label: string
  children: React.ReactNode
}

function Dropdown({ label, children }: DropdownProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative inline-block">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setOpen(o => !o)}
      >
        {label}
      </button>
      {open && (
        <div className="absolute mt-2 w-48 bg-white border rounded shadow">
          {children}
        </div>
      )}
    </div>
  )
}

export default Dropdown
