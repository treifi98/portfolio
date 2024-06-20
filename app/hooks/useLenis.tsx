// /hooks/useLenis.js
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const useLenis = () => {
  const lenis = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Update Lenis on each animation frame
    const animate = (time: number) => {
      if (lenis.current) {
        lenis.current.raf(time);
      }
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    // Clean up on unmount
    return () => {
      if (lenis.current) {
        lenis.current.destroy();
      }
    };
  }, []);

  return lenis.current;
};

export default useLenis;
