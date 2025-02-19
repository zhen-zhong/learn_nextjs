function setLanguageCookie(language: string) {
    const expirationDays = 7;
    const date = new Date();
    date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = `language=${language}; ${expires}; path=/`;
}

function getLanguageFromCookie(): string {
    const name = "language=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';'); 

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length); 
        }
    }
    return 'zh'; // 默认语言为中文
}

export default { setLanguageCookie, getLanguageFromCookie };
