import React from 'react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { StatsCard } from '../../components/dashboard/widgets/StatsCard';
import { Chart } from '../../components/dashboard/widgets/Chart';
import { DataTable } from '../../components/dashboard/DataTable';
import { Package, TrendingUp, DollarSign, Users } from 'lucide-react';
const mockChartData = [{
  name: 'Jan',
  value: 400
}, {
  name: 'Feb',
  value: 300
}, {
  name: 'Mar',
  value: 600
}, {
  name: 'Apr',
  value: 800
}, {
  name: 'May',
  value: 500
}, {
  name: 'Jun',
  value: 900
}];
const mockOrdersData = [{
  id: 'ORD001',
  date: '2023-11-01',
  provider: 'FastTrack Logistics',
  status: 'In Transit',
  amount: '$250.00'
}, {
  id: 'ORD002',
  date: '2023-11-02',
  provider: 'SpeedyShip',
  status: 'Delivered',
  amount: '$180.00'
}, {
  id: 'ORD003',
  date: '2023-11-03',
  provider: 'SecureFreight',
  status: 'Pending',
  amount: '$320.00'
}];
export function BusinessDashboard() {
  const orderColumns = [{
    header: 'Order ID',
    accessor: 'id'
  }, {
    header: 'Date',
    accessor: 'date'
  }, {
    header: 'Provider',
    accessor: 'provider'
  }, {
    header: 'Status',
    accessor: 'status',
    cell: (value: string) => <span className={`px-2 py-1 text-xs font-medium rounded-full ${value === 'Delivered' ? 'bg-green-100 text-green-800' : value === 'In Transit' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
          {value}
        </span>
  }, {
    header: 'Amount',
    accessor: 'amount'
  }];
  return <DashboardLayout userType="business">
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard title="Total Orders" value="156" change={12} changeLabel="vs. last month" icon={<Package className="h-5 w-5 text-blue-600" />} />
          <StatsCard title="Success Rate" value="94.2%" change={2.1} changeLabel="vs. last month" icon={<TrendingUp className="h-5 w-5 text-blue-600" />} />
          <StatsCard title="Total Spent" value="$12,426" change={-8.1} changeLabel="vs. last month" icon={<DollarSign className="h-5 w-5 text-blue-600" />} />
          <StatsCard title="Active Providers" value="8" change={1} changeLabel="new this month" icon={<Users className="h-5 w-5 text-blue-600" />} />
        </div>
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Chart data={mockChartData} title="Delivery Volume" description="Number of deliveries over time" />
          <Chart data={mockChartData} title="Spending Overview" description="Total spending on deliveries" />
        </div>
        {/* Recent Orders */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Recent Orders</h3>
          <DataTable columns={orderColumns} data={mockOrdersData} />
        </div>
      </div>
    </DashboardLayout>;
}