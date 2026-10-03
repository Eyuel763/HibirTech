'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectImage {
  src: string;
  alt: string;
}

const PROJECT_IMAGES: ProjectImage[] = [
  { src: '/images/projects/image1.jpg', alt: 'Students assembling a robotics project in the STEM lab' },
  { src: '/images/projects/image2.jpg', alt: 'Young innovators programming micro-controllers' },
  { src: '/images/projects/image3.jpg', alt: 'Team collaboration on an IoT hardware build' },
  { src: '/images/projects/image4.jpg', alt: 'Student presenting their capstone project' },
  { src: '/images/projects/image5.jpg', alt: 'Hands-on circuit design workshop session' },
  { src: '/images/projects/image6.jpg', alt: 'STEM Academy cohort building sensor systems' },
];

const AUTO_PLAY_INTERVAL = 5000;

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % PROJECT_IMAGES.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + PROJECT_IMAGES.length) % PROJECT_IMAGES.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Auto-advance unless hovered
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(goToNext, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isHovered, goToNext]);

  return (
    <div
      className="relative w-full max-w-5xl mx-auto group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Image Display */}
      <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-xl bg-secondary/5">
        {PROJECT_IMAGES.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-all duration-700 ease-in-out"
            style={{
              opacity: index === currentIndex ? 1 : 0,
              transform: index === currentIndex ? 'scale(1)' : 'scale(1.05)',
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Gradient Overlay at Bottom */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

        {/* Image Caption */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <p className="text-white text-sm sm:text-base font-medium drop-shadow-lg transition-opacity duration-500">
            {PROJECT_IMAGES[currentIndex].alt}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-secondary hover:bg-white hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-secondary hover:bg-white hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="flex items-center justify-center gap-2.5 mt-5">
        {PROJECT_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 h-3 bg-primary'
                : 'w-3 h-3 bg-secondary/20 hover:bg-secondary/40'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
