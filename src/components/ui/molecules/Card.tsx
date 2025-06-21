import React from 'react'

export interface CardProps {
  title?: string
  children: React.ReactNode
}

function Card({ title, children }: CardProps) {
  return (
    <div className="bg-white shadow rounded p-4">
      {title && <h3 className="font-bold mb-2">{title}</h3>}
      {children}
    </div>
  )
}

export default Card
