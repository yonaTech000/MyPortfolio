import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, Sparkles } from 'lucide-react'
import AnimatedBackground from '../components/common/AnimatedBackground'
import Button from '../components/ui/Button'
import SectionTitle from '../components/common/SectionTitle'
import { generateSEO } from '../utils/seo'

function Home() {
  const seo = generateSEO({
    title: 'Kayvin | Premium Developer Portfolio',
    description:
      'Kayvin is a modern software developer building scalable, user-focused digital experiences with React, TypeScript, and web performance in mind.',
  })

  const roles = useMemo(
    () => ['Full Stack Developer', 'Frontend Engineer', 'UI/UX Enthusiast', 'Software Developer'],
    []
  )
  const [activeRole, setActiveRole] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveRole((current) => (current + 1) % roles.length)
    }, 2800)
    return () => window.clearInterval(interval)
  }, [roles.length])

  const highlights = [
    {
      title: 'Modern Development',
      description: 'Clean, performant web applications built with React, TypeScript, and Tailwind CSS.',
    },
    {
      title: 'Product Focus',
      description: 'Design-driven solutions for SaaS products, landing pages, and digital experiences.',
    },
    {
      title: 'Ready to Collaborate',
      description: 'Fast onboarding, strong communication, and on-time delivery for premium projects.',
    },
  ]

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

      <div className="relative overflow-hidden bg-[#050816] text-white min-h-screen">
        <AnimatedBackground />

        <section className="relative z-10 px-4 pt-28 pb-20 sm:px-6 lg:px-8">
          <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),transparent_36%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.18),transparent_32%)] blur-3xl" />
          <div className="relative max-w-7xl mx-auto grid gap-16 xl:grid-cols-[1.4fr_1fr] items-center">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-white/5 px-4 py-2 text-sm text-violet-100 shadow-[0_10px_50px_rgba(99,102,241,0.12)]">
                <span className="h-2 w-2 rounded-full bg-violet-500" />
                Premium Developer Portfolio
              </div>

              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Hello, I&apos;m</p>
                <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                  Kayvin
                </h1>
                <div className="flex flex-wrap items-center gap-3 text-xl text-slate-300 sm:text-2xl">
                  <span className="font-medium text-white">I am a</span>
                  <motion.span
                    key={roles[activeRole]}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-full border border-violet-500/20 bg-white/5 px-4 py-2 text-violet-100 shadow-lg shadow-violet-500/10"
                  >
                    {roles[activeRole]}
                  </motion.span>
                </div>
                <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                  I build modern, scalable, and user-focused digital products that look premium and perform beautifully.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link to="/projects" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full justify-center rounded-full bg-gradient-to-r from-violet-500 to-sky-500 text-white shadow-xl shadow-violet-500/20">
                    View Projects
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
                <a
                  href="/cv.html"
                  className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-semibold text-white transition hover:border-violet-300/30 hover:bg-white/10 sm:w-auto"
                >
                  <Download size={16} className="mr-2" />
                  Download CV
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/85 shadow-[0_40px_120px_rgba(0,0,0,0.25)]"
            >
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/img/safcom.png')" }} />
              <div className="absolute inset-0 bg-slate-950/74" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.35),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.28),transparent_28%)]" />
              <div className="relative flex min-h-[520px] flex-col justify-end p-8">
                <div className="grid gap-3 sm:grid-cols-2">
                  {['React', 'Next.js', 'TypeScript', 'Node.js'].map((tech) => (
                    <div
                      key={tech}
                      className="rounded-3xl border border-white/10 bg-white/10 px-4 py-3 text-center text-sm text-white shadow-lg shadow-slate-950/20"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative z-10 px-4 pb-24 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SectionTitle title="What I focus on" subtitle="A simple overview of my approach and values." />
            <div className="grid gap-6 md:grid-cols-3">
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="glass-panel rounded-[2rem] p-8"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-200">
                    <Sparkles size={24} />
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold text-white">{item.title}</h2>
                  <p className="mt-4 text-slate-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
