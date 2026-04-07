import type { HeroSection } from '../../types/content';
import { Icon } from '../ui/Icon';
import { handleSmoothScroll } from '../../utils/smoothScroll';

interface HeroProps {
  data: HeroSection;
}

export const Hero = ({ data }: HeroProps) => {
  return (
    <section className="relative px-6 py-20 md:py-32 overflow-hidden" id="about">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 flex flex-col gap-8 z-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-[2px] bg-secondary"></span>
              <span className="text-secondary font-bold tracking-widest text-xs uppercase">
                {data.subtitle}
              </span>
            </div>
            <h1 className="text-on-surface text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight font-headline">
              <span dangerouslySetInnerHTML={{ __html: data.title }} />
            </h1>
          </div>

          <p className="text-on-surface-variant text-xl leading-relaxed max-w-2xl">
            {data.description}
          </p>

          <div className="flex flex-wrap gap-5 pt-4">
            <a
              href={data.ctaButtons.primary.href}
              className="px-10 py-3 bg-primary-container text-on-primary-container rounded-full font-bold shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all flex items-center gap-3 justify-center text-lg"
              onClick={(e) => handleSmoothScroll(e, data.ctaButtons.primary.href)}
            >
              {data.ctaButtons.primary.text} <Icon name={data.ctaButtons.primary.icon} />
            </a>
            <a
              href={data.ctaButtons.secondary.href}
              className="px-10 py-3 bg-white text-secondary rounded-full font-bold border-2 border-secondary/10 hover:border-secondary/30 transition-all text-center text-lg"
              onClick={(e) => handleSmoothScroll(e, data.ctaButtons.secondary.href)}
            >
              {data.ctaButtons.secondary.text}
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl p-3 bg-white rotate-2 hover:rotate-0 transition-transform duration-700">
            <img
              alt="Hardip Parmar"
              className="w-full aspect-[4/5] object-cover rounded-xl"
              src={data.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};