import React from 'react'

export interface ChartContainerProps {
  title?: string
  children: React.ReactNode
}

function ChartContainer({ title, children }: ChartContainerProps) {
  return (
    <div className="bg-white shadow rounded p-4">
      {title && <h3 className="font-bold mb-2">{title}</h3>}
      <div className="h-64">{children}</div>
    </div>
  )
}

export default ChartContainer
