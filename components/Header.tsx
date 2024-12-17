'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Lock, Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Lock className="h-8 w-8" />
          <span className="text-2xl font-bold">Pinnacle Bank</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <NavLinks />
        </nav>
        <div className="hidden md:block">
          <Link href={'/login'}>
            <Button
              variant="outline"
              className="bg-white text-blue-900 hover:bg-blue-100"
            >
              Log In
            </Button>
          </Link>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800 overflow-hidden transition-all duration-300 ease-in-out max-h-screen">
          <nav className="flex flex-col space-y-4 items-center py-4 animate-fade-in">
            <NavLinks />
            <Link href={'/login'}>
              <Button
                variant="outline"
                className="bg-white text-blue-900 hover:bg-blue-100 transition-colors duration-300"
              >
                Log In
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLinks() {
  return (
    <>
      <Link href="#" className="hover:text-blue-200 transition duration-200">
        Personal
      </Link>
      <Link href="#" className="hover:text-blue-200 transition duration-200">
        Business
      </Link>
      <Link href="#" className="hover:text-blue-200 transition duration-200">
        About
      </Link>
      <Link href="#" className="hover:text-blue-200 transition duration-200">
        Contact
      </Link>
    </>
  );
}
