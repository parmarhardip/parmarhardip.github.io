import { Link } from 'react-router-dom';
import type { PortfolioSection } from '../../types/content';
import { Icon } from '../ui/Icon';
interface PortfolioProps {
  data: PortfolioSection;
}

export const Portfolio = ({ data }: PortfolioProps) => {
  return (
    <section className="py-28 px-6 bg-background" id="portfolio">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-on-surface text-4xl font-extrabold mb-4 font-headline">
              {data.title}
            </h2>
            <p className="text-on-surface-variant text-lg">{data.subtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.projects.map((project) => {
            // Since we're getting projects dynamically, they all have case studies
            const hasCase = true;

            const cardContent = (
              <>
                <div className="overflow-hidden">
                  <img
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    src={project.image}
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-extrabold mb-3 text-on-surface">
                    {project.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  {hasCase ? (
                    <span className="text-secondary font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all hover:text-primary">
                      Read Case Study <Icon name="arrow_right_alt" className="text-sm" />
                    </span>
                  ) : (
                    <span className="text-secondary/60 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                      Case Study <span className="text-secondary/40">Coming Soon</span>
                    </span>
                  )}
                </div>
              </>
            );

            if (hasCase) {
              return (
                <Link
                  key={project.id}
                  to={project.link}
                  className="group bg-white rounded-2xl overflow-hidden border border-surface-container-high hover:shadow-2xl transition-all duration-500"
                >
                  {cardContent}
                </Link>
              );
            }

            return (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden border border-surface-container-high hover:shadow-2xl transition-all duration-500"
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};