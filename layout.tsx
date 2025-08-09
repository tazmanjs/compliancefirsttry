import "./globals.css";
import Link from "next/link";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-semibold">Compliance MVP</Link>
            <nav className="flex gap-4 text-sm">
              <Link href="/obligations">Obligations</Link>
              <Link href="/policies">Policies</Link>
              <Link href="/alerts">Alerts</Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
