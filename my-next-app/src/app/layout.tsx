// Import global CSS styles
import './globals.css'

// Application metadata configuration
export const metadata = {
  title: 'Examen LKMX - Ximena Vargas Gámez',
  description: 'Examen LKMX Agosto 2025',
}

// Root layout component that wraps all pages
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // HTML document structure with English language
    <html lang="en">
      {/* Body with antialiased text rendering and child content */}
      <body className="antialiased">{children}</body>
    </html>
  )
}