import React from 'react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { StatsCard } from '../../components/dashboard/widgets/StatsCard';
import { Chart } from '../../components/dashboard/widgets/Chart';
import { DataTable } from '../../components/dashboard/DataTable';
import { Truck, TrendingUp, DollarSign, Star } from 'lucide-react';
const mockChartData = [{
  name: 'Jan',
  value: 300
}, {
  name: 'Feb',
  value: 400
}, {
  name: 'Mar',
  value: 500
}, {
  name: 'Apr',
  value: 700
}, {
  name: 'May',
  value: 600
}, {
  name: 'Jun',
  value: 800
}];
const mockDeliveriesData = [{
  id: 'DEL001',
  customer: 'TechCorp Inc.',
  pickup: 'San Francisco, CA',
  delivery: 'Los Angeles, CA',
  status: 'In Progress',
  value: '$280.00'
}, {
  id: 'DEL002',
  customer: 'Global Foods',
  pickup: 'Seattle, WA',
  delivery: 'Portland, OR',
  status: 'Pending',
  value: '$175.00'
}, {
  id: 'DEL003',
  customer: 'MegaStore',
  pickup: 'Las Vegas, NV',
  delivery: 'Phoenix, AZ',
  status: 'Completed',
  value: '$340.00'
}];
export function LogisticsDashboard() {
  const deliveryColumns = [{
    header: 'Delivery ID',
    accessor: 'id'
  }, {
    header: 'Customer',
    accessor: 'customer'
  }, {
    header: 'Pickup',
    accessor: 'pickup'
  }, {
    header: 'Delivery',
    accessor: 'delivery'
  }, {
    header: 'Status',
    accessor: 'status',
    cell: (value: string) => <span className={`px-2 py-1 text-xs font-medium rounded-full ${value === 'Completed' ? 'bg-green-100 text-green-800' : value === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
          {value}
        </span>
  }, {
    header: 'Value',
    accessor: 'value'
  }];
  return <DashboardLayout userType="logistics">
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard title="Active Deliveries" value="24" change={8} changeLabel="vs. last week" icon={<Truck className="h-5 w-5 text-blue-600" />} />
          <StatsCard title="Success Rate" value="96.8%" change={1.2} changeLabel="vs. last month" icon={<TrendingUp className="h-5 w-5 text-blue-600" />} />
          <StatsCard title="Total Earnings" value="$8,892" change={15.3} changeLabel="vs. last month" icon={<DollarSign className="h-5 w-5 text-blue-600" />} />
          <StatsCard title="Rating" value="4.8" change={0.2} changeLabel="vs. last month" icon={<Star className="h-5 w-5 text-blue-600" />} />
        </div>
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Chart data={mockChartData} title="Delivery Performance" description="Number of successful deliveries" />
          <Chart data={mockChartData} title="Revenue Overview" description="Monthly earnings from deliveries" />
        </div>
        {/* Active Deliveries */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">
            Active Deliveries
          </h3>
          <DataTable columns={deliveryColumns} data={mockDeliveriesData} />
        </div>
      </div>
    </DashboardLayout>;
}