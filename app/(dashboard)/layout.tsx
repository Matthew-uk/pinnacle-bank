'use client';

import React, { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useUserStore } from '@/store/store';
import { fetchUserData } from '@/utils/api';
import Loader from '@/components/Loader';
import { toast } from 'react-toastify';
import { BottomNavigation } from '@/components/dashboard/BottomNavigation';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const router = useRouter();
  const pathname = usePathname(); // Use pathname to detect route changes
  const {
    loading,
    setLoading,
    setName,
    setEmail,
    setAccountNumber,
    resetUser,
    updateBalance,
    setId,
  } = useUserStore();

  const initializeUser = async () => {
    setLoading(true);
    try {
      const userData = await fetchUserData();
      const { fullName, email, balance, userId, transactionsCount } =
        userData.documents[0];
      if (transactionsCount >= 3) {
        toast.error('An error occured');
        return router.push('/login');
      }
      setName(fullName);
      setEmail(email);
      updateBalance(balance);
      setId(userId);
      console.log({ fullName, email, balance, userId });
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      resetUser();
      router.push('/login');
    }
  };

  useEffect(() => {
    // Initialize user on first load or when pathname changes
    initializeUser();
  }, [
    pathname,
    setLoading,
    setName,
    setEmail,
    setAccountNumber,
    resetUser,
    updateBalance,
    setId,
  ]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen font-montserrat">
      {children}
      <BottomNavigation />
    </div>
  );
};

export default AuthLayout;
