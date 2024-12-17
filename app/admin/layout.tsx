'use client';

import { Sidebar } from '@/components/admin/Sidebar';
import { Header } from '@/components/admin/Header';
import { useAdminStore, useUserStore } from '@/store/store';
import { fetchAdminData } from '@/utils/api';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loader from '@/components/Loader';
import { listTransactions, listUsers } from '@/lib/actions/admin.actions';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    setLoading,
    setName,
    setEmail,
    resetUser,
    setId,
    loading: userLoading,
  } = useUserStore();
  const { setAdmins, setTransactions } = useAdminStore();
  const [isInitialized, setIsInitialized] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const initializeUser = async () => {
    setLoading(true);

    try {
      const [userData, usersData, userTransactions] = await Promise.all([
        fetchAdminData(),
        listUsers(),
        listTransactions(),
      ]);

      if (userData.documents?.length > 0) {
        const { fullName, email, $id } = userData.documents[0];
        setName(fullName);
        setEmail(email);
        setId($id);
      } else {
        console.error('No admin data found.');
        resetUser();
        router.push('/admin/login');
        return;
      }

      const adminList =
        usersData?.map((doc) => ({
          fullName: doc.fullName || '',
          email: doc.email || '',
          transactionsCount: doc.transactionsCount || 0,
          balance: doc.balance || 0,
          $id: doc.$id || '',
        })) || [];

      const transactionsList =
        userTransactions?.map((transaction) => ({
          id: transaction.$id,
          amount: transaction.amount || 0,
          date: transaction.date || transaction.$createdAt,
          description: transaction.description || '',
        })) || [];

      setAdmins(adminList);
      setTransactions(transactionsList);
    } catch (error) {
      console.error('Error initializing user:', error);
      resetUser();
      router.push('/admin/login');
    } finally {
      setLoading(false);
      setIsInitialized(true);
    }
  };

  useEffect(() => {
    if (!isInitialized) {
      initializeUser();
    }
  }, [pathname]);

  if (userLoading || !isInitialized) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 font-montserrat">
      <Sidebar />
      <div className="flex flex-col ml-0 md:ml-64 transition-all duration-300 ease-in-out">
        <Header />
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
