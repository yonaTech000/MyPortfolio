import React from 'react';
import { GalleryImage } from '../../data/gallery';
import { motion } from 'framer-motion';

const highlightIconMap: Record<string, string> = {
  Python: '🐍',
  Flutter: '🦋',
  Cybersecurity: '🛡️',
};

interface GalleryCardProps {
  image: GalleryImage;
  onClick: () => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ image, onClick }) => (
  <motion.div
    className="relative group rounded-2xl overflow-hidden shadow-xl bg-white/10 dark:bg-black/30 backdrop-blur-lg border border-white/20 dark:border-white/10 transition-all duration-300 cursor-pointer"
    whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
    onClick={onClick}
    tabIndex={0}
    role="button"
    aria-label={`View ${image.title}`}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: 'spring', stiffness: 120, damping: 18 }}
  >
    <div className="aspect-[4/3] w-full h-48 md:h-56 lg:h-64 relative">
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="object-cover w-full h-full rounded-2xl transition-transform duration-500 ease-out shadow-lg group-hover:scale-105 group-hover:brightness-50 group-hover:saturate-70"
        style={{ filter: 'brightness(0.98) saturate(1.1)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
          {image.highlightIcons?.map((name) => (
            <span
              key={name}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs text-white/85 transition-colors duration-300 group-hover:bg-white/20 group-hover:border-white/30 group-hover:text-white"
            >
              <span className="transition-transform duration-300 group-hover:scale-110">{highlightIconMap[name] ?? '•'}</span>
              {name}
            </span>
          ))}
        </div>
        <div className="text-xl font-semibold text-white drop-shadow mb-2 animate-gradient-border transition-all duration-300 group-hover:brightness-110 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]">
          {image.title}
        </div>
        <p className="text-sm leading-6 text-white/90 mb-3 max-w-[92%] transition-all duration-300 group-hover:text-white group-hover:opacity-100 group-hover:brightness-110">
          {image.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {image.tags.map((tag: string) => (
            <span
              key={tag}
              className="bg-white/20 text-xs text-white px-2 py-0.5 rounded-full border border-white/30 backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/30 group-hover:border-white/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-pink-500 group-hover:to-blue-500 animate-border-glow" />
    </div>
  </motion.div>
);

export default GalleryCard;
