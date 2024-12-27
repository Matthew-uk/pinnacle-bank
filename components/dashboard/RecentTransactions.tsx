import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const recentTransactions = [
  {
    id: '1',
    amount: '-$2,500.00',
    name: 'Grocery Store',
    date: '2024-12-20',
    category: 'Shopping',
    status: 'Completed',
  },
  {
    id: '2',
    amount: '+$1,000,000.00',
    name: 'Salary Deposit',
    date: '2024-12-19',
    category: 'Income',
    status: 'Completed',
  },
  {
    id: '3',
    amount: '-$52,197.00',
    name: 'Restaurant Bill',
    date: '2024-12-18',
    category: 'Dining',
    status: 'Pending',
  },
  {
    id: '4',
    amount: '-$12,000.00',
    name: 'Online Shopping',
    date: '2024-12-17',
    category: 'Shopping',
    status: 'Completed',
  },
  {
    id: '5',
    amount: '-$350.00',
    name: 'Gas Station',
    date: '2024-12-16',
    category: 'Transportation',
    status: 'Completed',
  },
];

export function RecentTransactions() {
  return (
    <div className="space-y-8">
      {recentTransactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage
              src={`https://avatar.vercel.sh/${transaction.name}`}
              alt={transaction.name}
            />
            <AvatarFallback>{transaction.name[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {transaction.name}
            </p>
            <p className="text-sm text-muted-foreground">{transaction.date}</p>
          </div>
          <div className="ml-auto font-medium">
            <span
              className={
                transaction.amount.startsWith('+')
                  ? 'text-green-500'
                  : 'text-red-500'
              }
            >
              {transaction.amount}
            </span>
          </div>
          <Badge variant="outline" className="ml-2">
            {transaction.category}
          </Badge>
          <Badge
            variant={
              transaction.status === 'Completed' ? 'secondary' : 'outline'
            }
            className="ml-2"
          >
            {transaction.status}
          </Badge>
        </div>
      ))}
    </div>
  );
}
