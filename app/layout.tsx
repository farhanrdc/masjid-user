import Footer from '@/components/footer'
import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import Navbar from '@/components/navbar'
import { cn } from "@/lib/utils";
import ChangeBackgroundOnScroll from '@/components/ui/cscroll'
import BackToTopButton from '@/components/ui/BackToTopButton'
import { siteConfig } from '@/config/site'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons:[
    {
      url:"/logo.jpg",
      href:"/logo.jpg",
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" className="scroll-smooth light" style={{colorScheme:'light'}} >
      
        <body className={cn('relative',font.className)} >
            <ChangeBackgroundOnScroll>
            <Navbar />
              {children}
              <BackToTopButton />
            <Footer />
            </ChangeBackgroundOnScroll>

        </body>
      
      
    </html>
  )
}
