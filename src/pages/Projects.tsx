import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import ProjectCard from '../components/common/ProjectCard'
import SectionTitle from '../components/common/SectionTitle'
import { generateSEO } from '../utils/seo'

interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  githubUrl: string
  liveUrl: string
  image: string
  featured: boolean
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    // In a real app, you might fetch from an API
    // For now, we'll import from the JSON file
    import('../data/projects.json').then(data => setProjects(data.default))
  }, [])

  const seo = generateSEO({
    title: 'Projects - Kayvin',
    description: 'Explore my portfolio of web development projects including FarmShop, TaskMaster, and CyberSecure.',
    url: 'https://kayvin.dev/projects',
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="My Projects"
            subtitle="A showcase of my recent work and technical expertise"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </motion.div>

          {projects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading projects...</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Projects