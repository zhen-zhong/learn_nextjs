'use client';

import { useTranslation } from 'react-i18next';

const LoginPage = () => {
    const { t, i18n } = useTranslation();  // 通过 i18n 获取切换语言的方法

    // 切换语言的函数
    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div>
            <div>login-Page</div>

            {/* 点击按钮切换语言 */}
            <button onClick={() => changeLanguage('zh')}>切换中文</button>
            <button onClick={() => changeLanguage('en')}>切换英文</button>

            <p>{t('test')}</p> {/* 使用 t 函数获取翻译 */}
        </div>
    );
};

export default LoginPage;
