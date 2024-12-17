'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Overview } from '@/components/dashboard/Overview';
import { RecentTransactions } from '@/components/dashboard/RecentTransactions';
import { AccountSummary } from '@/components/dashboard/AccountSummary';
import { BottomNavigation } from '@/components/dashboard/BottomNavigation';
import { Button } from '@/components/ui/button';
import { PlusCircle, ArrowUpRight, CreditCard, PiggyBank } from 'lucide-react';
import { useUserStore } from '@/store/store';
import Link from 'next/link';

const Dashboard = () => {
  const { name } = useUserStore();

  return (
    // <div>
    //   <h1>Welcome, {user.name}</h1>
    //   <p>Email: {user.email}</p>
    //   <p>Dashboard Content Goes Here</p>
    // </div>
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
            Welcome back, {name}
          </h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AccountSummary />
            <Card className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold">
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="secondary"
                    className="flex items-center justify-center"
                  >
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Money
                  </Button>
                  <Link href={'/dashboard/send-money'} className="w-full">
                    <Button
                      variant="secondary"
                      className="flex items-center justify-center w-full"
                    >
                      <ArrowUpRight className="mr-2 h-4 w-4" />
                      Send Money
                    </Button>
                  </Link>
                  <Button
                    variant="secondary"
                    className="flex items-center justify-center"
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Cards
                  </Button>
                  <Button
                    variant="secondary"
                    className="flex items-center justify-center"
                  >
                    <PiggyBank className="mr-2 h-4 w-4" />
                    Savings
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold">
                  Spending Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$54,249.27</div>
                <p className="text-xs text-muted-foreground">
                  Total spent this week
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center">
                    <div className="w-16 text-sm font-medium">Groceries</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: '45%' }}
                      ></div>
                    </div>
                    <div className="w-12 text-sm font-medium text-right">
                      45%
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 text-sm font-medium">Utilities</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className="bg-green-500 h-2.5 rounded-full"
                        style={{ width: '30%' }}
                      ></div>
                    </div>
                    <div className="w-12 text-sm font-medium text-right">
                      30%
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 text-sm font-medium">Others</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className="bg-yellow-400 h-2.5 rounded-full"
                        style={{ width: '25%' }}
                      ></div>
                    </div>
                    <div className="w-12 text-sm font-medium text-right">
                      25%
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Financial Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <Overview />
              </CardContent>
            </Card>
          </div>
          <div className="mt-6">
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Recent Transactions</CardTitle>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </CardHeader>
              <CardContent>
                <RecentTransactions />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
