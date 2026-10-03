'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  videoSrc: string;
  posterSrc?: string;
  quote: string;
}

// Placeholder testimonials — replace videoSrc with actual URLs when available
const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Abenezer K.',
    role: 'Parent of Junior Innovators student',
    videoSrc: '/videos/testimonials/testimonial1.mp4',
    quote: 'My son went from playing games on his tablet to building his own maze game in Scratch. The transformation has been incredible.',
  },
  {
    id: 'test-2',
    name: 'Meron T.',
    role: 'High School Student, IoT Lab',
    videoSrc: '/videos/testimonials/testimonial2.mp4',
    quote: 'I never thought I could program a real micro-controller. Now I can stream sensor data to a live dashboard!',
  },
  {
    id: 'test-3',
    name: 'Sara D.',
    role: 'Parent of two Academy students',
    videoSrc: '/videos/testimonials/testimonial3.mp4',
    quote: 'Hibir STEM Academy gave my daughters the confidence to pursue engineering. They talk about circuits and code at the dinner table now.',
  },
];

const AUTO_PLAY_INTERVAL = 8000;

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    setIsPlaying(false);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    setIsPlaying(false);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  }, []);

  // Auto-advance when not hovered and not playing a video
  useEffect(() => {
    if (isHovered || isPlaying) return;
    const timer = setInterval(goToNext, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isHovered, isPlaying, goToNext]);

  const currentTestimonial = TESTIMONIALS[currentIndex];

  const handlePlay = () => {
    setIsPlaying(true);
    const video = document.getElementById(`testimonial-video-${currentIndex}`) as HTMLVideoElement;
    if (video) {
      video.play();
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
    const video = document.getElementById(`testimonial-video-${currentIndex}`) as HTMLVideoElement;
    if (video) {
      video.pause();
    }
  };

  return (
    <div
      className="relative w-full max-w-5xl mx-auto group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Video Side */}
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-secondary">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="absolute inset-0 transition-all duration-700 ease-in-out"
              style={{
                opacity: index === currentIndex ? 1 : 0,
                pointerEvents: index === currentIndex ? 'auto' : 'none',
              }}
            >
              <video
                id={`testimonial-video-${index}`}
                src={testimonial.videoSrc}
                poster={testimonial.posterSrc}
                className="w-full h-full object-cover"
                preload="metadata"
                playsInline
                onEnded={() => {
                  setIsPlaying(false);
                  goToNext();
                }}
              />
              {/* Play/Pause Overlay */}
              {index === currentIndex && (
                <div className="absolute inset-0 flex items-center justify-center">
                  {!isPlaying ? (
                    <button
                      onClick={handlePlay}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center text-white shadow-2xl hover:bg-primary hover:scale-110 transition-all duration-300"
                      aria-label="Play testimonial video"
                    >
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1" />
                    </button>
                  ) : (
                    <button
                      onClick={handlePause}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white shadow-2xl opacity-0 group-hover:opacity-100 hover:bg-black/60 hover:scale-110 transition-all duration-300"
                      aria-label="Pause testimonial video"
                    >
                      <Pause className="w-7 h-7 sm:w-8 sm:h-8" />
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quote/Info Side */}
        <div className="flex flex-col gap-6 py-4">
          <Quote className="w-10 h-10 text-primary/30" />
          <blockquote className="text-lg sm:text-xl font-medium text-secondary leading-relaxed italic transition-opacity duration-500">
            &ldquo;{currentTestimonial.quote}&rdquo;
          </blockquote>
          <div className="flex flex-col gap-1">
            <span className="text-base font-bold text-secondary">{currentTestimonial.name}</span>
            <span className="text-sm text-muted">{currentTestimonial.role}</span>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-0 lg:-left-5 top-[25%] lg:top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-secondary hover:bg-white hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 lg:-right-5 top-[25%] lg:top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-secondary hover:bg-white hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="flex items-center justify-center gap-2.5 mt-8">
        {TESTIMONIALS.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 h-3 bg-primary'
                : 'w-3 h-3 bg-secondary/20 hover:bg-secondary/40'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
