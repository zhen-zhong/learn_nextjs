import { NextResponse, NextRequest } from 'next/server'

const auth = (request: NextRequest) => {
    if (!request.cookies.get('access_token')) {
        console.log('路由拦截成功')
        return false
    }
    return true
}

function isPublicAsset(pathname: string): boolean {
    return (
        pathname.startsWith('/locales/') || // 你的语言文件
        pathname.startsWith('/images/') ||  // 假设你有图片目录
        pathname.startsWith('/fonts/') ||   // 假设你有字体目录
        /\.(?:png|jpg|jpeg|gif|svg|ico|css|js|json|woff|woff2|ttf|eot|map)$/.test(pathname) // 检查文件扩展名
    );
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    console.log('Middleware triggered', pathname);

    // 如果是根路径、登录页或认证通过，直接继续请求
    if (pathname === '/' || pathname === '/login' || isPublicAsset(pathname) || auth(request)) {
        return NextResponse.next()
    }

    if (pathname === '/404' || pathname === '/_error' || pathname === '/500' || pathname === '/502') {
        return NextResponse.next()
    }
    
    // 重定向到 /404 页面
    return NextResponse.redirect(new URL('/404', request.url))
}

export const config = {
    /*
     * 匹配所有路径，除了:
     * - api (API 路由)
     * - _next/static (静态文件)
     * - _next/image (图片优化文件)
     * - favicon.ico (网站图标)
     */
    matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}
