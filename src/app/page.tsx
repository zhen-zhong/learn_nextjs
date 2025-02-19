"use client"

import { useTranslations, useLocale } from 'next-intl';
import utils from 'src/utils/utils';
const Home = () => {
  const t = useTranslations();
  const locale = useLocale();

  function change(e: string) {
    console.log(locale, 'locale');
    utils.setLanguageCookie(e);
    console.log(utils.getLanguageFromCookie());
  }

  return (
    <>Home
      {t('test')}
      <button onClick={() => { change('zh') }}>zh</button>
      <button onClick={() => { change('en') }}>en</button>
    </>
  )
}

export default Home