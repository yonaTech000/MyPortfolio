import { motion } from 'framer-motion'
import SocialLinks from './SocialLinks'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center space-x-6 mb-6">
            <SocialLinks />
          </div>
          <p className="text-muted-foreground">
            © {currentYear} Kayvin. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer