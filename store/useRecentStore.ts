import { create } from 'zustand';
import { useEffect } from 'react';

export type RecentUser = { username: string; avatar: string };

interface RecentState {
  recent: RecentUser[];
  addUser: (user: RecentUser) => void;
  setRecent: (users: RecentUser[]) => void;
}

export const useRecentStore = create<RecentState>((set) => ({
  recent: [],
  addUser: (user) =>
    set((state) => {
      const updated = [
        user,
        ...state.recent.filter((u) => u.username !== user.username),
      ].slice(0, 5);
      if (typeof window !== 'undefined')
        localStorage.setItem('recentUsers', JSON.stringify(updated));
      return { recent: updated };
    }),
  setRecent: (users) => set({ recent: users }),
}));

export const useLoadRecentFromStorage = () => {
  const setRecent = useRecentStore((state) => state.setRecent);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('recentUsers');
      if (stored) setRecent(JSON.parse(stored));
    }
  }, [setRecent]);
};
