import React from 'react'

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function Checkbox({ className = '', ...props }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      className={`form-checkbox ${className}`}
      {...props}
    />
  )
}

export default Checkbox
