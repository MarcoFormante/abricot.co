import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {

  const token = request.cookies.get("auth_token")
  const userInfo = request.cookies.get("user_info")
  const authPaths = ['/','/inscription']

  if ((!userInfo || !token) && !authPaths.includes(request.nextUrl.pathname)) {
       return NextResponse.redirect(new URL('/', request.url))
  }
  
  const headers = new Headers(request.headers);
  headers.set("x-current-path", request.nextUrl.pathname);

  return NextResponse.next({
    request: {
      headers: headers,
    },
  });
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};