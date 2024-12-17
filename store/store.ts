import { create } from 'zustand';

export interface UserInterface {
  name: string;
  id: string;
  email: string;
  balance: number;
  accountNumber: number;
  loading: boolean;
  setName: (name: string) => void;
  setId: (id: string) => void;
  setEmail: (email: string) => void;
  updateBalance: (balance: number) => void;
  setAccountNumber: (accountNumber: number) => void;
  setLoading: (loading: boolean) => void;
  resetUser: () => void;
}

export interface AdminData {
  fullName: string;
  email: string;
  transactionsCount: number;
  balance: number;
  $id: string;
}

export interface Transaction {
  id: string;
  amount: number;
  date: string;
  description: string;
}

type AdminStore = {
  admins: AdminData[];
  transactions: Transaction[];
  setAdmins: (admins: AdminData[] | []) => void;
  setTransactions: (transactions: Transaction[] | []) => void;
};

export const useAdminStore = create<AdminStore>((set) => ({
  admins: [],
  transactions: [],
  setAdmins: (admins) => set({ admins }),
  setTransactions: (transactions) => set({ transactions }),
}));

export const useUserStore = create<UserInterface>((set) => ({
  name: '',
  id: '',
  email: '',
  balance: 0,
  accountNumber: 0,
  loading: true,
  setName: (name) => set({ name }),
  setId: (id) => set({ id }),
  setEmail: (email) => set({ email }),
  setAccountNumber: (accountNumber) => set({ accountNumber }),
  updateBalance: (balance) => set({ balance }),
  setLoading: (loading) => set({ loading }),
  resetUser: () =>
    set({
      name: '',
      id: '',
      email: '',
      balance: 0,
      accountNumber: 0,
      loading: false,
    }),
}));
