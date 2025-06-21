import React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      className={`border rounded px-2 py-1 ${className}`}
      {...props}
    />
  )
}

export default Input
