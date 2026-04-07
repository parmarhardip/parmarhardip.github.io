import { useState, useEffect } from 'react';
import type { Testimonial } from '../../types/content';
import { Icon } from '../ui/Icon';

interface TestimonialsProps {
  data: Testimonial[];
}

export const Testimonials = ({ data }: TestimonialsProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Create slides based on screen size
  const slides = [];
  const itemsPerSlide = isMobile ? 1 : 2;

  for (let i = 0; i < data.length; i += itemsPerSlide) {
    slides.push(data.slice(i, i + itemsPerSlide));
  }

  // Auto-slide functionality with responsive timing and pause capability
  useEffect(() => {
    if (isPaused) return;

    // Responsive timing: Mobile gets more time to read
    const getSlideInterval = () => {
      if (window.innerWidth < 768) return 8000; // 8 seconds on mobile
      if (window.innerWidth < 1024) return 7000; // 7 seconds on tablet
      return 5000; // 5 seconds on desktop
    };

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, getSlideInterval());

    return () => clearInterval(interval);
  }, [slides.length, isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-28 px-6 bg-surface-container-low" id="reviews">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-on-surface text-4xl font-extrabold mb-4 font-headline">
            Peer Reviews
          </h2>
          <p className="text-on-surface-variant text-lg">What industry partners say about our engineering collaboration.</p>
        </div>

        <div className="relative group">
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center z-10 pointer-events-none">
            <button
              onClick={prevSlide}
              className="w-14 h-14 bg-white hover:bg-gray-50 rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 border-2 border-gray-200 hover:border-primary/30 pointer-events-auto group/btn -ml-7"
              aria-label="Previous testimonial"
            >
              <Icon name="chevron_left" className="text-2xl text-gray-700 group-hover/btn:text-primary transition-colors" />
            </button>

            <button
              onClick={nextSlide}
              className="w-14 h-14 bg-white hover:bg-gray-50 rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 border-2 border-gray-200 hover:border-primary/30 pointer-events-auto group/btn -mr-7"
              aria-label="Next testimonial"
            >
              <Icon name="chevron_right" className="text-2xl text-gray-700 group-hover/btn:text-primary transition-colors" />
            </button>
          </div>

          {/* Slider Content */}
          <div
            className="overflow-hidden rounded-2xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)} // Resume after 3 seconds on mobile
          >
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  className={`w-full flex-shrink-0 grid gap-8 items-stretch px-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}
                >
                  {slide.map((testimonial, index) => (
                    <div
                      key={`${slideIndex}-${index}`}
                      className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-surface-container hover:shadow-lg hover:border-primary/20 transition-all duration-300 flex flex-col justify-between group/card"
                    >
                      <div className="relative">
                        <div className="absolute -top-4 -left-4 z-10">
                          <div className="text-primary/10 group-hover/card:text-primary/20 transition-colors duration-300">
                            <Icon name="format_quote" className="text-8xl" />
                          </div>
                        </div>
                        <p className="text-gray-800 italic text-lg leading-relaxed mb-8 group-hover/card:text-primary transition-colors duration-300 relative z-20 pt-4">
                          "{testimonial.quote}"
                        </p>
                      </div>
                      <div className="flex items-center gap-4 border-t border-surface-container pt-6">
                        <div className={`w-12 h-12 ${index % 2 === 0 ? 'bg-secondary/10 text-secondary' : 'bg-primary-container/20 text-primary'} rounded-full flex items-center justify-center font-bold text-lg group-hover/card:scale-110 transition-transform`}>
                          {testimonial.initials}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">{testimonial.author}</p>
                          <p className="text-gray-600 text-sm">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Slider Dots */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`relative transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-8 h-3'
                    : 'w-3 h-3 hover:w-4'
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className={`w-full h-full rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-amber-600 to-amber-700 shadow-lg'
                    : 'bg-gray-300 hover:bg-amber-400'
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};