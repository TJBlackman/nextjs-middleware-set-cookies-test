import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  console.log(`running middleware....`, request.method, request.url);
  request.cookies.set("x-middleware-test", "some test value?!");
}

export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
    },
  ],
};
