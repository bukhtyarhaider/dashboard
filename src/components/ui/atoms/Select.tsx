import React from 'react'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

function Select({ className = '', ...props }: SelectProps) {
  return (
    <select
      className={`border rounded px-2 py-1 ${className}`}
      {...props}
    />
  )
}

export default Select
