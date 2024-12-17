'use client';

import { useState } from 'react';
import {
  Bar,
  Line,
  ComposedChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';
import { Button } from '@/components/ui/button';

const data = [
  { name: 'Jan', income: 4000, expenses: 2400, savings: 1600 },
  { name: 'Feb', income: 3000, expenses: 1398, savings: 1602 },
  { name: 'Mar', income: 2000, expenses: 9800, savings: -7800 },
  { name: 'Apr', income: 2780, expenses: 3908, savings: -1128 },
  { name: 'May', income: 1890, expenses: 4800, savings: -2910 },
  { name: 'Jun', income: 2390, expenses: 3800, savings: -1410 },
];

export function Overview() {
  const [activeData, setActiveData] = useState('all');

  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <Button
          variant={activeData === 'all' ? 'default' : 'outline'}
          onClick={() => setActiveData('all')}
        >
          All
        </Button>
        <Button
          variant={activeData === 'income' ? 'default' : 'outline'}
          onClick={() => setActiveData('income')}
        >
          Income
        </Button>
        <Button
          variant={activeData === 'expenses' ? 'default' : 'outline'}
          onClick={() => setActiveData('expenses')}
        >
          Expenses
        </Button>
        <Button
          variant={activeData === 'savings' ? 'default' : 'outline'}
          onClick={() => setActiveData('savings')}
        >
          Savings
        </Button>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <ComposedChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip
            contentStyle={{
              background: '#333',
              border: 'none',
              borderRadius: '4px',
            }}
            labelStyle={{ color: '#fff' }}
          />
          <Legend />
          {(activeData === 'all' || activeData === 'income') && (
            <Bar dataKey="income" fill="#4ade80" radius={[4, 4, 0, 0]} />
          )}
          {(activeData === 'all' || activeData === 'expenses') && (
            <Bar dataKey="expenses" fill="#f43f5e" radius={[4, 4, 0, 0]} />
          )}
          {(activeData === 'all' || activeData === 'savings') && (
            <Line
              type="monotone"
              dataKey="savings"
              stroke="#60a5fa"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
