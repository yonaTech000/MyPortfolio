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
      url: 'https://www.linkedin.com/in/kelvin-mburu-8205b0410/ ',
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
    icon: ({ size = 20, ...props }: { size?: number } & React.SVGAttributes<SVGSVGElement>) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M12 3v10.5A4.5 4.5 0 1 0 16.5 18V7h2.5V4h-2.5V3h-5z" fill="currentColor" />
        <circle cx="7" cy="17" r="2.5" fill="currentColor" />
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
