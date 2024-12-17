import { NextResponse } from 'next/server';
import { addTransaction } from '@/lib/actions/transactions.actions';

export const POST = async (req: Request) => {
  try {
    const payload = await req.json();

    // Delegate logic to the `addTransaction` utility
    const result = await addTransaction(payload);

    return NextResponse.json({ message: 'Transaction successful', result });
  } catch (error: any) {
    console.error('Error processing transaction:', error.message);

    // Send a user-friendly error message to the client
    return NextResponse.json(
      {
        message:
          error.message ||
          'An error occurred while processing the transaction.',
      },
      { status: 500 },
    );
  }
};
