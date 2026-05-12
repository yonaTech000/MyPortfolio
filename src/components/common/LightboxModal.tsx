import React, { useEffect } from 'react';
import { GalleryImage } from '../../data/gallery';
import { motion, AnimatePresence } from 'framer-motion';

interface LightboxModalProps {
  image: GalleryImage;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const LightboxModal: React.FC<LightboxModalProps> = ({ image, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        aria-modal="true"
        role="dialog"
      >
        <motion.div
          className="relative max-w-3xl w-full mx-4 bg-white/10 dark:bg-black/40 rounded-2xl shadow-2xl overflow-hidden"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.95 }}
          onClick={e => e.stopPropagation()}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto object-contain rounded-2xl max-h-[80vh] bg-black/10"
            loading="lazy"
          />
          <div className="absolute top-4 right-4 flex gap-2">
            <button onClick={onClose} aria-label="Close" className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white shadow-lg">
              <span aria-hidden>×</span>
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col gap-2">
            <div className="text-2xl font-bold text-white drop-shadow mb-1">{image.title}</div>
            <div className="flex flex-wrap gap-2">
              {image.tags.map((tag: string) => (
                <span key={tag} className="bg-white/20 text-xs text-white px-2 py-0.5 rounded-full border border-white/30 backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button onClick={onPrev} aria-label="Previous" className="p-2 m-2 rounded-full bg-black/60 hover:bg-black/80 text-white shadow-lg">
              ‹
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button onClick={onNext} aria-label="Next" className="p-2 m-2 rounded-full bg-black/60 hover:bg-black/80 text-white shadow-lg">
              ›
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LightboxModal;
