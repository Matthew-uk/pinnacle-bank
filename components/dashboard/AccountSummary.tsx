import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { useUserStore } from '@/store/store';

export function AccountSummary() {
  const { balance } = useUserStore();
  return (
    <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] -z-10" />
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">Main Account</CardTitle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-4 w-4 text-white"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">${balance.toLocaleString()}</div>
        <p className="text-sm opacity-85">Available Balance</p>
        <div className="mt-4 flex justify-between items-center text-sm">
          <div>
            <p className="font-medium">Income</p>
            <p className="text-green-300 flex items-center">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              +$2,500.00
            </p>
          </div>
          <div>
            <p className="font-medium">Expenses</p>
            <p className="text-red-300 flex items-center">
              <ArrowDownRight className="mr-1 h-4 w-4" />
              -$1,234.56
            </p>
          </div>
        </div>
        <div className="mt-4">
          <Button variant="secondary" className="w-full">
            View Transactions
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
