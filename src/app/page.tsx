"use client"

import { useTranslations, useLocale } from 'next-intl';
import useLanguageStore from 'src/store/useLanguageStore';
import { useRouter } from 'next/navigation'
import 'src/app/globals.css';

const Home = () => {
  const t = useTranslations();
  const router = useRouter();
  const { locale, setLocale } = useLanguageStore((state) => state);

  const handleRedirect = () => {
    router.push('/dashboard/test')
  }

  return (
    <>

      <div>
        <button onClick={() => setLocale("en")}>English</button>
        <button onClick={() => setLocale("zh")}>中文</button>
        <button onClick={handleRedirect}>Go to Dashboard</button>
      </div>
      <div>
        <div data-aos="fade-up">
          <p>{t('test')}</p>
        </div>

        <div data-aos="fade-left" className='p-4 bg-gray-200 color-red'>
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