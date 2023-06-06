import './globals.css';
import { Inter } from 'next/font/google';
import TopNavBar from '@components/TopNavBar';
import portrait from "@public/self-portrait.png";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'janiidu',
  description: 'Janidu Rathnayaka Portfolio',
  keywords:['Janidu Rathnayaka', 'Developer Portfolio', 'Web Developer', 'Intern', 'Developer', 'Next.js', 'React', 'JavaScript'], 
  icons: {
    icon: 'favicon/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'janiidu',
    description: 'Janidu Rathnayaka Portfolio',
    url: 'https://janiidu.me',
    siteName: 'janiidu.me',
    images: [
      {
        href: {portrait},
        width: 800,
        height: 600,
      },
      {
        href: {portrait},
        width: 1800,
        height: 1600,
        alt: 'Portrait',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header>
        <TopNavBar />
      </header>
        <main>{children}</main> 
      </body>
    </html>
  )
}
