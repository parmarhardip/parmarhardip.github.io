import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CaseStudyPage } from '../pages/CaseStudyPage';
import type { CaseStudy, GlobalSiteData } from '../types/content';

interface CaseStudyWrapperProps {
  globalData: GlobalSiteData;
}

export const CaseStudyWrapper = ({ globalData }: CaseStudyWrapperProps) => {
  const { slug } = useParams<{ slug: string }>();
  const [caseStudyData, setCaseStudyData] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCaseStudy = async () => {
      if (!slug) {
        setError('No case study slug provided');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // Dynamically import the case study data
        const data = await import(`../data/case-studies/${slug}.json`);
        setCaseStudyData(data.default as CaseStudy);
      } catch (err) {
        console.error('Failed to load case study:', err);
        setError(`Case study "${slug}" not found`);
      } finally {
        setLoading(false);
      }
    };

    loadCaseStudy();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-on-surface-variant">Loading case study...</div>
      </div>
    );
  }

  if (error || !caseStudyData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-on-surface-variant">
          {error || 'Case study not found'}
        </div>
      </div>
    );
  }

  return <CaseStudyPage data={caseStudyData} globalData={globalData} />;
};