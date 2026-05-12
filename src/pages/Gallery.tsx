import React from 'react';
import { galleryImages } from '../data/gallery';
import GalleryGrid from '../components/common/GalleryGrid';

const Gallery: React.FC = () => (
  <main className="max-w-7xl mx-auto px-4 py-16">
    <div className="text-center mb-12">
      <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">
        Featured Expertise
      </p>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500">
        Flagship one-app Showcase
      </h1>
      <p className="mx-auto max-w-3xl text-base md:text-lg text-muted-foreground">
        A Kayvin portfolio highlight built around enterprise cybersecurity, telecom systems, and cross-platform delivery. This single showcase reflects deep expertise in Python, Java, C#, mobile app development, and security-first architecture.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-8">
      <GalleryGrid images={galleryImages} />
    </div>

    <div className="mt-12 bg-gradient-to-r from-slate-900/80 via-slate-800/80 to-slate-900/80 border border-white/10 rounded-3xl p-8 text-slate-100 shadow-2xl">
      <h2 className="text-2xl font-semibold mb-4">What this showcase represents</h2>
      <ul className="space-y-3 text-sm md:text-base leading-7">
        <li>• Enterprise-class cybersecurity tooling with real-time monitoring and telemetry.</li>
        <li>• Backend expertise in Python, Java, and C# for secure system orchestration.</li>
        <li>• Modern mobile app delivery crafted for performance, security, and user trust.</li>
        <li>• Clean UI driven by polished dashboard experiences and intuitive workflows.</li>
        <li>• Production-ready architecture built for scale, resilience, and high availability.</li>
        <li>• Traditional web maintenance(Html, css and php), deployment and development.</li>
        <li>• Optimized AI & Machine Learning technology in softwares to maximize efficiency, 
          as well as security measures. </li>
      </ul>
    </div>
  </main>
);

export default Gallery;
