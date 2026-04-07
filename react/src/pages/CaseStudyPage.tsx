import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import type { CaseStudy, GlobalSiteData } from '../types/content';
import { Icon } from '../components/ui/Icon';
import { CTAButtons } from '../components/ui/CTAButtons';
import { ProjectsModal } from '../components/modals/ProjectsModal';

interface CaseStudyPageProps {
  data: CaseStudy;
  globalData: GlobalSiteData;
}

export const CaseStudyPage = ({ data, globalData }: CaseStudyPageProps) => {
  const { id } = useParams();
  const [showProjectsModal, setShowProjectsModal] = useState(false);

  return (
    <>
      <Helmet>
        <title>{`${data.meta.title} | ${globalData.seo.titleTemplate.replace('%s', '')}`}</title>
        <meta name="description" content={data.meta.description} />
        <meta name="keywords" content={data.meta.keywords.join(', ')} />
        <meta property="og:title" content={data.meta.title} />
        <meta property="og:description" content={data.meta.description} />
        <meta property="og:image" content={`${globalData.seo.siteUrl}${data.meta.ogImage}`} />
        <meta property="og:url" content={`${globalData.seo.siteUrl}/case-study/${id}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="max-w-[1200px] mx-auto px-6 pt-20 mb-20">
          <nav className="flex mb-8 text-sm font-medium text-on-surface-variant">
            <Link className="hover:text-secondary transition-colors" to="/#portfolio">
              Case Studies
            </Link>
            <span className="mx-2">/</span>
            <span className="text-on-surface">LMS & Community</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[2px] bg-secondary"></span>
                <span className="text-secondary font-bold tracking-widest text-xs uppercase">
                  {data.hero.subtitle}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 text-on-surface font-headline">
                <span dangerouslySetInnerHTML={{ __html: data.hero.title }} />
              </h1>
            </div>

            <div className="lg:col-span-4 pb-2">
              <div className="p-8 bg-white rounded-2xl border border-surface-container shadow-sm">
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-1">Client</p>
                    <p className="font-bold text-lg">{data.hero.client}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-1">Role</p>
                    <p className="font-bold text-lg">{data.hero.role}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {data.hero.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-surface-container-low text-on-surface-variant text-xs font-semibold rounded-full border border-surface-container"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {data.projects && data.projects.length > 0 && (
                    <div className="pt-4 border-t border-surface-container mt-4">
                      <button
                        onClick={() => setShowProjectsModal(true)}
                        className="flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold text-sm group"
                      >
                        <Icon name="launch" className="text-base" />
                        View Live Projects ({data.projects.length})
                        <Icon name="arrow_outward" className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Image */}
        <div className="w-full max-w-[1200px] mx-auto px-6 mb-24">
          <div className="aspect-[21/9] rounded-lg overflow-hidden bg-white shadow-xl p-3 border border-surface-container">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={data.hero.image}
              alt={data.hero.title}
            />
          </div>
        </div>

        {/* Challenge Section */}
        <section className="bg-surface-container-low py-28 px-6 mb-24 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-start relative z-10">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight mb-8 font-headline">
                {data.challenge.title}
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
                {data.challenge.description}
              </p>
              {data.challenge.additionalInfo && (
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  {data.challenge.additionalInfo}
                </p>
              )}
            </div>

            <div className="space-y-6">
              {data.challenge.problems.map((problem, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-6 p-8 rounded-2xl bg-white shadow-sm border border-surface-container border-l-4 ${
                    problem.color === 'primary' ? 'border-l-primary' : 'border-l-secondary'
                  }`}
                >
                  <div className={`p-3 rounded-xl ${
                    problem.color === 'primary'
                      ? 'bg-primary-container/20 text-primary'
                      : 'bg-secondary/10 text-secondary'
                  }`}>
                    <Icon name={problem.icon} className="text-3xl" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-on-surface mb-1">{problem.title}</p>
                    <p className="text-on-surface-variant italic">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="max-w-[1200px] mx-auto px-6 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 font-headline">
              {data.solution.title}
            </h2>
            <div className="w-24 h-1.5 bg-secondary/20 mx-auto rounded-full mb-6"></div>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg italic">
              {data.solution.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {data.solution.features.map((feature, index) => (
              <div
                key={index}
                className={`consultant-card border-t-4 ${
                  feature.color === 'primary' ? 'border-t-primary' : 'border-t-secondary'
                }`}
              >
                <Icon name={feature.icon} className={`text-5xl mb-6 block ${
                  feature.color === 'primary' ? 'text-primary' : 'text-secondary'
                }`} />
                <h3 className="text-2xl font-bold mb-4 text-on-surface">{feature.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Results Section */}
        <section className="max-w-[1200px] mx-auto px-6 mb-24">
          <div className={`${data.results.backgroundColor === 'on-surface' ? 'bg-on-surface text-white' : 'bg-surface-container-low'} rounded-2xl p-12 md:p-20 relative overflow-hidden shadow-2xl`}>
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px]"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
              {data.results.metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <p className={`text-4xl md:text-6xl font-extrabold ${
                    data.results.backgroundColor === 'on-surface' ? 'text-primary-container' : 'text-secondary'
                  } mb-2 font-headline`}>
                    {metric.value}
                  </p>
                  <p className={`text-xs font-bold uppercase tracking-[0.3em] ${
                    data.results.backgroundColor === 'on-surface' ? 'opacity-70' : 'text-on-surface-variant'
                  }`}>
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Deep Dive */}
        <section className="max-w-[1000px] mx-auto px-6 mb-24">
          <h2 className="text-4xl font-extrabold mb-8 font-headline">
            <span dangerouslySetInnerHTML={{ __html: data.technicalDeepDive.title }} />
          </h2>

          <div className="prose prose-lg text-on-surface-variant leading-relaxed mb-12">
            <p className="text-xl">{data.technicalDeepDive.description}</p>
          </div>

          <div className="bg-on-surface rounded-2xl p-8 font-mono text-sm overflow-x-auto border border-surface-container shadow-xl">
            <pre className="text-surface-container">
              <code dangerouslySetInnerHTML={{ __html: data.technicalDeepDive.codeExample.code }} />
            </pre>
          </div>

          <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl p-3 bg-white">
            <img
              className="w-full h-80 object-cover rounded-xl"
              src={data.technicalDeepDive.architectureImage}
              alt="System Architecture"
            />
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-[1200px] mx-auto px-6 mb-24">
          <div className="grid md:grid-cols-2 gap-8">
            {data.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 md:p-10 border border-surface-container shadow-lg relative overflow-hidden"
              >
                <div className={`absolute -bottom-10 ${index % 2 === 0 ? '-right-10' : '-left-10'} w-48 h-48 bg-primary-container/10 rounded-full blur-3xl`}></div>
                <div className="relative z-10">
                  <div className="text-primary-container mb-6 flex">
                    <Icon name="format_quote" className="text-4xl" />
                  </div>
                  <p className="text-lg font-medium leading-relaxed mb-8 italic text-on-surface">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${
                      index % 2 === 0
                        ? 'bg-secondary/10 text-secondary'
                        : 'bg-primary-container/20 text-primary'
                    } rounded-full flex items-center justify-center font-bold text-lg`}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">{testimonial.author}</p>
                      <p className="text-secondary font-bold text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Next Case Study */}
        <section className="max-w-[1200px] mx-auto px-6 mb-32">
          <Link
            className="group flex items-center justify-between p-12 bg-surface-container-low rounded-2xl transition-all hover:bg-white hover:shadow-xl border border-transparent hover:border-surface-container"
            to={data.nextProject.href}
          >
            <div>
              <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.4em] mb-3">
                NEXT PROJECT
              </p>
              <h3 className="text-3xl font-extrabold font-headline group-hover:text-secondary transition-colors">
                {data.nextProject.title}
              </h3>
            </div>
            <Icon name="arrow_right_alt" className="text-4xl text-secondary group-hover:translate-x-3 transition-transform" />
          </Link>
        </section>

        {/* Contact Section */}
        <section className="py-32 px-6 bg-background relative overflow-hidden" id="contact">
          <div className="absolute top-0 left-0 w-full h-24 bg-surface-container-low organic-curve"></div>
          <div className="max-w-[850px] mx-auto text-center flex flex-col gap-10 relative z-10">
            <div className="flex flex-col gap-4 pt-12">
              <span className="text-secondary font-bold tracking-[0.4em] text-sm uppercase">
                READY TO COLLABORATE?
              </span>
              <h2 className="text-on-surface text-5xl md:text-6xl font-extrabold font-headline leading-[1.1]">
                Let's Build Your <br />
                <span className="accent-underline">Next Innovative Platform</span>
              </h2>
            </div>

            <p className="text-on-surface-variant text-xl leading-relaxed max-w-2xl mx-auto">
              Let's discuss how we can scale your WordPress ecosystem for high-concurrency and seamless integrations.
            </p>

            <CTAButtons />
          </div>
        </section>

        {/* Projects Modal */}
        {data.projects && (
          <ProjectsModal
            projects={data.projects}
            isOpen={showProjectsModal}
            onClose={() => setShowProjectsModal(false)}
          />
        )}
      </main>
    </>
  );
};