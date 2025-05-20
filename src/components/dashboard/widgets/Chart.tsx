import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
interface ChartProps {
  data: any[];
  title: string;
  description?: string;
}
export function Chart({
  data,
  title,
  description
}: ChartProps) {
  return <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{
            fontSize: 12
          }} />
            <YAxis tickLine={false} axisLine={false} tick={{
            fontSize: 12
          }} />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#3B82F6" fill="#93C5FD" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>;
}