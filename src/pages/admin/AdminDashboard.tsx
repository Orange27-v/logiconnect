import React from 'react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { StatsCard } from '../../components/dashboard/widgets/StatsCard';
import { Chart } from '../../components/dashboard/widgets/Chart';
import { AdminDataTable } from '../../components/admin/AdminDataTable';
import { Users, TruckIcon, DollarSign, AlertTriangle, Building2, ShieldCheck } from 'lucide-react';
const mockChartData = [{
  name: 'Jan',
  value: 2400
}, {
  name: 'Feb',
  value: 1800
}, {
  name: 'Mar',
  value: 3200
}, {
  name: 'Apr',
  value: 4500
}, {
  name: 'May',
  value: 3800
}, {
  name: 'Jun',
  value: 5200
}];
export function AdminDashboard() {
  return <DashboardLayout userType="admin">
      <div className="space-y-6">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatsCard title="Total Users" value="2,846" change={15.4} changeLabel="this month" icon={<Users className="h-5 w-5 text-blue-600" />} />
          <StatsCard title="Business Accounts" value="1,458" change={12.3} changeLabel="this month" icon={<Building2 className="h-5 w-5 text-blue-600" />} />
          <StatsCard title="Logistics Companies" value="387" change={8.1} changeLabel="this month" icon={<TruckIcon className="h-5 w-5 text-blue-600" />} />
          <StatsCard title="Pending KYC" value="24" change={-12} changeLabel="vs last week" icon={<ShieldCheck className="h-5 w-5 text-blue-600" />} />
          <StatsCard title="Active Disputes" value="18" change={5} changeLabel="this week" icon={<AlertTriangle className="h-5 w-5 text-blue-600" />} />
          <StatsCard title="Escrow Balance" value="$524,389" change={22.4} changeLabel="this month" icon={<DollarSign className="h-5 w-5 text-blue-600" />} />
        </div>
        {/* Analytics Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Chart data={mockChartData} title="Platform Growth" description="New users over time" />
          <Chart data={mockChartData} title="Transaction Volume" description="Total delivery value processed" />
        </div>
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[{
          title: 'Pending KYC Verifications',
          count: 24,
          type: 'warning'
        }, {
          title: 'Active Disputes',
          count: 18,
          type: 'danger'
        }, {
          title: 'Withdrawal Requests',
          count: 12,
          type: 'info'
        }].map(action => <div key={action.title} className={`p-4 rounded-lg border ${action.type === 'warning' ? 'bg-yellow-50 border-yellow-200' : action.type === 'danger' ? 'bg-red-50 border-red-200' : 'bg-blue-50 border-blue-200'}`}>
              <h3 className="font-medium text-gray-900">{action.title}</h3>
              <p className={`text-2xl font-semibold mt-2 ${action.type === 'warning' ? 'text-yellow-700' : action.type === 'danger' ? 'text-red-700' : 'text-blue-700'}`}>
                {action.count}
              </p>
              <button className={`mt-3 text-sm font-medium ${action.type === 'warning' ? 'text-yellow-700' : action.type === 'danger' ? 'text-red-700' : 'text-blue-700'}`}>
                View all →
              </button>
            </div>)}
        </div>
        {/* Recent Activity */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900">
              Recent Activity
            </h3>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
              View all
            </button>
          </div>
          <AdminDataTable />
        </div>
      </div>
    </DashboardLayout>;
}