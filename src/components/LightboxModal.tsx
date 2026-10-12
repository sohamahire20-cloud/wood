import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ArchitecturalImage } from './ArchitecturalImage';

interface LightboxModalProps {
  images: { url: string; caption: string; aspect?: string }[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
  projectTitle?: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  images,
  currentIndex,
  onClose,
  onNavigate,
  projectTitle,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % images.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, images.length, onClose, onNavigate]);

  if (!images.length || currentIndex < 0) return null;
  const active = images[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={projectTitle ? `${projectTitle} gallery` : 'Image gallery'}
      className="fixed inset-0 z-50 bg-[#26231F]/95 flex flex-col justify-between p-4 md:p-8 text-[#F5F1E9]"
    >
      <div className="flex items-center justify-between border-b border-[#F5F1E9]/15 pb-4">
        <div className="text-xs md:text-sm text-[#D9CDBD] flex items-center gap-2">
          {projectTitle && <span className="font-medium text-[#F5F1E9]">{projectTitle}</span>}
          {projectTitle && <span aria-hidden="true">·</span>}
          <span className="font-mono-tabular">
            Image {currentIndex + 1} of {images.length}
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-[#F5F1E9] border border-[#F5F1E9]/25 hover:bg-[#F5F1E9]/10 transition-colors cursor-pointer"
        >
          <span>Close</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        {images.length > 1 && (
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
            className="absolute left-2 md:left-6 z-10 p-3 bg-[#26231F]/80 border border-[#F5F1E9]/20 text-[#F5F1E9] hover:bg-[#61432F] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        <div className="max-w-5xl w-full max-h-[72vh] flex flex-col items-center">
          <ArchitecturalImage
            src={active.url}
            alt={active.caption}
            aspectRatioClass="aspect-[16/10] w-full max-h-[65vh]"
            className="w-full h-full object-contain bg-[#1C1916]"
          />
        </div>

        {images.length > 1 && (
          <button
            type="button"
            aria-label="Next image"
            onClick={() => onNavigate((currentIndex + 1) % images.length)}
            className="absolute right-2 md:right-6 z-10 p-3 bg-[#26231F]/80 border border-[#F5F1E9]/20 text-[#F5F1E9] hover:bg-[#61432F] transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="border-t border-[#F5F1E9]/15 pt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-sm text-[#D9CDBD] max-w-3xl">{active.caption}</p>
        <div className="flex items-center gap-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onNavigate(idx)}
              aria-label={`View image ${idx + 1}`}
              className={`w-8 h-1.5 transition-colors cursor-pointer ${
                idx === currentIndex ? 'bg-[#F5F1E9]' : 'bg-[#F5F1E9]/25 hover:bg-[#F5F1E9]/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
