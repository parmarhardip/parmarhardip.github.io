export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  // Only handle hash links (internal navigation)
  if (href.startsWith('#')) {
    e.preventDefault();
    const elementId = href.substring(1); // Remove the # symbol
    smoothScrollTo(elementId);
  }
};