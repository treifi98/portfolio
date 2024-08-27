'use client'
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface MagnetProps {
  children: React.ReactNode;
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({ children, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resetElements = () => {
      gsap.to(container.querySelectorAll('.magnet-nested-element'), {
        x: 0,
        y: 0,
        duration: 0.3,
      });
    };

    container.addEventListener('mouseleave', resetElements);

    return () => {
      container.removeEventListener('mouseleave', resetElements);
    };
  }, []);

  return (
    <div ref={containerRef} className={`magnet-container relative ${className}`}>
      {children}
    </div>
  );
};

export default Magnet;