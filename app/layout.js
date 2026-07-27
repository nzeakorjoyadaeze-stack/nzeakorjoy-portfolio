import './globals.css'

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio showcasing featured projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="container">{children}</main>
      </body>
    </html>
  )
}
