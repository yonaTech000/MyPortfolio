export interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
}

export const defaultSEO: SEOProps = {
  title: 'Dev Kayvin - Software Developer',
  description: 'Professional portfolio showcasing modern web development projects and expertise in React, TypeScript, and full-stack development.',
  keywords: 'software developer, portfolio, React, TypeScript, web development, full-stack',
  image: '/og-image.png',
  url: 'https://kayvin.dev',
}

export const generateSEO = (props: Partial<SEOProps> = {}): SEOProps => {
  return { ...defaultSEO, ...props }
}