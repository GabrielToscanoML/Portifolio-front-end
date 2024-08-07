import type { Metadata } from 'next'
import { Roboto_Flex as Roboto, Kanit } from 'next/font/google'
import './globals.css'
import InstagramRedirect from '@/components/InstagramRedirect';

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const kanit = Kanit({
    subsets: ['latin'],
    weight:'500',
    variable: '--font-kanit',
 });

export const metadata: Metadata = {
  title: 'Bem vinda(o)!',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className='scroll-smooth'>
      <body className={`${roboto.variable} ${kanit.variable} font-sans`}>{children} <InstagramRedirect /></body>
    </html>
  )
}
