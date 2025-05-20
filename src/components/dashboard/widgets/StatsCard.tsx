import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
interface StatsCardProps {
  title: string;
  value: string;
  change: number;
  changeLabel: string;
  icon: React.ReactNode;
}
export function StatsCard({
  title,
  value,
  change,
  changeLabel,
  icon
}: StatsCardProps) {
  const isPositive = change >= 0;
  return <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="p-2 bg-blue-50 rounded-lg">{icon}</div>
          <h3 className="ml-3 text-sm font-medium text-gray-900">{title}</h3>
        </div>
        <div className={`flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
          <span className="text-sm font-medium ml-1">{Math.abs(change)}%</span>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        <p className="mt-1 text-sm text-gray-500">{changeLabel}</p>
      </div>
    </div>;
}