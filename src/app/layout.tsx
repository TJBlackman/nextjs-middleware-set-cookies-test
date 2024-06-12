import type { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const testCookie = cookieStore.get("x-middleware-test");

  return (
    <html lang="en">
      <body>
        <h1>Layout cookie: {testCookie?.value || "Not Found"}</h1>
        {children}
      </body>
    </html>
  );
}
