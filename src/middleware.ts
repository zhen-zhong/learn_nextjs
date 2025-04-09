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
    if (pathname === '/' || pathname === '/login') {
        return NextResponse.next()
    }
    if (auth(request)) {
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
    matcher: '/((?!_next|favicon.ico).*)',
}