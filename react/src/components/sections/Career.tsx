import type { CareerSection } from '../../types/content';

interface CareerProps {
  data: CareerSection;
}

export const Career = ({ data }: CareerProps) => {
  return (
    <section className="py-28 px-6 bg-background" id="career">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-on-surface text-4xl font-extrabold mb-4 font-headline">{data.title}</h2>
          <div className="w-24 h-1.5 bg-secondary/20 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {data.items.map((item, index) => (
            <div key={index} className="group relative pl-12 border-l-2 border-surface-container-high pb-4">
              <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full border-4 border-background transition-all ${
                item.current
                  ? 'bg-secondary group-hover:scale-125'
                  : 'bg-surface-container-high group-hover:bg-secondary'
              }`}></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-on-surface font-headline">
                  {item.title} @ {item.company}
                </h3>
                <span className={`px-4 py-1 text-xs font-bold rounded-full ${
                  item.current
                    ? 'bg-secondary-container text-on-secondary-container'
                    : 'bg-surface-container-high text-on-surface-variant'
                }`}>
                  {item.period}
                </span>
              </div>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-3xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};