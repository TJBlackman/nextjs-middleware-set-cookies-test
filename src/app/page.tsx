import { cookies } from "next/headers";

export default function Home() {
  const cookieStore = cookies();
  const testCookie = cookieStore.get("x-middleware-test");
  return (
    <main>
      <h2>Page cookie: {testCookie?.value || "Not Found"}</h2>
    </main>
  );
}
