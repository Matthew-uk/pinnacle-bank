'use client';

import * as React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Users,
  PiggyBank,
  Shield,
  ArrowRight,
  MessageSquare,
  User,
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function BankingTabs() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6">
      <Tabs defaultValue="mobile" className="w-full">
        <TabsList className="grid md:grid-cols-4 grid-cols-2 h-auto bg-transparent gap-2 sm:gap-4">
          {[
            {
              value: 'mobile',
              icon: Smartphone,
              label: 'Mobile and Online Banking',
            },
            { value: 'business', icon: Users, label: 'Business Banking' },
            {
              value: 'savings',
              icon: PiggyBank,
              label: 'Savings and Investments',
            },
            {
              value: 'security',
              icon: Shield,
              label: 'Preventing Fraud and Scams',
            },
          ].map(({ value, icon: Icon, label }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="flex flex-col items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:border-2 data-[state=active]:border-yellow-400 rounded-lg p-4 sm:p-6 h-auto transition-all duration-200 hover:bg-gray-50"
            >
              <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-slate-600" />
              <span className="text-slate-600 font-medium text-center text-xs sm:text-sm">
                {label}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="mt-8">
          {/* <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 p-2 rounded-full bg-white shadow-lg z-10 hover:bg-gray-50 transition-colors duration-200">
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 p-2 rounded-full bg-white shadow-lg z-10 hover:bg-gray-50 transition-colors duration-200">
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
          </button> */}

          {['mobile', 'business', 'savings', 'security'].map((tab, index) => (
            <TabsContent key={tab} value={tab} className="mt-0">
              <Card className="border-0 shadow-none">
                <CardContent className="grid md:grid-cols-2 gap-8 bg-gray-50 rounded-lg p-4 sm:p-8">
                  {/* Grid 1 */}
                  <div className="">
                    <Image
                      src={`${
                        index === 0
                          ? '/media/cool-guy.jpeg'
                          : index === 1
                          ? '/media/cool-woman1.jpeg'
                          : index === 2
                          ? '/media/cool-family.jpeg'
                          : '/media/padlock.jpeg'
                      }`}
                      alt={`${tab} banking`}
                      //   className="object-contain w-1/2 h-full"
                      width={300}
                      height={300}
                    />
                    <div className="mt-8">
                      <h2 className="text-xl sm:text-2xl font-bold mb-4">
                        {index === 0 &&
                          'Bank On Your Own Terms with Mobile and Online Banking Options'}
                        {index === 1 &&
                          'Empower Your Business with Our Banking Solutions'}
                        {index === 2 &&
                          'Grow Your Wealth with Smart Savings and Investment Options'}
                        {index === 3 &&
                          'Stay Protected with Our Advanced Security Measures'}
                      </h2>
                      <p className="text-gray-600 mb-4 text-sm sm:text-base">
                        {index === 0 &&
                          'Mobile and online banking options like online bill pay, contactless payments and remote deposits let you bank remotely at your convenience.'}
                        {index === 1 &&
                          'From small startups to large corporations, our business banking solutions are tailored to meet your unique needs and help your business thrive.'}
                        {index === 2 &&
                          'Discover a range of savings accounts and investment opportunities designed to help you achieve your financial goals and secure your future.'}
                        {index === 3 &&
                          'We prioritize your security with state-of-the-art fraud prevention systems and educational resources to keep your finances safe.'}
                      </p>
                      <Button className="bg-amber-200 text-black hover:bg-amber-300 transition-colors duration-200">
                        EXPLORE
                      </Button>
                    </div>
                  </div>

                  {/* Grid 2 */}
                  <div className="space-y-6 sm:space-y-8">
                    {/* <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-4">
                        {index === 0 &&
                          'Bank On Your Own Terms with Mobile and Online Banking Options'}
                        {index === 1 &&
                          'Empower Your Business with Our Banking Solutions'}
                        {index === 2 &&
                          'Grow Your Wealth with Smart Savings and Investment Options'}
                        {index === 3 &&
                          'Stay Protected with Our Advanced Security Measures'}
                      </h2>
                      <p className="text-gray-600 mb-4 text-sm sm:text-base">
                        {index === 0 &&
                          'Mobile and online banking options like online bill pay, contactless payments and remote deposits let you bank remotely at your convenience.'}
                        {index === 1 &&
                          'From small startups to large corporations, our business banking solutions are tailored to meet your unique needs and help your business thrive.'}
                        {index === 2 &&
                          'Discover a range of savings accounts and investment opportunities designed to help you achieve your financial goals and secure your future.'}
                        {index === 3 &&
                          'We prioritize your security with state-of-the-art fraud prevention systems and educational resources to keep your finances safe.'}
                      </p>
                      <Button className="bg-amber-200 text-black hover:bg-amber-300 transition-colors duration-200">
                        EXPLORE
                      </Button>
                    </div> */}

                    <div className="space-y-4 sm:space-y-6">
                      {[1, 2, 3, 4].map((item) => (
                        <div
                          key={item}
                          className={`space-y-2 sm:space-y-4 ${
                            item === 4
                              ? 'border border-amber-200 rounded-lg p-4'
                              : ''
                          }`}
                        >
                          <h3 className="text-base sm:text-lg font-semibold">
                            {index === 0 &&
                              item === 1 &&
                              'Online Banking lets you do everything, right from the comfort of your own home'}
                            {index === 0 &&
                              item === 2 &&
                              'Learn How to Build Good Spending Habits Online'}
                            {index === 0 &&
                              item === 3 &&
                              'Looking for an Easy Way to Send Money to Family and Friends? Try Zelle®'}
                            {index === 0 &&
                              item === 4 &&
                              'Deposit Checks On The Go With Mobile Deposit'}
                            {index === 1 &&
                              item === 1 &&
                              'Streamline Your Cash Flow with Our Business Checking Accounts'}
                            {index === 1 &&
                              item === 2 &&
                              'Expand Your Business with Our Flexible Loan Options'}
                            {index === 1 &&
                              item === 3 &&
                              'Simplify Payroll and Tax Management'}
                            {index === 1 &&
                              item === 4 &&
                              'Get Personalized Support from Our Business Banking Experts'}
                            {index === 2 &&
                              item === 1 &&
                              'High-Yield Savings Accounts to Maximize Your Returns'}
                            {index === 2 &&
                              item === 2 &&
                              'Diversify Your Portfolio with Our Investment Services'}
                            {index === 2 &&
                              item === 3 &&
                              'Plan for Retirement with Our IRA Options'}
                            {index === 2 &&
                              item === 4 &&
                              'Automate Your Savings with Smart Banking Features'}
                            {index === 3 &&
                              item === 1 &&
                              '24/7 Fraud Monitoring to Protect Your Accounts'}
                            {index === 3 &&
                              item === 2 &&
                              'Learn to Identify and Avoid Common Scams'}
                            {index === 3 &&
                              item === 3 &&
                              'Secure Online and Mobile Banking with Multi-Factor Authentication'}
                            {index === 3 &&
                              item === 4 &&
                              'Get Instant Alerts for Suspicious Activities'}
                          </h3>
                          <Button
                            variant="link"
                            className="p-0 h-auto text-black font-semibold hover:text-amber-600 transition-colors duration-200"
                          >
                            EXPLORE <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </div>
      </Tabs>

      <a
        href="mailto:customercarepinnacle@gmail.com"
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-amber-200 text-black hover:bg-amber-300 transition-colors duration-200 shadow-lg z-10 flex items-center p-2 rounded-md"
      >
        <User className="mr-2 h-6 w-6" size={20} /> Contact Customer Service
      </a>
    </div>
  );
}
