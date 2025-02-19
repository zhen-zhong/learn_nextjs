import { useTranslations, useLocale } from 'next-intl';
const Home = () => {
  const t = useTranslations();
  const locale = useLocale();
  console.log(locale,'useLocale');
  
  return (
    <>Home
      {t('test')}
    </>
  )
}

export default Home