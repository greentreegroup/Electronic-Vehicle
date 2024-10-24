import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 100);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
