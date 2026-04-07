export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    // Get the header height to offset scroll position
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 80; // fallback to 80px

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight - 20; // 20px extra padding

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
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