'use client'
import React, { useEffect, useRef, useState } from 'react';

const ImageReveal: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isIntro, setIsIntro] = useState(true);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setIsIntro(false);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleTouchMove = (e: TouchEvent) => {
      setIsIntro(false);
      const touch = e.touches[0];
      setPosition({ x: touch.clientX, y: touch.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div 
      ref={bgRef}
      className={`relative bg-cover w-full h-full bg-[red] mix-blend-difference ${isIntro ? 'animate-circle-intro' : ''}`}
      style={{
        backgroundImage: 'url(/str1.png)',
        clipPath: isIntro 
          ? 'circle(100% at 50% 50%)' 
          : `circle(10% at ${position.x}px ${position.y/2}px)`,
      }}
    />
  );
};

export default React.memo(ImageReveal);