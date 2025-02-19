import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface LanguageState {
    locale: string;
    setLocale: (locale: string) => void;
}

// 使用 `persist` 中间件时需要通过类型推导
const useLanguageStore = create<LanguageState>()(
    persist(
        (set) => ({
            locale: 'zh', // 默认语言
            setLocale: (locale: string) => set({ locale }),
        }),
        {
            name: 'language-storage', // 持久化的键
            storage: createJSONStorage(() => localStorage), // 使用 localStorage
        }
    )
);

export default useLanguageStore;
