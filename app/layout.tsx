
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AuthProvider } from "./Providers";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RESTAURANT Roter Stein',
  description: '2023 © OAASE Suisse GmbH – We do DIGITAL things. All Rights Reserved./RESTAURANT Roter Stein',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
    
      <body className={inter.className}>
  <AuthProvider>   {children}</AuthProvider>
  </body>
    </html>
  )
}
