import { NextResponse } from 'next/server';
import { createSessionClient } from '@/lib/appwrite';
import { Query } from 'appwrite';
import { appwriteConfig } from '@/lib/appwrite/config';

export const GET = async () => {
  try {
    const { account, databases } = await createSessionClient();

    // Fetch the authenticated user's account
    const user = await account.get();
    const accountId = user.$id;

    // Query the database for documents matching the accountId
    const result = await databases.listDocuments(
      appwriteConfig.databaseId, // Your database ID
      appwriteConfig.usersCollectionId, // Your collection ID
      [Query.equal('accountId', accountId)], // Filter for the user's accountId
    );

    const filteredDocuments = result.documents.map((doc: any) => ({
      fullName: doc.fullName,
      balance: doc.balance,
      email: doc.email,
      userId: doc.$id,
      transactionsCount: doc.transactionsCount,
    }));

    // Return user and documents
    return NextResponse.json({
      documents: filteredDocuments,
      //   originalDocs: result.documents,
    });
  } catch (error: any) {
    console.error('Error fetching user or documents:', error.message);
    return NextResponse.json(
      { error: 'Failed to fetch user or documents' },
      { status: 500 },
    );
  }
};
