"use client"

import { useTranslations, useLocale } from 'next-intl';
import useLanguageStore from 'src/store/useLanguageStore';
const Home = () => {
  const t = useTranslations();
  const { locale, setLocale } = useLanguageStore((state) => state); 

  return (
    <>Home
      {t('test')}
      <div>
        <button onClick={() => setLocale("en")}>English</button>
        <button onClick={() => setLocale("zh")}>中文</button>
      </div>
    </>
  )
}

export default Home