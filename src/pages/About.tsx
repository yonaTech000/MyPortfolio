import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Code, Database, Globe, Users } from 'lucide-react'
import SectionTitle from '../components/common/SectionTitle'
import { generateSEO } from '../utils/seo'

const skills = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'React, TypeScript, Next.js, Tailwind CSS, Flutter',
  },
  {
    icon: Database,
    title: 'Backend & Systems',
    description: 'Node.js, Python, Java, C#, PostgreSQL, MongoDB',
  },
  {
    icon: Globe,
    title: 'Cybersecurity',
    description: 'Secure architecture, threat modeling, access control',
  },
  {
    icon: Users,
    title: 'Mobile Development',
    description: 'Flutter cross-platform apps and responsive UX',
  },
]

function About() {
  const seo = generateSEO({
    title: 'About - Kayvin',
    description: 'Learn more about Kayvin, a passionate software developer with expertise in modern web technologies.',
    url: 'https://kayvin.dev/about',
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

      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="About Me"
            subtitle="Passionate developer crafting digital experiences"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
                <p className="text-muted-foreground mb-4">
                  I'm a full-stack software developer with over 3 years of experience
                  building web applications. I specialize in modern JavaScript frameworks,
                  Python, Mobile App development, Cyber security as well as AI & ML
                  and have a passion for creating user-friendly, scalable solutions.
                </p>
                <p className="text-muted-foreground mb-4">
                  When I'm not coding, you can find me exploring new technologies,
                  contributing to open-source projects, or sharing knowledge with the
                  developer community.
                </p>
                <p className="text-muted-foreground">
                  I believe in writing clean, maintainable code and staying up-to-date
                  with the latest industry and security trends and best practices.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-2xl overflow-hidden">
                  <img
                    src="/img/projectmanager.png"
                    alt="Project manager dashboard preview"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">What I Do</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg border bg-card hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <skill.icon size={24} className="text-primary mr-3" />
                    <h4 className="text-lg font-semibold">{skill.title}</h4>
                  </div>
                  <p className="text-muted-foreground">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default About