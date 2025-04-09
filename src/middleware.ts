import { NextResponse, NextRequest } from 'next/server'

const auth = (request: NextRequest) => {
    if (!request.cookies.get('access_token')) {
        console.log('路由拦截成功')
        return false
    }
    return true
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    console.log('Middleware triggered', pathname);

    // 如果是根路径、登录页或认证通过，直接继续请求
    if (pathname === '/' || pathname === '/login' || auth(request)) {
        return NextResponse.next()
    }

    if (pathname === '/404' || pathname === '/_error' || pathname === '/500' || pathname === '/502') {
        return NextResponse.next()
    }
    
    // 重定向到 /404 页面
    return NextResponse.redirect(new URL('/404', request.url))
}

export const config = {
    matcher: '/((?!_next|favicon.ico).*)', // 排除 _next 静态文件和 favicon.ico
}
