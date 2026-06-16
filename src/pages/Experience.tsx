import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Briefcase, CalendarDays } from 'lucide-react'
import SectionTitle from '../components/common/SectionTitle'
import { generateSEO } from '../utils/seo'

const experienceItems = [
  {
    title: 'Full Stack Developer',
    company: 'Yona Technologies',
    duration: '2023 - Present',
    description: 'Building full-featured applications with React, TypeScript, Node.js, and cloud infrastructure for scalable product experiences.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Frontend Engineer',
    company: 'Nice Digital City',
    duration: '2022 - 2023',
    description: 'Delivered responsive web interfaces, dashboards, and visual storytelling for enterprise workflows and SaaS products.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Figma'],
  },
  {
    title: 'Cybersecurity Consultant',
    company: 'Safcom',
    duration: '2021 - 2022',
    description: 'Designed secure dashboards and backend workflows, improving operational trust and reliability for internal systems.',
    tech: ['Vue.js', 'Python', 'Django', 'Security'],
  },
]

function Experience() {
  const seo = generateSEO({
    title: 'Experience - Kayvin',
    description: 'Explore Kayvin’s professional roles, technical leadership, and product delivery experience.',
    url: 'https://kayvin.dev/experience',
  })

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.url} />
      </Helmet>

      <div className="min-h-screen pt-24 pb-16 bg-[#050816] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Experience"
            subtitle="Career milestones and impact across product, engineering, and security." 
          />

          <div className="relative mx-auto mt-12 max-w-4xl">
            <div className="hidden md:block absolute left-6 top-0 h-full w-px bg-gradient-to-b from-violet-500 to-sky-400" />
            <div className="space-y-10">
              {experienceItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_40px_100px_rgba(0,0,0,0.25)]"
                >
                  <div className="absolute left-0 top-10 flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/10 ring-1 ring-violet-500/30">
                    <Briefcase size={18} className="text-violet-200" />
                  </div>
                  <div className="ml-14 space-y-4 md:ml-20">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                      <span>{item.company}</span>
                      <span className="rounded-full bg-white/5 px-3 py-1">{item.duration}</span>
                    </div>
                    <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
                    <p className="text-slate-400 leading-7">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <span key={tech} className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-8 text-slate-300">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-violet-200/80">Career path</p>
                <h3 className="mt-3 text-3xl font-semibold text-white">Focused delivery for ambitious products.</h3>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-5 py-3 text-sm text-white">
                <CalendarDays size={18} />
                Ready for new collaborations and product growth projects.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience
