'use server';
import Cookies from 'js-cookie';
import { ID, Query } from 'node-appwrite';
import { createAdminClient, createSessionClient } from '../appwrite';
import { appwriteConfig } from '../appwrite/config';
import { parseStringify } from '../utils';
import { cookies } from 'next/headers';
import axios from 'axios';

const getUserByEmail = async (email: string) => {
  const { databases } = await createAdminClient();

  const result = await databases.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.usersCollectionId,
    [Query.equal('email', email)],
  );
  result.total > 0 && console.log(result);
  return result.total > 0 ? result.documents[0] : null;
};

const handleError = (error: unknown, message: string) => {
  console.log(error, message);
  throw error;
};

export const login = async (email: string, password: string) => {
  try {
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);
    // Set the session cookie
    const cookie = (await cookies()).set('appwrite-session', session.secret, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
    });
    Cookies.set('appwrite-session', session.secret, {
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });
    console.log(cookie);

    return { session };
  } catch (error) {
    handleError(error, 'Failed to login user');
  }
};
export const createAccount = async ({
  fullName,
  email,
  password,
}: {
  fullName: string;
  email: string;
  password: string;
}) => {
  try {
    const userExists = await getUserByEmail(email);
    if (userExists) {
      throw new Error('User Already Exists');
    }

    const { account, databases } = await createAdminClient();

    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      fullName,
    );
    const accountId = newAccount.$id;

    await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      ID.unique(),
      {
        fullName,
        email,
        password,
        accountId,
      },
    );

    return parseStringify({ accountId });
  } catch (error) {
    handleError(error, 'Error Creating New Account');
  }
};

export const getUser = async () => {
  try {
    const response = await axios.get('/api/getUser');
    return response.data;
  } catch (error) {
    handleError(error, 'Error getting User');
  }
};

export const logout = async () => {
  try {
    const sessionCookie = (await cookies()).get('appwrite-session');
    if (!sessionCookie) throw new Error('No active session found');

    const { account } = await createSessionClient(); // User-scoped client
    const result = await account.deleteSessions();
    console.log('Logged out:', result);

    (await cookies()).delete('appwrite-session'); // Clear session cookie
  } catch (error) {
    handleError(error, 'Error logging out');
  }
};
