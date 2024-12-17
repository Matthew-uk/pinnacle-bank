'use client';

import { Sidebar } from '@/components/admin/Sidebar';
import { Header } from '@/components/admin/Header';
import { useAdminStore, useUserStore } from '@/store/store';
import { fetchAdminData } from '@/utils/api';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Loader from '@/components/Loader';
import { listTransactions, listUsers } from '@/lib/actions/admin.actions';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { loading, setLoading, setName, setEmail, resetUser, setId } =
    useUserStore();
  const { setAdmins, setTransactions } = useAdminStore();
  const router = useRouter();
  const pathname = usePathname();

  const initializeUser = async () => {
    setLoading(true);
    try {
      const userData = await fetchAdminData();
      const usersData = await listUsers();
      const userTransactions = await listTransactions();

      if (userData.documents && userData.documents.length > 0) {
        const { fullName, email, $id } = userData.documents[0];
        setName(fullName);
        setEmail(email);
        setId($id);
        console.log({ fullName, email, userId: $id });
      } else {
        console.error('No admin data found.');
        resetUser();
        router.push('/admin/login');
        return;
      }

      // Ensure usersData is valid before setting it
      setAdmins(usersData || []);
      setTransactions(userTransactions || []);
    } catch (error) {
      console.error('Error fetching admin data:', error);
      resetUser();
      router.push('/admin/login');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initializeUser();
  }, [pathname]);

  if (loading) {
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
