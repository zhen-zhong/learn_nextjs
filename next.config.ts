import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */

const nextI18Next = require('./next-i18next.config');
const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'zh'], 
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      {
        // 原始路径
        source: '/home',
        // 目标路径
        destination: '/',
        // 设置为 `true` 进行永久重定向
        permanent: true,
      },
      {
        source: '/dashboard',
        destination: '/dashboard/customers',
        permanent: false,
      },
    ];
  },

};

export default nextConfig;
