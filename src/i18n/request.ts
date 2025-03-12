import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
    // 获取请求中的 cookies，使用 await 解析 Promise
    const cookieStore = await cookies();

    // 获取 'language' cookie 值，默认为 'zh'
    const languageCookie = cookieStore.get('language');
    const locale = languageCookie ? languageCookie.value : 'zh'; 

    // 动态加载相应的语言消息
    return {
        locale,
        messages: (await import(`src/public/locales/${locale}/common.json`)).default,
    };
});
