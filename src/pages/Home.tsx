import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Download } from 'lucide-react'
import AnimatedBackground from '../components/common/AnimatedBackground'
import Button from '../components/ui/Button'

import { fadeInUp, staggerContainer } from '../utils/animations'
import { generateSEO } from '../utils/seo'

function Home() {
  const seo = generateSEO({
    title: 'Dev-Kayvin - Software Developer',
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

      <div className="relative min-h-screen flex items-center justify-center pt-24">
        <AnimatedBackground />

        <div className="absolute inset-0 opacity-40 dark:opacity-25">
          <img
            src="/img/bg.png"
            alt="MECYBER live background design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="flex flex-col items-center text-center">
              <div className="flex-shrink-0 mb-6">
                <div
                  className="relative w-32 h-32 sm:w-44 sm:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden border border-white/35 bg-white/5 shadow-[0_0_60px_rgba(59,130,246,0.28)] ring-1 ring-inset ring-white/10"
                  aria-label="MECYBER avatar"
                >
                  {/* outer glow ring */}
                  <div className="pointer-events-none absolute inset-0 rounded-full animate-border-glow motion-reduce:animate-none" />

                  <img
                    src="/img/mecyber.png"
                    alt="MECYBER avatar"
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                    onError={(e) => {
                      const img = e.currentTarget
                      img.src = '/img/MECYBER.png'
                    }}
                  />

                  {/* subtle cyber gradient highlight */}
                  <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.35),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.35),transparent_50%)]" />
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 text-white">
                Dev Kayvin
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-200/80 mb-6">
                Full-Stack Software Developer and Cyber Security Expert
              </h2>
              <p className="text-lg md:text-xl text-slate-200/75 max-w-2xl mb-8">
                I create exceptional digital experiences with modern web and mobile app technologies.
                Passionate about clean code, user experience, security and scalable solutions.
              </p>
            </div>
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
              href="/cv.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-11 px-8"
            >
              <Download size={16} className="mr-2" />
              View My CV
            </a>
          </motion.div>


        </motion.div>
      </div>
    </>
  )
}

export default Home

