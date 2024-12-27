'use client';

import axios from 'axios';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { BottomNavigation } from '@/components/dashboard/BottomNavigation';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useUserStore } from '@/store/store';
import { useRouter } from 'next/navigation';
import { ToastError } from '@/components/ToastError'; // Import the ToastError component
import { error } from 'console';
import { toast } from 'react-toastify';

// Define the schema for form validation
const formSchema = z.object({
  accountName: z
    .string()
    .min(2, { message: 'Account name must be at least 2 characters.' }),
  bankName: z
    .string()
    .min(2, { message: 'Bank name must be at least 2 characters.' }),
  accountNumber: z
    .string()
    .min(10, { message: 'Account number must be at least 10 characters.' }),
  amount: z
    .number()
    .positive({ message: 'Amount must be a positive number.' })
    .transform((val) => Number(val)),
  description: z.string().optional(),
});

// Define TypeScript types based on schema
type FormValues = z.infer<typeof formSchema>;

export default function SendMoneyPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<any>(null);
  const [formData, setFormData] = useState<FormValues | null>(null);
  const router = useRouter();
  const { id } = useUserStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(true);
      setFormData(data);
      setIsModalOpen(true);
    }, 2000);
  };

  const confirmPayment = async () => {
    if (!formData) return;

    setConfirmLoading(true);
    try {
      const { accountName, amount, description } = formData;
      const response = await axios.post('/api/addTransaction', {
        userId: id,
        amount: amount,
        type: 'debit',
        description: description || '',
      });

      console.log('Transaction successful:', response.data);
      setIsSuccess(true);
      setIsModalOpen(false);
      toast.success(`$${amount} sent to ${accountName}`);
      router.push('/dashboard');
    } catch (error: any) {
      console.log(error.response.data.message);
      //   setErrorMessage(error.response.data.message);
      toast.error(error.response.data.message, {
        autoClose: 5000,
      });
      setIsModalOpen(false);
    } finally {
      setConfirmLoading(false);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
            Send Money
          </h1>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Transfer Details</CardTitle>
              <CardDescription>
                Enter the details for your money transfer.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="accountName">Account Name</Label>
                  <Input
                    id="accountName"
                    {...register('accountName')}
                    className="w-full"
                  />
                  {errors.accountName && (
                    <p className="text-sm text-red-500">
                      {errors.accountName.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="accountName">Account Number</Label>
                  <Input
                    id="accountName"
                    {...register('accountNumber')}
                    className="w-full"
                  />
                  {errors.accountNumber && (
                    <p className="text-sm text-red-500">
                      {errors.accountNumber.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bankName">Bank Name</Label>
                  <Input
                    id="bankName"
                    {...register('bankName')}
                    className="w-full"
                  />
                  {errors.bankName && (
                    <p className="text-sm text-red-500">
                      {errors.bankName.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount ($)</Label>
                  <Input
                    id="amount"
                    type="number"
                    {...register('amount', { valueAsNumber: true })}
                    className="w-full"
                  />
                  {errors.amount && (
                    <p className="text-sm text-red-500">
                      {errors.amount.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description (Optional)</Label>
                  <Textarea
                    id="description"
                    {...register('description')}
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Please wait
                    </>
                  ) : (
                    'Send Money'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          {isSuccess && (
            <Alert className="mt-4">
              <CheckCircle2 className="h-4 w-4" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Your money transfer has been initiated successfully.
              </AlertDescription>
            </Alert>
          )}
        </div>
      </main>
      <BottomNavigation />
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="!font-montserrat">
          <DialogHeader>
            <DialogTitle>Confirm Transaction</DialogTitle>
            <DialogDescription>
              Please review the details of your transaction.
            </DialogDescription>
          </DialogHeader>
          {formData && (
            <div className="py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="font-semibold">Account Name:</div>
                <div className="tracking-wide">{formData.accountName}</div>
                <div className="font-semibold">Account Number:</div>
                <div className="tracking-widest">{formData.accountNumber}</div>
                <div className="font-semibold">Bank Name:</div>
                <div>{formData.bankName}</div>
                <div className="font-semibold">Amount:</div>
                <div>${formData.amount.toLocaleString()}</div>
                <div className="font-semibold">Description:</div>
                <div>{formData.description || 'N/A'}</div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsModalOpen(false)}
              disabled={confirmLoading}
            >
              Cancel
            </Button>
            <Button onClick={confirmPayment} disabled={confirmLoading}>
              {confirmLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing
                </>
              ) : (
                'Confirm Payment'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
