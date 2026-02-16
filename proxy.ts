import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {

  const token = request.cookies.get("auth_token")
  const userInfo = request.cookies.get("user_info")
  const authPaths = ['/','/inscription']

  if (((!userInfo || !token) || !userInfo?.value.startsWith("{")) && !authPaths.includes(request.nextUrl.pathname)) {
       return NextResponse.redirect(new URL('/', request.url))
  }

  if (!userInfo?.value.startsWith("{") && !authPaths.includes(request.nextUrl.pathname)) {
      return NextResponse.redirect(new URL('/', request.url))
  }
  

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};