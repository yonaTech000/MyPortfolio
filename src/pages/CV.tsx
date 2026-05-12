import { Helmet } from 'react-helmet-async'

export default function CVPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-8">
      <Helmet>
        <title>My CV - Kayvin</title>
      </Helmet>
      <img src="/img/safcom.png" alt="Safcom Logo" className="w-32 mb-6" />
      <h1 className="text-3xl font-bold mb-4">My CV</h1>
      <iframe
        src="/resume.pdf"
        title="CV PDF"
        className="w-full max-w-2xl h-[70vh] border rounded mb-6"
      />
      <a
        href="/resume.pdf"
        download
        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-11 px-8"
      >
        Download My CV
      </a>
    </div>
  )
}
