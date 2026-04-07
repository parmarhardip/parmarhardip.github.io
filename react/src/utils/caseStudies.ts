import type { CaseStudy, ProjectCard } from '../types/content';

// Dynamically discover all case study files using Vite's glob import
const discoverCaseStudyFiles = async (): Promise<string[]> => {
  // Use Vite's import.meta.glob to get all JSON files in case-studies directory
  const modules = import.meta.glob('../data/case-studies/*.json');

  const discoveredFiles: string[] = [];

  // Extract file names from the glob results
  for (const path in modules) {
    // Extract filename without extension from path like '../data/case-studies/lms-platform.json'
    const fileName = path.replace('../data/case-studies/', '').replace('.json', '');
    discoveredFiles.push(fileName);
  }

  return discoveredFiles;
};

// Get list of available case studies
export const getAvailableCaseStudies = async (): Promise<string[]> => {
  return await discoverCaseStudyFiles();
};

// Get case studies that should be shown on homepage with full data
export const getHomepageCaseStudies = async (): Promise<ProjectCard[]> => {
  const modules = import.meta.glob('../data/case-studies/*.json');
  const homepageStudies: ProjectCard[] = [];

  // Load each module and check the showInHomepage flag
  for (const path in modules) {
    try {
      const moduleLoader = modules[path];
      const data = await moduleLoader() as { default: CaseStudy };
      const caseStudy = data.default;

      // Include if showInHomepage is true or undefined (default to true)
      if (caseStudy.showInHomepage !== false) {
        // Extract filename from path
        const fileName = path.replace('../data/case-studies/', '').replace('.json', '');

        // Convert case study to ProjectCard format
        const projectCard: ProjectCard = {
          id: fileName,
          title: caseStudy.hero.title.replace(/<[^>]*>/g, ''), // Remove HTML tags for title
          description: caseStudy.meta.description,
          image: caseStudy.hero.image || '/assets/images/default-project.jpg', 
          link: `/case-study/${fileName}`,
          technologies: caseStudy.hero.technologies
        };

        homepageStudies.push(projectCard);
      }
    } catch (error) {
      console.warn(`Failed to load case study from ${path}:`, error);
    }
  }

  return homepageStudies;
};

// Check if a specific case study is available
export const isCaseStudyAvailable = (caseStudyId: string, availableStudies: string[]): boolean => {
  return availableStudies.includes(caseStudyId);
};