"use client";

import React, { useState, useEffect } from "react";
import { IntlProvider } from "next-intl";
import useLanguageStore from "src/store/useLanguageStore";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const [localeMessages, setLocaleMessages] = useState<any>(null); // 语言消息
  const { locale, setLocale } = useLanguageStore((state) => state);

  // 在组件加载时，根据当前的 locale 加载消息文件
  useEffect(() => {
    const loadMessages = async () => {
      try {
        const messages = await import(`src/public/locales/${locale}/common.json`);
        setLocaleMessages(messages.default); // 设置翻译消息
      } catch (error) {
        console.error("Error loading language messages:", error);
      }
    };

    loadMessages();
  }, [locale]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    return () => AOS.refresh();
  }, [])

  return (
    <html lang={locale}>
      <body>
        {localeMessages && (
          <IntlProvider locale={locale} messages={localeMessages}>
            <div>
              {children}
            </div>
          </IntlProvider>
        )}
      </body>
    </html>
  );
}
