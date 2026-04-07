import { useEffect } from 'react';
import type { Project } from '../../types/content';
import { Icon } from '../ui/Icon';

interface ProjectsModalProps {
  projects: Project[];
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectsModal = ({ projects, isOpen, onClose }: ProjectsModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl mx-4 max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-surface-container-high">
          <div>
            <h3 className="text-2xl font-bold text-on-surface">Live OJS Projects</h3>
            <p className="text-on-surface-variant mt-1">{projects.length} Active Journal Platforms</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-surface-container rounded-full transition-colors"
            aria-label="Close modal"
          >
            <Icon name="close" className="text-xl text-on-surface-variant" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 max-h-[calc(90vh-120px)] overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group flex items-center justify-between p-4 border-b border-surface-container-high last:border-b-0 hover:bg-surface-container/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  {/* Icon */}
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="article" className="text-lg text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-on-surface leading-tight mb-1 line-clamp-2">
                      {project.name}
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Link Button */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-9 h-9 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icon name="launch" className="text-primary text-lg" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-surface-container border-t border-surface-container-high">
          <p className="text-sm text-on-surface-variant text-center">
            Click any project to visit the live OJS journal platform
          </p>
        </div>
      </div>
    </div>
  );
};