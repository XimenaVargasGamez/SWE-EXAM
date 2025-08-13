import './globals.css'

export const metadata = {
  title: 'Examen LKMX - Ximena Vargas Gámez',
  description: 'Examen LKMX Agosto 2025',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
