'use client'
import React from 'react';

const TechCircle = () => {
  const technologies = [
    'PHP', 'HTML', 'CSS', 'JS', 'REACT', 'NEXTJS', 'TAILWINDCSS', 'GSAP',
    'PRISMA', 'AWS', 'RDS', 'NODEJS', 'LARAVEL', 'VUEJS'
  ];

  const radius = 120; // Radius of the main circle
  const textRadius = radius + 10; // Radius for the text (slightly larger)

  // Repeat the technologies to ensure full coverage
  const textContent = (technologies.join(' - ') + ' - ').repeat(3);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <svg className="w-full h-full max-w-[50vw] aspect-square" viewBox="-200 -200 400 400">
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
        <circle cx="0" cy="0" r={radius} fill="none" stroke="#3B82F6" strokeWidth="4" />
        
        {/* Text path */}
        <path
          id="text-path"
          d={`M 0 -${textRadius} A ${textRadius} ${textRadius} 0 0 1 0 ${textRadius} A ${textRadius} ${textRadius} 0 0 1 0 -${textRadius}`}
          fill="none"
        />
        
        {/* Technologies text */}
        <text className="text-xs md:text-[25px] fill-blue-700 rotating-text font-headings">
          <textPath href="#text-path" startOffset="0%">
            {textContent}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default TechCircle;