import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from 'src/public/locales/en/common.json'
import zh from 'src/public/locales/zh/common.json'

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        zh: { translation: zh },
    },
    lng: 'en', // 默认语言
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
    react: {
        useSuspense: false
    }
})

export default i18n
