import type { Metadata } from 'next'
import { Baloo_2 } from 'next/font/google'
import './globals.css'

const baloo2 = Baloo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-baloo2',
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
      <body className={`${baloo2.variable} antialiased bg-white`}>
        {children}
      </body>
    </html>
  )
}
