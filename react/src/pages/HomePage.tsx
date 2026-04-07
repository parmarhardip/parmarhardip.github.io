import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { Hero } from '../components/sections/Hero';
import { Expertise } from '../components/sections/Expertise';
import { Career } from '../components/sections/Career';
import { Toolkit } from '../components/sections/Toolkit';
import { Portfolio } from '../components/sections/Portfolio';
import { Testimonials } from '../components/sections/Testimonials';
import { Contact } from '../components/sections/Contact';
import { getHomepageCaseStudies } from '../utils/caseStudies';
import type { HomePage as HomePageData, GlobalSiteData, PortfolioSection } from '../types/content';

interface HomePageProps {
  data: HomePageData;
  globalData: GlobalSiteData;
}

export const HomePage = ({ data, globalData }: HomePageProps) => {
  const [dynamicPortfolioData, setDynamicPortfolioData] = useState<PortfolioSection | null>(null);

  useEffect(() => {
    const loadCaseStudies = async () => {
      const projects = await getHomepageCaseStudies();

      // Create dynamic portfolio data
      const portfolioData: PortfolioSection = {
        title: "Selected Impact",
        subtitle: "Tangible engineering solutions for complex digital challenges.",
        projects: projects
      };

      setDynamicPortfolioData(portfolioData);
    };

    loadCaseStudies();
  }, []);

  return (
    <>
      <Helmet>
        <title>{globalData.seo.defaultTitle}</title>
        <meta name="description" content={globalData.seo.defaultDescription} />
        <meta property="og:title" content={globalData.seo.defaultTitle} />
        <meta property="og:description" content={globalData.seo.defaultDescription} />
        <meta property="og:image" content={`${globalData.seo.siteUrl}${globalData.seo.defaultImage}`} />
        <meta property="og:url" content={globalData.seo.siteUrl} />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Hardip Parmar",
            "url": "https://parmarhardip.github.io",
            "image": "https://parmarhardip.github.io/assets/images/hardip-parmar.jpg",
            "sameAs": [
              "https://linkedin.com/in/parmarhardipr"
            ],
            "jobTitle": "Senior WordPress Developer & Engineering Partner",
            "worksFor": {
              "@type": "Organization",
              "name": "BuddyBoss LLC"
            },
            "knowsAbout": [
              "WordPress Development",
              "BuddyBoss",
              "LearnDash",
              "LMS Development",
              "Open Journal Systems (OJS)",
              "Custom Plugin Development",
              "Performance Optimization",
              "Enterprise WordPress"
            ],
            "description": "Senior WordPress consultant and engineering partner specializing in scalable LMS platforms, community sites, and enterprise solutions. 10+ years experience with BuddyBoss, LearnDash, and custom WordPress development.",
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "parmarhardip1995@gmail.com",
              "contactType": "Professional"
            }
          })}
        </script>
      </Helmet>

      <main>
        <Hero data={data.hero} />
        <Expertise data={data.expertise} />
        <Career data={data.career} />
        <Toolkit data={data.toolkit} />
        {dynamicPortfolioData && (
          <Portfolio data={dynamicPortfolioData} />
        )}
        <Testimonials data={data.testimonials} />
        <Contact data={data.contact} />
      </main>
    </>
  );
};