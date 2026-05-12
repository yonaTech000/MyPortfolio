import { ReactNode } from 'react'
import { ThemeProvider } from '../../context/ThemeContext'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import ScrollToTop from '../common/ScrollToTop'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="relative">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  )
}

export default Layout