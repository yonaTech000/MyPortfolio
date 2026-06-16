import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Code, LayoutGrid, Server, Database } from 'lucide-react'
import SectionTitle from '../components/common/SectionTitle'
import { generateSEO } from '../utils/seo'

const skillGroups = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Build beautiful, responsive interfaces using React, Next.js, TypeScript and Tailwind CSS.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    description: 'Design RESTful and serverless APIs with Node.js, Express, and cloud-first architectures.',
    skills: ['Node.js', 'Express', 'Firebase', 'Serverless', 'Supabase'],
  },
  {
    icon: Database,
    title: 'Data & Infrastructure',
    description: 'Create scalable data models, reliable storage, and secure database workflows.',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'GraphQL'],
  },
  {
    icon: LayoutGrid,
    title: 'Product & UX',
    description: 'Turn product strategy into polished experiences with strong usability and accessibility.',
    skills: ['Design systems', 'Accessibility', 'Interaction design', 'Mobile-first UI'],
  },
]

function Skills() {
  const seo = generateSEO({
    title: 'Skills - Kayvin',
    description: 'Discover the technical strengths and tools Kayvin uses to build premium digital products.',
    url: 'https://kayvin.dev/skills',
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
            title="Skills"
            subtitle="Core capabilities for building modern web products."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-panel rounded-[2rem] border border-white/10 p-8 shadow-[0_40px_100px_rgba(0,0,0,0.25)]"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-200">
                  <group.icon size={26} />
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-white">{group.title}</h2>
                <p className="mt-4 text-slate-400">{group.description}</p>
                <div className="mt-6 grid gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
