An example project where I'm trying to set cookies in a NextJS middleware and read those cookies in the layout and page files, but they don't show up.

Docs: https://nextjs.org/docs/app/building-your-application/routing/middleware#using-cookies

It says:\

> For incoming requests, cookies comes with the following methods: get, getAll, set, and delete cookies. You can check for the existence of a cookie with has or remove all cookies with clear.

So, I believe I should be able to SET a cookie on the incoming request in the middleware. But it doesn't work...

## Solution

This worked for me in NextJS v14.2.4:

```javascript
export async function middleware(request: NextRequest) {
  request.cookies.set("x-middleware-test", "some test value?!");

  return NextResponse.next({
    request, // <- overwrite the request object!! yay! :D
  });
}
```
