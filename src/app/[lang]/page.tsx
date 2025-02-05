import Link from 'next/link'
import { useTranslation } from '../i18'
export default async function Login({ params: { lang } }) {

  const { t } = await useTranslation(lang)

  return (
    <>
      <h1>Hi there!</h1>
      <div> {t('test')}</div>
      <Link href={`/${lang}/login`}>second page</Link>
    </>
  )
}