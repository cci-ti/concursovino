import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useReveal() {
  const location = useLocation();

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    reveals.forEach((el) => {
      if (!el.classList.contains('in')) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]); // Re-run observer setups when route path changes
}
