import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from '@/lib/auth';

const intlMiddleware = createMiddleware({
    locales: ['en', 'es'],
    defaultLocale: 'es',
    localePrefix: 'as-needed'
});

export default async function middleware(req: NextRequest) {
    // 1. Run next-intl middleware first directly
    const res = intlMiddleware(req);

    // 2. Check for protected routes
    const path = req.nextUrl.pathname;
    const isProtectedRoute = path.includes('/admin') || path.includes('/technician');

    // Auth redirect logic
    if (isProtectedRoute) {
        const session = req.cookies.get('session')?.value;
        const payload = session ? await decrypt(session) : null;

        if (!payload) {
            const url = new URL('/login', req.url);
            return NextResponse.redirect(url);
        }
    }

    return res;
}

export const config = {
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
