import React, { useState } from 'react';
import { GalleryImage } from '../../data/gallery';
import GalleryCard from './GalleryCard';
import LightboxModal from './LightboxModal';

interface GalleryGridProps {
  images: GalleryImage[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((img, idx) => (
          <GalleryCard key={img.src} image={img} onClick={() => setSelected(idx)} />
        ))}
      </div>
      {selected !== null && (
        <LightboxModal
          image={images[selected]}
          onClose={() => setSelected(null)}
          onPrev={() => setSelected((prev) => (prev! > 0 ? prev! - 1 : images.length - 1))}
          onNext={() => setSelected((prev) => (prev! < images.length - 1 ? prev! + 1 : 0))}
        />
      )}
    </section>
  );
};

export default GalleryGrid;
