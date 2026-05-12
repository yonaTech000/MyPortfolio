import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/yonaTech000/',
    color: 'hover:text-gray-900 dark:hover:text-gray-100',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/kayvin',
    color: 'hover:text-blue-600',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/kayvin',
    color: 'hover:text-blue-400',
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:yonatechnologies.ltd@gmail.com',
    color: 'hover:text-red-500',
  },
]

function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors ${link.color}`}
          aria-label={link.name}
        >
          <link.icon size={20} />
        </motion.a>
      ))}
    </div>
  )
}

export default SocialLinks