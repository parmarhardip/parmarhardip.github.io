import type { ToolkitSection } from '../../types/content';

interface ToolkitProps {
  data: ToolkitSection;
}

export const Toolkit = ({ data }: ToolkitProps) => {
  return (
    <section className="py-24 px-6 bg-surface-container-low" id="toolkit">
      <div className="max-w-[900px] mx-auto text-center">
        <h2 className="text-on-surface text-3xl font-extrabold mb-10 font-headline">{data.title}</h2>

        <div className="flex flex-wrap justify-center gap-3">
          {data.technologies.map((tech, index) => {
            const isHighlighted = tech === 'OJS' || tech === 'Academic Systems';
            return (
              <span
                key={index}
                className={`px-6 py-2 bg-white font-semibold rounded-full transition-all cursor-default shadow-sm ${
                  isHighlighted
                    ? 'border border-secondary text-secondary'
                    : 'text-on-surface-variant border border-surface-container hover:border-secondary hover:text-secondary'
                }`}
              >
                {tech}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};