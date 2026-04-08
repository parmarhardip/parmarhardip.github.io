import type { ContactSection } from '../../types/content';
import { CTAButtons } from '../ui/CTAButtons';

interface ContactProps {
  data: ContactSection;
}

export const Contact = ({ data }: ContactProps) => {
  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden" id="contact">
      <div className="absolute top-0 left-0 w-full h-24 bg-surface-container-low organic-curve"></div>
      <div className="max-w-[850px] mx-auto text-center flex flex-col gap-10 relative z-10">
        <div className="flex flex-col gap-4 pt-12">
          <span className="text-secondary font-bold tracking-[0.4em] text-sm uppercase">
            {data.subtitle}
          </span>
          <h2 className="text-on-surface text-5xl md:text-6xl font-extrabold font-headline leading-[1.1]">
            <span dangerouslySetInnerHTML={{ __html: data.title }} />
          </h2>
        </div>

        <p className="text-on-surface-variant text-xl leading-relaxed max-w-2xl mx-auto">
          {data.description}
        </p>

        <CTAButtons linkedinUrl={data.linkedinUrl} />
      </div>
    </section>
  );
};