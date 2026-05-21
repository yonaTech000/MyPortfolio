import React from 'react'
import { motion } from 'framer-motion'
// Added Facebook here, and kept Twitter for your X link
import { Github, Facebook, Linkedin, Mail, Phone, Twitter } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/yonaTech000/',
    color: 'hover:text-gray-900 dark:hover:text-gray-100',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/profile.php?id=61575283542717',
    color: 'hover:text-blue-600',
  },
  {
    name: 'X',
    icon: Twitter,
    url: 'https://x.com/Kayvin_Dev254',
    color: 'hover:text-blue-400',
  },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/kayvin',
      color: 'hover:text-blue-700',
    },
  {
    name: 'WhatsApp',
    icon: Phone,
    url: 'https://wa.me/254716194441',
    color: 'hover:text-green-500',
  },
  {
    name: 'TikTok',
    // Updated props to accept 'size' so it matches how Lucide components work below
    icon: ({ size = 20, ...props }: { size?: number; } & React.SVGAttributes<SVGSVGElement>) => (
      <svg 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        width={size} 
        height={size} 
        {...props}
      >
        <path d="M12.75 2h3.5a.75.75 0 0 1 .75.75v.5a4.25 4.25 0 0 0 4.25 4.25h.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-1.7a7.25 7.25 0 1 1-7.25-7.25V2.75A.75.75 0 0 1 12.75 2zm-2.25 12.5a2.25 2.25 0 1 0 2.25 2.25V7.5h-1.5v9.25a.75.75 0 1 1-1.5 0z" />
      </svg>
    ),
    url: 'https://tiktok.com/@kayvin',
    color: 'hover:text-pink-500',
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:yonatechnologies.ltd@gmail.com',
    color: 'hover:text-red-500',
  },
]

export default function SocialLinks() {
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
