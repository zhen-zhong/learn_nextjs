// src/i18n.ts

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from 'src/public/locales/en/common.json'
import frTranslation from 'src/public/locales/zh/common.json'

// 初始化 i18next
i18n
    .use(initReactI18next) // 使用 react-i18next
    .init({
        resources: {
            en: { translation: enTranslation },
            fr: { translation: frTranslation },
        },
        lng: 'en', // 默认语言
        fallbackLng: 'en', // 如果语言加载失败则回退到英语
        interpolation: {
            escapeValue: false, // React 已经处理了 XSS 问题
        },
    })

export default i18n
