'use client'
import React, { useState, useEffect } from 'react';

interface Props {
    isPressed: boolean;
}

const LogoFooter = (props: Props) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        // Initial window size
        handleResize();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const calculateTransform = (ratio: number, index: number) => {
        const centerX = windowSize.width / 2;
        const centerY = windowSize.height / 2;
        const moveX = (mousePosition.x - centerX) * ratio;
        const moveY = (mousePosition.y - centerY) * ratio;
        const scale = props.isPressed ? 1.2 : 1;
        const spacing = props.isPressed ? (index - 0) * 0.3 : 1; // Increase spacing when pressed
        return `translate(${moveX * spacing}px, ${moveY * spacing}px) scale(${scale}) translateZ(${spacing}px)`;
    };

    return (
        <div
            style={{ position: 'relative' }}
            className='w-full h-full cursor-pointer'
        >
            <svg
                viewBox="0 0 158 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className='w-full h-full overflow-visible'
                style={{
                    transition: 'transform 0.3s ease-out',
                    transform: `scale(${props.isPressed ? 1.2 : 1})`,
                    transformOrigin: 'center center',
                    perspective: '1000px'
                }}
            >
                <g>
                    <g style={{ transform: calculateTransform(0.06, 4), transition: 'all 0.3s ease-out' }} className='origin-bottom-left'>
                        <path className='logo4 origin-top' d="M57.4784 60.6738L23.691 138.697L0.634346 123.042L57.9492 1.15851L96.934 80.7998L71.2707 85.9457L58.3828 60.6456L57.9006 59.699L57.4784 60.6738Z" fill="#EF476F" stroke="white" />
                        <path className='logo4 origin-top' d="M92.4706 136.741L80.6364 108.687L104.425 95.6916L124.087 136.741H92.4706Z" fill="#EF476F" stroke="white" />
                        <path className='logo4 origin-top' d="M44.1373 92.8291L154.587 67.3231L25.0155 138.373L44.1373 92.8291Z" fill="#EF476F" stroke="white" />
                    </g>
                    <g style={{ transform: calculateTransform(0.04, 3), transition: 'all 0.3s ease-out' }} className='origin-bottom-left'>
                        <path className='logo3 origin-top' d="M58.4784 59.6738L24.691 137.697L1.63435 122.042L58.9492 0.158513L97.934 79.7998L72.2707 84.9457L59.3828 59.6456L58.9006 58.699L58.4784 59.6738Z" fill="#FFD166" stroke="white" />
                        <path className='logo3 origin-top' d="M93.4706 135.741L81.6364 107.687L105.425 94.6916L125.087 135.741H93.4706Z" fill="#FFD166" stroke="white" />
                        <path className='logo3 origin-top' d="M45.1373 91.8291L155.587 66.3231L26.0155 137.373L45.1373 91.8291Z" fill="#FFD166" stroke="white" />
                    </g>
                    <g style={{ transform: calculateTransform(0.03, 2), transition: 'all 0.3s ease-out' }} className='origin-bottom-left'>
                        <path className='logo2 origin-top' d="M58.4784 59.6738L24.691 137.697L1.63435 122.042L58.9492 0.158513L97.934 79.7998L72.2707 84.9457L59.3828 59.6456L58.9006 58.699L58.4784 59.6738Z" fill="#4b94bc" stroke="white" />
                        <path className='logo2 origin-top' d="M93.4706 135.741L81.6364 107.687L105.425 94.6916L125.087 135.741H93.4706Z" fill="#4b94bc" stroke="white" />
                        <path className='logo2 origin-top' d="M45.1373 91.8291L155.587 66.3231L26.0155 137.373L45.1373 91.8291Z" fill="#4b94bc" stroke="white" />
                    </g>
                    <g style={{ transform: calculateTransform(0.02, 1), transition: 'all 0.3s ease-out' }} className='origin-bottom-left'>
                        <path className='logo2 origin-top' d="M58.4784 59.6738L24.691 137.697L1.63435 122.042L58.9492 0.158513L97.934 79.7998L72.2707 84.9457L59.3828 59.6456L58.9006 58.699L58.4784 59.6738Z" fill="#28789f" stroke="white" />
                        <path className='logo2 origin-top' d="M93.4706 135.741L81.6364 107.687L105.425 94.6916L125.087 135.741H93.4706Z" fill="#28789f" stroke="white" />
                        <path className='logo2 origin-top' d="M45.1373 91.8291L155.587 66.3231L26.0155 137.373L45.1373 91.8291Z" fill="#28789f" stroke="white" />
                    </g>
                    <g style={{ transform: calculateTransform(0.01, 0), transition: 'all 0.3s ease-out' }} className='origin-bottom-left'>
                        <path className="logo1 origin-top" d="M58.4784 59.6738L24.691 137.697L1.63435 122.042L58.9492 0.158513L97.934 79.7998L72.2707 84.9457L59.3828 59.6456L58.9006 58.699L58.4784 59.6738Z" fill="#00668C" stroke="white" />
                        <path className="logo1 origin-top" d="M93.4706 135.741L81.6364 107.687L105.425 94.6916L125.087 135.741H93.4706Z" fill="#00668C" stroke="white" />
                        <path className="logo1 origin-top" d="M45.1373 91.8291L155.587 66.3231L26.0155 137.373L45.1373 91.8291Z" fill="#00668C" stroke="white" />
                    </g>
                </g>
                <defs>
                    <clipPath id="clip0_29_23">
                        <rect width="158" height="140" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};

export default React.memo(LogoFooter);