import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, Truck, DollarSign, Bell, Settings, LogOut, Menu, X } from 'lucide-react';
interface DashboardLayoutProps {
  children: React.ReactNode;
  userType: 'business' | 'logistics';
}
export function DashboardLayout({
  children,
  userType
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const businessNavItems = [{
    name: 'Dashboard',
    href: '/business',
    icon: LayoutDashboard
  }, {
    name: 'Orders',
    href: '/business/orders',
    icon: Package
  }, {
    name: 'Providers',
    href: '/business/providers',
    icon: Truck
  }, {
    name: 'Payments',
    href: '/business/payments',
    icon: DollarSign
  }, {
    name: 'Settings',
    href: '/business/settings',
    icon: Settings
  }];
  const logisticsNavItems = [{
    name: 'Dashboard',
    href: '/logistics',
    icon: LayoutDashboard
  }, {
    name: 'Deliveries',
    href: '/logistics/deliveries',
    icon: Truck
  }, {
    name: 'Earnings',
    href: '/logistics/earnings',
    icon: DollarSign
  }, {
    name: 'Settings',
    href: '/logistics/settings',
    icon: Settings
  }];
  const navItems = userType === 'business' ? businessNavItems : logisticsNavItems;
  return <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0 transition-transform duration-300 ease-in-out`}>
        <div className="h-full flex flex-col">
          {/* Sidebar header */}
          <div className="h-16 flex items-center justify-between px-4 border-b">
            <Link to="/" className="text-xl font-bold text-blue-600">
              LogiConnect
            </Link>
            <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          {/* Navigation */}
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navItems.map(item => {
            const Icon = item.icon;
            return <Link key={item.name} to={item.href} className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${location.pathname === item.href ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}>
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>;
          })}
          </nav>
          {/* User menu */}
          <div className="border-t p-4">
            <button className="flex items-center w-full text-sm font-medium text-gray-600 hover:text-gray-900">
              <LogOut className="mr-3 h-5 w-5" />
              Sign out
            </button>
          </div>
        </div>
      </div>
      {/* Main content */}
      <div className="lg:pl-64 flex flex-col min-h-screen">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-4 lg:px-8 bg-white border-b">
          <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex items-center space-x-4">
            <button className="p-1 text-gray-400 hover:text-gray-500">
              <Bell className="h-6 w-6" />
            </button>
            <div className="h-8 w-8 rounded-full bg-gray-200" />
          </div>
        </header>
        {/* Page content */}
        <main className="flex-1 p-4 lg:p-8">{children}</main>
      </div>
    </div>;
}