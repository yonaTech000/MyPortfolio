import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import Button from '../components/ui/Button'
import { generateSEO } from '../utils/seo'

function NotFound() {
  const seo = generateSEO({
    title: 'Page Not Found - Kayvin',
    description: 'The page you are looking for does not exist.',
    url: 'https://kayvin.dev/404',
  })

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/">
              <Button size="lg">
                <Home size={16} className="mr-2" />
                Go Home
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={16} className="mr-2" />
              Go Back
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default NotFound