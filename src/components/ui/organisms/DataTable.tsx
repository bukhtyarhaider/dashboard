import React from 'react'
import Table from '../molecules/Table'

export interface Column<T> {
  key: keyof T
  header: string
}

export interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
}

function DataTable<T extends Record<string, any>>({ data, columns }: DataTableProps<T>) {
  return (
    <Table>
      <thead>
        <tr>
          {columns.map(col => (
            <th key={String(col.key)} className="px-4 py-2 text-left">
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="odd:bg-gray-50">
            {columns.map(col => (
              <td key={String(col.key)} className="px-4 py-2 border-t">
                {String(row[col.key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default DataTable
