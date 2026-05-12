import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Download } from 'lucide-react'
import AnimatedBackground from '../components/common/AnimatedBackground'
import Button from '../components/ui/Button'
import SocialLinks from '../components/common/SocialLinks'
import { fadeInUp, staggerContainer } from '../utils/animations'
import { generateSEO } from '../utils/seo'

function Home() {
  const seo = generateSEO({
    title: 'Kayvin - Software Developer',
    description: 'Professional software developer specializing in modern web technologies, React, TypeScript, and full-stack development.',
  })

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        <meta property="og:url" content={seo.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
      </Helmet>

      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBackground />

        <div className="absolute inset-0 opacity-40 dark:opacity-25">
          <img
            src="/img/MECYBER.png"
            alt="MECYBER live background design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Kayvin
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-200/80 mb-8">
              Full-Stack Software Developer and Cyber Security Expert
            </h2>
            <p className="text-lg md:text-xl text-slate-200/75 max-w-2xl mx-auto mb-8">
              I create exceptional digital experiences with modern web and mobile app technologies.
              Passionate about clean code, user experience, security and scalable solutions.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/projects">
              <Button size="lg" className="group">
                View My Work
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/gallery">
              <Button size="lg" variant="secondary" className="group">
                Gallery
              </Button>
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-11 px-8"
            >
              <Download size={16} className="mr-2" />
              Download CV
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex justify-center">
            <SocialLinks />
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default Home