import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SocialLinks from './SocialLinks'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-slate-950/95 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-sky-400 text-white">K</span>
              <span className="font-semibold">Kayvin</span>
            </div>
            <p className="max-w-xl text-slate-400">
              A premium developer portfolio for modern web products, combining strong technical craftsmanship with polished visual design.
            </p>
            <div className="flex items-center gap-4">
              <SocialLinks />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-sm uppercase tracking-[0.3em] text-slate-400">Quick links</h4>
              <ul className="mt-5 space-y-3 text-sm">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Skills', href: '/skills' },
                  { label: 'Projects', href: '/projects' },
                  { label: 'Experience', href: '/experience' },
                  { label: 'Contact', href: '/contact' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} className="text-slate-300 transition hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 min-w-0">
              <h4 className="text-sm uppercase tracking-[0.3em] text-slate-400">Contact</h4>
              <p className="mt-5 text-sm break-words whitespace-normal text-slate-300">yonatechnologies.ltd@gmail.com</p>
              <p className="mt-2 text-sm break-words whitespace-normal text-slate-300">+254 716 194 441</p>
              <p className="mt-2 text-sm break-words whitespace-normal text-slate-300">Nairobi, Kenya</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © {currentYear} Kayvin. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer