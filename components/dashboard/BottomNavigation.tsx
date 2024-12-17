'use client';

import { logout } from '@/lib/actions/user.actions';
import { useUserStore } from '@/store/store';
import {
  Home,
  CreditCard,
  PlusCircle,
  Settings,
  BarChart2,
  LogOut,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const navItems = [
  { icon: Home, label: 'Home', href: '/dashboard' },
  { icon: BarChart2, label: 'Analytics', href: '/dashboard/analytics' },
  { icon: CreditCard, label: 'Cards', href: '/dashboard/cards' },
  //   { icon: PlusCircle, label: 'Actions', href: '/dashboard/actions' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

export function BottomNavigation() {
  const pathname = usePathname();
  const router = useRouter();
  const { resetUser } = useUserStore();
  const logoutUser = async () => {
    await logout();
    resetUser();
    router.push('/login');
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg">
      <ul className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`flex flex-col items-center p-2 ${
                pathname === item.href
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs mt-1 font-medium">{item.label}</span>
            </Link>
          </li>
        ))}
        <li
          className="text-xs mt-1 text-red-500 hover:cursor-pointer"
          onClick={() => logoutUser()}
        >
          <LogOut />
          <span className="text-xs mt-1 font-medium">Logout</span>
        </li>
      </ul>
    </nav>
  );
}
