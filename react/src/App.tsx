import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { CaseStudyWrapper } from './components/CaseStudyWrapper';

// Import data
import globalData from './data/global.json';
import homepageData from './data/homepage.json';

// Type cast the imported data
import type { GlobalSiteData, HomePage as HomePageData } from './types/content';

const typedGlobalData = globalData as GlobalSiteData;
const typedHomepageData = homepageData as HomePageData;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function GitHubPagesRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle GitHub Pages SPA redirect
    const urlParams = new URLSearchParams(window.location.search);
    const redirectPath = urlParams.get('p');

    if (redirectPath) {
      // Remove the redirect parameter and navigate to the original path
      const cleanUrl = new URL(window.location.href);
      cleanUrl.searchParams.delete('p');
      window.history.replaceState({}, '', cleanUrl.toString());

      // Navigate to the original path
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <GitHubPagesRedirect />
        <div className="min-h-screen bg-background font-body text-on-surface selection:bg-primary-container/40">
          <Header data={typedGlobalData} />

          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  data={typedHomepageData}
                  globalData={typedGlobalData}
                />
              }
            />
            <Route
              path="/contact"
              element={<ContactPage globalData={typedGlobalData} />}
            />
            <Route
              path="/case-study/:slug"
              element={<CaseStudyWrapper globalData={typedGlobalData} />}
            />
          </Routes>

          <Footer data={typedGlobalData} />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
