import React, { useMemo, useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
const mockData = [{
  id: 'ACT001',
  type: 'KYC Verification',
  user: 'FastTrack Logistics',
  status: 'Pending',
  date: '2023-11-15',
  action: 'Review'
}, {
  id: 'ACT002',
  type: 'Dispute',
  user: 'TechCorp Inc.',
  status: 'Open',
  date: '2023-11-15',
  action: 'Resolve'
}, {
  id: 'ACT003',
  type: 'Withdrawal',
  user: 'SpeedyShip Co.',
  status: 'Pending',
  date: '2023-11-14',
  action: 'Approve'
}, {
  id: 'ACT004',
  type: 'User Report',
  user: 'Global Foods',
  status: 'New',
  date: '2023-11-14',
  action: 'Review'
}];
interface Column {
  header: string;
  accessor: string;
  sortable?: boolean;
  cell?: (value: any) => React.ReactNode;
}
const columns: Column[] = [{
  header: 'ID',
  accessor: 'id',
  sortable: true
}, {
  header: 'Type',
  accessor: 'type',
  sortable: true
}, {
  header: 'User',
  accessor: 'user',
  sortable: true
}, {
  header: 'Status',
  accessor: 'status',
  cell: (value: string) => <span className={`px-2 py-1 text-xs font-medium rounded-full ${value === 'Pending' ? 'bg-yellow-100 text-yellow-800' : value === 'Open' ? 'bg-red-100 text-red-800' : value === 'New' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
        {value}
      </span>
}, {
  header: 'Date',
  accessor: 'date',
  sortable: true
}, {
  header: 'Action',
  accessor: 'action',
  cell: (value: string) => <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
        {value}
      </button>
}];
export function AdminDataTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: 'asc' | 'desc';
  } | null>(null);
  const handleSort = (key: string) => {
    setSortConfig(current => ({
      key,
      direction: current?.key === key && current.direction === 'asc' ? 'desc' : 'asc'
    }));
  };
  const sortedData = useMemo(() => {
    if (!sortConfig) return mockData;
    return [...mockData].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [sortConfig]);
  const filteredData = sortedData.filter(item => Object.values(item).some(value => value.toString().toLowerCase().includes(searchTerm.toLowerCase())));
  return <div className="bg-white shadow-sm rounded-lg">
      <div className="p-4 border-b">
        <div className="relative">
          <input type="text" placeholder="Search..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map(column => <th key={column.accessor} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {column.sortable ? <button className="flex items-center space-x-1" onClick={() => handleSort(column.accessor)}>
                      <span>{column.header}</span>
                      <span className="flex flex-col">
                        <ChevronUp className={`h-3 w-3 ${sortConfig?.key === column.accessor && sortConfig.direction === 'asc' ? 'text-blue-600' : 'text-gray-400'}`} />
                        <ChevronDown className={`h-3 w-3 -mt-1 ${sortConfig?.key === column.accessor && sortConfig.direction === 'desc' ? 'text-blue-600' : 'text-gray-400'}`} />
                      </span>
                    </button> : column.header}
                </th>)}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((row, rowIndex) => <tr key={rowIndex}>
                {columns.map((column, colIndex) => <td key={colIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {column.cell ? column.cell(row[column.accessor]) : row[column.accessor]}
                  </td>)}
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>;
}