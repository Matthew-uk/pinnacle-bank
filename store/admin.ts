import { create } from 'zustand';

type AdminData = {
  fullName: string;
  email: string;
  password: string;
  balance: number;
  accountId: string;
  transactionsCount: number;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  $databaseId: string;
  $collectionId: string;
};

type AdminStore = {
  admins: AdminData[];
  setAdmins: (admins: AdminData[]) => void;
  updateAdmin: (id: string, updatedData: Partial<AdminData>) => void;
  getAdminById: (id: string) => AdminData | undefined;
};

const useAdminStore = create<AdminStore>((set, get) => ({
  admins: [],

  setAdmins: (admins) => set({ admins }),

  updateAdmin: (id, updatedData) => {
    set((state) => ({
      admins: state.admins.map((admin) =>
        admin.$id === id ? { ...admin, ...updatedData } : admin,
      ),
    }));
  },

  getAdminById: (id) => get().admins.find((admin) => admin.$id === id),
}));

export default useAdminStore;
