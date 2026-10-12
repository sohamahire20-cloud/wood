import React, { useState } from 'react';
import { Layers } from 'lucide-react';

interface ArchitecturalImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatioClass?: string;
  caption?: string;
  provenanceTag?: string;
  onClick?: () => void;
}

export const ArchitecturalImage: React.FC<ArchitecturalImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = '',
  aspectRatioClass = 'aspect-[4/3]',
  caption,
  provenanceTag,
  onClick,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className={`group relative overflow-hidden bg-[#E5DEC9] ${aspectRatioClass} ${containerClassName}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          onClick={onClick}
          className={`${className} transition-transform duration-200 ease-out ${
            onClick ? 'cursor-pointer group-hover:scale-[1.015]' : ''
          }`}
        />
      ) : (
        <div
          onClick={onClick}
          className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#EAE3D5] via-[#D9CDBD] to-[#C8B9A6] text-[#26231F]"
        >
          <Layers className="w-8 h-8 text-[#61432F] mb-3 opacity-80" />
          <p className="font-serif-display text-lg font-medium text-[#26231F] max-w-xs">{alt}</p>
          <span className="text-xs text-[#61432F] mt-1">Wood N Work Architectural Archive</span>
        </div>
      )}

      {provenanceTag && (
        <div className="absolute bottom-3 left-3 bg-[#26231F]/80 backdrop-blur-xs px-2.5 py-1 text-[11px] tracking-wide text-[#F5F1E9]">
          {provenanceTag}
        </div>
      )}

      {caption && (
        <figcaption className="sr-only">{caption}</figcaption>
      )}
    </figure>
  );
};
