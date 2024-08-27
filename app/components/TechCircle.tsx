'use client'
import React from 'react';

const TechCircle = () => {
  const technologies = [
    'PHP', 'REACT', 'NEXTJS', 'TAILWIND', 'GSAP',
    'AWS', 'NODEJS', 'LARAVEL', 'VUE', 'FIGMA', 'ILLUSTRATOR', 'PHOTO SHOP'
  ];

  const radius = 140; // Radius of the main circle
  const textRadius = radius + 30; // Radius for the text (slightly larger)

  // Repeat the technologies to ensure full coverage
  const textContent = (technologies.join(' - ') + ' - ').repeat(3);

  return (
    <div className="flex items-center justify-center w-full h-max bg-primary">
      <svg className="w-full h-full  aspect-square" viewBox="-200 -200 400 400">
        <style>
          {`
            @keyframes rotate {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(-360deg);
              }
            }
            .rotating-text {
              animation: rotate 30s linear infinite;
            }
          `}
        </style>

        {/* Main circle */}
        <circle cx="0" cy="0" r={radius} fill="#00668C" stroke="#00668C" strokeWidth="4" />

        {/* Text path */}
        <path
          id="text-path"
          d={`M 0 -${textRadius} A ${textRadius} ${textRadius} 0 0 1 0 ${textRadius} A ${textRadius} ${textRadius} 0 0 1 0 -${textRadius}`}
          fill="none"
        />

        {/* Technologies text */}
        <text className="text-xs md:text-[16px] fill-accesnt rotating-text font-headings">
          <textPath href="#text-path" startOffset="0%">
            {textContent}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default React.memo(TechCircle);