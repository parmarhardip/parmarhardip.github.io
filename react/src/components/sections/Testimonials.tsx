import { useState, useEffect } from 'react';
import type { Testimonial } from '../../types/content';
import { Icon } from '../ui/Icon';

interface TestimonialsProps {
  data: Testimonial[];
}

export const Testimonials = ({ data }: TestimonialsProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="py-28 px-6 bg-surface-container-low" id="reviews">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-on-surface text-4xl font-extrabold mb-4 font-headline">
            Peer Reviews
          </h2>
          <p className="text-on-surface-variant text-lg">What industry partners say about our engineering collaboration.</p>
        </div>

        <div className="relative group overflow-hidden">
          <div
            className={`flex transition-transform duration-700 ease-in-out`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className={`w-full flex-shrink-0 grid gap-8 items-stretch ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}
              >
                {slide.map((testimonial, index) => (
                  <div
                    key={`${slideIndex}-${index}`}
                    className="bg-white p-10 rounded-2xl shadow-sm border border-surface-container hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-primary-container mb-6 flex">
                        <Icon name="format_quote" className="text-4xl" />
                      </div>
                      <p className="text-on-surface italic text-lg leading-relaxed mb-8">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <div className="flex items-center gap-4 border-t border-surface-container pt-6">
                      <div className={`w-12 h-12 ${index % 2 === 0 ? 'bg-secondary/10 text-secondary' : 'bg-primary-container/20 text-primary'} rounded-full flex items-center justify-center font-bold text-lg`}>
                        {testimonial.initials}
                      </div>
                      <div>
                        <p className="font-bold text-on-surface">{testimonial.author}</p>
                        <p className="text-on-surface-variant text-sm">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Slider dots */}
          <div className="flex justify-center gap-2 mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide
                    ? 'bg-secondary'
                    : 'bg-surface-container-high hover:bg-secondary/40'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};