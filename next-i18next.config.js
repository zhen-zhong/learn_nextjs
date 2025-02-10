/** @type {import('next-i18next').UserConfig} */

module.exports = {
    i18n: {
        locales: ['en', 'zh'], 
        defaultLocale: 'en',
        localeDetection: false,
    },
    react: { useSuspense: false },
}
