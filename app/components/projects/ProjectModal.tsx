'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FALLBACK_PROJECT_IMAGE, PROJECTS_CONTENT } from '@/lib/constants';

type Project = typeof PROJECTS_CONTENT.categories[number]['projects'][number];

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project?.id]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentImageIndex, project]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  // Handle both old structure (image: string) and new structure (images: array)
  const images: Array<{ image: string | { src: string; alt: string } }> = 
    'images' in project && Array.isArray(project.images) && project.images.length > 0 
      ? project.images 
      : [{ image: 'image' in project ? project.image : FALLBACK_PROJECT_IMAGE.src }];
  const hasMultipleImages = images.length > 1;

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={handleBackdropClick}
    >
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl rounded-lg bg-white shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg transition-all hover:bg-white hover:text-gray-900 hover:shadow-xl"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="p-6 md:p-8">
          {/* Project Info Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">{project.title}</h2>
            {'location' in project && (project as any).location && (
              <p className="mt-2 text-sm text-gray-600 md:text-base">{(project as any).location}</p>
            )}
          </div>

          {/* Image Carousel */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={typeof images[currentImageIndex].image === 'string' ? images[currentImageIndex].image : images[currentImageIndex].image.src}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Navigation Arrows - Only show if multiple images */}
            {hasMultipleImages && (
              <>
                {/* Previous Button */}
                <button
                  onClick={handlePrevious}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition-all hover:bg-white hover:shadow-xl md:left-4 md:p-3"
                  aria-label="Previous image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="h-5 w-5 text-gray-700 md:h-6 md:w-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition-all hover:bg-white hover:shadow-xl md:right-4 md:p-3"
                  aria-label="Next image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="h-5 w-5 text-gray-700 md:h-6 md:w-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </>
            )}

            {/* Dot Indicators - Only show if multiple images */}
            {hasMultipleImages && (
              <div className="mt-4 flex justify-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'w-8 bg-[#E54B0D]'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Image Counter */}
          {hasMultipleImages && (
            <p className="mt-4 text-center text-sm text-gray-500">
              {currentImageIndex + 1} / {images.length}
            </p>
          )}

          {/* Project Scope/Description */}
          {'scope' in project && (project as any).scope && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900">Project Scope</h3>
              <p className="mt-2 text-gray-600">{(project as any).scope}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
