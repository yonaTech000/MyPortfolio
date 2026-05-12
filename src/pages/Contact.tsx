import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Mail, MapPin, Phone } from 'lucide-react'
import ContactForm from '../components/common/ContactForm'
import SectionTitle from '../components/common/SectionTitle'
import SocialLinks from '../components/common/SocialLinks'
import { generateSEO } from '../utils/seo'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'yonatechnologies.ltd@gmail.com',
    href: 'mailto:yonatechnologies.ltd@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+254 716 194 441',
    href: 'tel:+254716194441',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kenya,Nairobi',
    href: '#',
  },
]

function Contact() {
  const seo = generateSEO({
    title: 'Contact - Kayvin',
    description: 'Get in touch with Kayvin for collaboration opportunities, project inquiries, or just to say hello.',
    url: 'https://kayvin.dev/contact',
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
            title="Get In Touch"
            subtitle="Let's work together on your next project"
          />

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg mr-4">
                      <info.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <SocialLinks />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact