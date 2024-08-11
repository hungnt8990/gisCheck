import { NextResponse } from 'next/server'

export function middleware(request) {
  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: [], //['/comparedata/:path*'],
  api: {
    responseLimit: '8mb',
    bodyParser: {
      sizeLimit: '1mb'
    }
  },
  maxDuration: 5
}
