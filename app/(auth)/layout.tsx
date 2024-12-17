import Link from 'next/link';
import { Lock } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - Pinnacle Bank',
  description: 'Pinnacle Bank',
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col font-montserrat">
      <header className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Lock className="h-6 w-6" />
            <span className="text-xl font-bold">Pinnacle Bank</span>
          </Link>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md">{children}</div>
      </main>
      <footer className="bg-gray-200 py-4 text-center text-sm text-gray-600">
        &copy; 2024 Pinnacle Bank. All rights reserved.
      </footer>
    </div>
  );
};

export default AuthLayout;
