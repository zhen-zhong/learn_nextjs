import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')
    console.log(token,'token====');
    
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

// 配置哪些路径需要应用该中间件
export const config = {
    matcher: ['/dashboard/:path*'],
}
