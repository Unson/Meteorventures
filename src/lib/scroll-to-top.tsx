import { useEffect, useRef } from 'react';

// Component to handle automatic scroll management
export function ScrollToTop() {
  const prevPathRef = useRef<string | null>(null);

  useEffect(() => {
    const pathname = window.location.pathname;
    const hash = window.location.hash;
    const isSamePage = prevPathRef.current === pathname;

    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: isSamePage ? 'smooth' : 'auto'
      });
    }

    prevPathRef.current = pathname;
  }, []);

  return null;
}
