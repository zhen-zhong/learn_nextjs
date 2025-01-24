//next-i18next.config.js

/**
 * @type {import('next-i18next').UserConfig}
 */

const path = require('path');
module.exports = {
    i18n: {
        // 默认语言
        defaultLocale: 'en',
        // 配置 Next.js 的国际化路由，例如访问 /blog 时页面为英文，访问 /zh/blog 时页面为中文。
        locales: ['en', 'zh'],
        // 将翻译相关的内容统一存放在 /public/locales 目录中
        localePath: path.resolve('src/public/locales'),
    },
};
