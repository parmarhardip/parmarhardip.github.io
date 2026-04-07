import type { ExpertiseSection } from '../../types/content';
import { Icon } from '../ui/Icon';

interface ExpertiseProps {
  data: ExpertiseSection;
}

export const Expertise = ({ data }: ExpertiseProps) => {
  return (
    <section className="bg-surface-container-low py-28 px-6" id="expertise">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-on-surface text-4xl font-extrabold mb-6 font-headline leading-tight">
              A Consultative Approach to <br />
              <span className="text-secondary">Engineering Excellence</span>
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              {data.description}
            </p>
            <div className="grid grid-cols-2 gap-8">
              {data.stats.map((stat, index) => (
                <div key={index}>
                  <span className="text-secondary text-4xl font-extrabold block mb-1">{stat.value}</span>
                  <p className="text-on-surface-variant font-medium text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 space-y-4">
            {data.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-6 p-8 rounded-2xl bg-white shadow-sm border border-surface-container">
                <div className={`p-3 rounded-xl ${
                  index === 0 ? 'bg-secondary/10 text-secondary' : 'bg-primary-container/20 text-primary'
                }`}>
                  <Icon name={feature.icon} className="text-3xl" />
                </div>
                <div>
                  <p className="font-bold text-lg text-on-surface mb-1">{feature.title}</p>
                  <p className="text-on-surface-variant">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl font-extrabold font-headline">Technical Solutions Core</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.cards.map((card, index) => (
            <div
              key={index}
              className={`consultant-card ${
                card.borderColor === 'primary' ? 'border-t-4 border-t-primary' :
                card.borderColor === 'secondary' ? 'border-t-4 border-t-secondary' : ''
              }`}
            >
              <Icon name={card.icon} className={`text-5xl mb-6 block ${
                card.borderColor === 'primary' ? 'text-primary' :
                card.borderColor === 'secondary' ? 'text-secondary' : 'text-primary'
              }`} />
              <h3 className="text-2xl font-bold mb-4 text-on-surface">{card.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};