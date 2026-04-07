import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import type { GlobalSiteData } from '../../types/content';
import { Icon } from '../ui/Icon';
import { handleSmoothScroll } from '../../utils/smoothScroll';

interface HeaderProps {
  data: GlobalSiteData;
}

export const Header = ({ data }: HeaderProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-lg border-b border-surface-container-high">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          onClick={(e) => {
            if (isHomePage) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center gap-3"
        >
          <div className="size-8 text-secondary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d={data.navigation.logo.icon} fill="currentColor" />
            </svg>
          </div>
          <h2 className="text-on-surface text-xl font-extrabold tracking-tight font-headline">
            {data.navigation.logo.text}
          </h2>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {data.navigation.items.map((item, index) => (
            <a
              key={index}
              className="text-on-surface/70 text-sm font-semibold hover:text-secondary transition-colors"
              href={isHomePage ? item.href : `/${item.href}`}
              onClick={(e) => isHomePage && handleSmoothScroll(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="flex items-center justify-center rounded-full h-11 px-6 bg-secondary text-white text-sm font-bold hover:brightness-110 transition-all shadow-md"
            href={isHomePage ? data.navigation.cta.href : `/${data.navigation.cta.href}`}
            onClick={(e) => isHomePage && handleSmoothScroll(e, data.navigation.cta.href)}
          >
            {data.navigation.cta.text}
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-on-surface hover:text-secondary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Icon name="menu" className="text-2xl" />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-surface-container-high">
          <div className="px-6 py-4 space-y-3">
            {data.navigation.items.map((item, index) => (
              <a
                key={index}
                className="block text-on-surface/70 font-semibold hover:text-secondary transition-colors py-2"
                href={isHomePage ? item.href : `/${item.href}`}
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  if (isHomePage) {
                    // Small delay to let menu close first
                    setTimeout(() => handleSmoothScroll(e, item.href), 100);
                  }
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              className="block w-full text-center rounded-full py-3 px-6 bg-secondary text-white font-bold hover:brightness-110 transition-all shadow-md mt-4"
              href={isHomePage ? data.navigation.cta.href : `/${data.navigation.cta.href}`}
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                if (isHomePage) {
                  // Small delay to let menu close first
                  setTimeout(() => handleSmoothScroll(e, data.navigation.cta.href), 100);
                }
              }}
            >
              {data.navigation.cta.text}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};