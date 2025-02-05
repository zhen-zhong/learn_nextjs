import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Footer } from 'src/component/Footer';

interface LoginPageProps {
    params: {
        lang: string;
    };
}

const LoginPage: React.FC<LoginPageProps> = ({ params }) => {

    const { lang } = params;
    const { t } = useTranslation();

    return (
        <div style={{ padding: '20px' }}>
            <h1>{t('test')}</h1>
            <Link href={`/${lang}`}>back</Link>
            <Footer lang={lang} />
        </div>
    );
};

export default LoginPage;
