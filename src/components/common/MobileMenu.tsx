import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' },
]

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/70 z-40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-72 bg-slate-950/95 border-l border-white/10 p-6 shadow-2xl shadow-slate-950/40 z-50"
          >
            <div className="flex items-center justify-between mb-6">
              <p className="text-lg font-semibold text-white">Navigation</p>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 text-white transition hover:bg-white/10"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <nav>
              <ul className="space-y-4">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base font-medium text-white transition hover:bg-white/10"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mt-8">
              <a
                href="https://wa.me/254142199601?text=Hello%20Kayvin"
                target="_blank"
                rel="noreferrer"
                onClick={onClose}
                className="inline-flex w-full items-center justify-center rounded-full bg-violet-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-400"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu