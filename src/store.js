import { create } from 'zustand';

const useSearchStore = create((set) => ({
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
}));

export default useSearchStore;
