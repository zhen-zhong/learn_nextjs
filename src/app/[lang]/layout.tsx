import { dir } from 'i18next'
import { languages } from '../i18/settings'

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
}

export default function RootLayout({
  children,
  params: {
    lang
  }
}) {
  return (
    <html lang={lang} dir={dir(lang)}>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}