import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'A_UP | Amigos Unidos por um Propósito',
  description: 'Tecnologia acessível para pequenas e médias empresas.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`${poppins.variable} antialiased bg-white`}>
        {children}
      </body>
    </html>
  )
}
