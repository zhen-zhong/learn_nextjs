import { useTranslations } from 'next-intl';
const Home = () => {
  const t = useTranslations();
  return (
    <>Home
      {t('test')}
    </>
  )
}

export default Home