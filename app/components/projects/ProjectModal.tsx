'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, MapPin, X } from 'lucide-react';
import type { Project } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const images = project?.images ?? [];
  const hasMultipleImages = images.length > 1;

  const handleNext = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % Math.max(images.length, 1));
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % Math.max(images.length, 1));
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') handlePrevious();
      else if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose, handleNext, handlePrevious]);

  // Prevent body scroll while open and move focus into the dialog
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      className="animate-in fade-in fixed inset-0 z-[70] flex items-stretch justify-center bg-ink/90 backdrop-blur-sm duration-300 md:items-center md:p-6"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className={cn(
          'animate-in fade-in slide-in-from-bottom-4 relative grid w-full overflow-y-auto bg-ink-2 text-white duration-500 md:max-h-[90dvh]',
          images.length > 0 ? 'max-w-7xl lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]' : 'max-w-2xl self-center'
        )}
      >
        {/* Close */}
        <button
          ref={closeRef}
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center bg-ink/70 text-white backdrop-blur transition-colors hover:bg-remington-orange"
          aria-label="Close project"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Media */}
        {images.length > 0 && (
          <div className="relative bg-ink">
              <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-full lg:min-h-[34rem]">
                {images.map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt={`${project.title} — photo ${i + 1} of ${images.length}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority={i === 0}
                    className={cn(
                      'object-cover transition-opacity duration-500',
                      i === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                ))}
              </div>

              {hasMultipleImages && (
                <>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <button
                      onClick={handlePrevious}
                      className="flex h-11 w-11 items-center justify-center bg-ink/70 backdrop-blur transition-colors hover:bg-remington-orange"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="flex h-11 w-11 items-center justify-center bg-ink/70 backdrop-blur transition-colors hover:bg-remington-orange"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                  <span className="label-mono tabular absolute bottom-7 right-4 bg-ink/70 px-2 py-1 backdrop-blur">
                    {String(currentImageIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                  </span>
                </>
              )}
          </div>
        )}

        {/* Details */}
        <div className="flex flex-col p-6 md:p-10">
          <p className="label-mono mb-5 text-remington-orange">{project.category}</p>
          <h2 id="project-modal-title" className="font-display text-5xl font-semibold uppercase leading-[0.9] lg:text-6xl">
            {project.title}
          </h2>
          {project.location && (
            <p className="mt-5 flex items-start gap-2 text-sm text-white/65">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-remington-orange" />
              {project.location}
            </p>
          )}

          {project.scope && (
            <div className="mt-8 border-t border-white/10 pt-8">
              <h3 className="label-mono mb-3 text-white/45">Scope of work</h3>
              <p className="leading-relaxed text-white/80">{project.scope}</p>
            </div>
          )}

          {/* Thumbnails */}
          {hasMultipleImages && (
            <div className="mt-auto grid grid-cols-4 gap-2 pt-8">
              {images.map((src, index) => (
                <button
                  key={src}
                  onClick={() => setCurrentImageIndex(index)}
                  className={cn(
                    'relative aspect-square overflow-hidden ring-2 ring-offset-2 ring-offset-ink-2 transition-all',
                    index === currentImageIndex ? 'ring-remington-orange' : 'opacity-50 ring-transparent hover:opacity-100'
                  )}
                  aria-label={`Show image ${index + 1}`}
                  aria-current={index === currentImageIndex}
                >
                  <Image src={src} alt="" fill sizes="96px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
