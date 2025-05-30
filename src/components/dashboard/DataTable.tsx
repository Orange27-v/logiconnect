import React from 'react';
interface Column {
  header: string;
  accessor: string;
  cell?: (value: any) => React.ReactNode;
}
interface DataTableProps {
  columns: Column[];
  data: any[];
}
export function DataTable({
  columns,
  data
}: DataTableProps) {
  return <div className="bg-white shadow-sm rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column, index) => <th key={index} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {column.header}
                </th>)}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, rowIndex) => <tr key={rowIndex}>
                {columns.map((column, colIndex) => <td key={colIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {column.cell ? column.cell(row[column.accessor]) : row[column.accessor]}
                  </td>)}
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>;
}