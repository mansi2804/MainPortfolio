import { useRef, useEffect } from 'react';

const useScrollToView = (elementId) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementId && elementRef.current) {
      const targetElement = document.getElementById(elementId);

      if (targetElement) {
        elementRef.current.addEventListener('click', () => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        });
      }
    }
  }, [elementId]);

  return elementRef;
};

export default useScrollToView;
