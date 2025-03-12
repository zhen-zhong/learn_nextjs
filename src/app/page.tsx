"use client"

import { useTranslations, useLocale } from 'next-intl';
import useLanguageStore from 'src/store/useLanguageStore';
import { useRouter } from 'next/navigation'
const Home = () => {
  const t = useTranslations();
  const router = useRouter();
  const { locale, setLocale } = useLanguageStore((state) => state);

  const handleRedirect = () => {
    router.push('/dashboard/test')
  }

  return (
    <>Home
      {t('test')}
      <div>
        <button onClick={() => setLocale("en")}>English</button>
        <button onClick={() => setLocale("zh")}>中文</button>
        <button onClick={handleRedirect}>Go to Dashboard</button>
      </div>
    </>
  )
}

export default Home