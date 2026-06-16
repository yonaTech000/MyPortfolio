import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import MobileMenu from './MobileMenu'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
]

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-40 transition duration-400 ${
        isScrolled
          ? 'bg-slate-950/85 border-b border-white/10 backdrop-blur-xl shadow-2xl shadow-slate-950/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-3 text-white">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-indigo-500 to-sky-500 text-sm font-bold shadow-lg shadow-violet-500/20">
              K
            </span>
            <span className="text-base font-semibold tracking-wide">Kayvin</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  location.pathname === item.path ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-violet-400 via-indigo-400 to-sky-400"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/254142199601?text=Hello%20Kayvin"
              target="_blank"
              rel="noreferrer"
              className="hidden xl:inline-flex items-center rounded-full border border-white/10 bg-violet-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/15 transition hover:-translate-y-0.5 hover:bg-violet-400"
            >
              Let's Talk
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-950/80 text-white shadow-lg shadow-slate-950/20 transition hover:bg-slate-900"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </motion.nav>
  )
}

export default Navbar