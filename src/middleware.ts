import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  request.cookies.set("x-middleware-test", "some test value?!");

  return NextResponse.next({
    request, // <- overwrite the request object!! yay! :D
  });
}

export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
    },
  ],
};
