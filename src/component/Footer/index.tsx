import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages } from '../../app/i18/settings'
import { useTranslation } from '../../app/i18'

export const Footer = async ({ lang }) => {
    const { t } = await useTranslation(lang)
    return (
        <footer style={{ marginTop: 50 }}>
            <Trans i18nKey="languageSwitcher" t={t}>
                Switch from <strong>{{ lang }}</strong> to:{' '}
            </Trans>
            {languages.filter((l) => lang !== l).map((l, index) => {
                return (
                    <span key={l}>
                        {index > 0 && (' or ')}
                        <Link href={`/${l}`}>
                            {l}
                        </Link>
                    </span>
                )
            })}
        </footer>
    )
}