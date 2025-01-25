import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  i18n:require('./next-i18next.config').i18n,
  reactStrictMode: true,
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
