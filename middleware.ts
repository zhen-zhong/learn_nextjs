import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const token = req.cookies.get('token');
    console.log(token,'token===');
    
    // 如果没有 token，则跳转到登录页面
    if (!token) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    // 如果有 token，则继续执行请求
    return NextResponse.next();
}

export const config = {
    matcher: ['/home/**', '/dashboard/**'],
};