import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { TUserPreferences } from './types'

const useUserPreferencesStore = create<TUserPreferences>()(
  persist(
    (set) => ({
      themeName: 'dark',
      toggleTheme: () =>
        set((state) => ({ themeName: state.themeName === 'light' ? 'dark' : 'light' })),
    }),
    {
      name: 'user-preferences',
    },
  ),
)

export default useUserPreferencesStore
