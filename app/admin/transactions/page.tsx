'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const initialTransactions = [
  { id: 1, user: 'John Doe', amount: 100, type: 'Deposit', date: '2023-06-20' },
  {
    id: 2,
    user: 'Jane Smith',
    amount: 50,
    type: 'Withdrawal',
    date: '2023-06-19',
  },
  {
    id: 3,
    user: 'Bob Johnson',
    amount: 200,
    type: 'Deposit',
    date: '2023-06-18',
  },
  {
    id: 4,
    user: 'Alice Brown',
    amount: 75,
    type: 'Withdrawal',
    date: '2023-06-17',
  },
  {
    id: 5,
    user: 'Charlie Davis',
    amount: 150,
    type: 'Deposit',
    date: '2023-06-16',
  },
];

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');

  const filteredTransactions = transactions.filter(
    (transaction) =>
      (transaction.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.amount.toString().includes(searchTerm)) &&
      (typeFilter === 'All' || transaction.type === typeFilter),
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
        <Button>Export CSV</Button>
      </div>
      <div className="flex items-center space-x-2">
        <Input
          placeholder="Search transactions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Deposit">Deposit</SelectItem>
            <SelectItem value="Withdrawal">Withdrawal</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">User</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTransactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell className="font-medium">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage
                      src={`https://avatar.vercel.sh/${transaction.user}`}
                      alt={transaction.user}
                    />
                    <AvatarFallback>
                      {transaction.user
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <span>{transaction.user}</span>
                </div>
              </TableCell>
              <TableCell
                className={
                  transaction.type === 'Deposit'
                    ? 'text-green-600'
                    : 'text-red-600'
                }
              >
                {transaction.type === 'Deposit' ? '+' : '-'}$
                {transaction.amount.toFixed(2)}
              </TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell>{transaction.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
