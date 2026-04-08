import { Link } from 'react-router-dom';
import { Icon } from './Icon';

interface CTAButtonsProps {
  className?: string;
  linkedinUrl?: string;
}

export const CTAButtons = ({
  className = '',
  linkedinUrl = 'https://linkedin.com/in/hardipparmar'
}: CTAButtonsProps) => {
  return (
    <div className={`flex flex-wrap justify-center gap-6 pt-6 ${className}`}>
      <Link
        to="/contact"
        className="flex items-center gap-4 bg-secondary text-white px-10 py-3 rounded-full font-extrabold text-xl shadow-xl hover:shadow-2xl hover:brightness-110 active:scale-95 transition-all"
      >
        <Icon name="rocket_launch" />
        Start the Conversation
      </Link>
      <a
        className="flex items-center gap-4 bg-white text-on-surface px-10 py-3 rounded-full font-bold text-xl border border-surface-container hover:border-secondary transition-all shadow-sm"
        href={linkedinUrl}
        target="_blank"
        rel="noopener"
      >
        <Icon name="link" />
        LinkedIn
      </a>
    </div>
  );
};