/** @type {import('next-i18next').UserConfig} */

module.exports = {
    i18n: {
        locales: ['en', 'zh'], // 支持的语言列表
        defaultLocale: 'en', // 默认语言
        localeDetection: false, // 自动根据浏览器语言选择
    },
    react: { useSuspense: false }, // 防止 Suspense 错误
}
