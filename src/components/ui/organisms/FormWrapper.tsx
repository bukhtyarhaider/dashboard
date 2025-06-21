import React from 'react'

export interface FormWrapperProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>
  children: React.ReactNode
}

function FormWrapper({ onSubmit, children }: FormWrapperProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {children}
    </form>
  )
}

export default FormWrapper
