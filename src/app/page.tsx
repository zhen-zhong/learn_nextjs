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
      <div>
        <h1>Welcome to Next.js with AOS!</h1>

        <div data-aos="fade-up">
          <p>This content will fade up when you scroll to it.</p>
        </div>

        <div data-aos="fade-left">
          <p>This content will fade left when you scroll to it.</p>
        </div>

        <div data-aos="zoom-in">
          <p>This content will zoom in when you scroll to it.</p>
        </div>
      </div>
    </>
  )
}

export default Home