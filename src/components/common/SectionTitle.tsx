import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionTitleProps {
  title: string
  subtitle?: string
  children?: ReactNode
}

function SectionTitle({ title, subtitle, children }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </motion.div>
  )
}

export default SectionTitle