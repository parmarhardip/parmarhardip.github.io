import type { GlobalSiteData } from '../../types/content';

interface FooterProps {
  data: GlobalSiteData;
}

export const Footer = ({ data }: FooterProps) => {
  return (
    <footer className="py-16 px-6 bg-background border-t border-surface-container-high text-center">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <div className="size-6 text-secondary/50">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d={data.footer.logo.icon} fill="currentColor" />
            </svg>
          </div>
          <p className="text-on-surface-variant text-sm font-bold font-headline uppercase tracking-widest">
            {data.footer.logo.text}
          </p>
        </div>
        <p className="text-on-surface-variant text-sm">
          {data.footer.copyright}
        </p>
      </div>
    </footer>
  );
};