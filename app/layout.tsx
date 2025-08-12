import './globals.css'
export const metadata = {
  title: 'Nevada + Federal LLC Compliance Tracker',
  description: 'Track your business compliance requirements and deadlines',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
