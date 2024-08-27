'use client'

import React, { useState, useEffect, ReactNode } from 'react';

interface ChildProps {
    x: number;
    y: number;
}

interface ResponsiveChildProps {
    children: (props: ChildProps) => ReactNode;
    speed: number;
    direction: 'with' | 'opposite' | 'perpendicular';
}

const ResponsiveChild: React.FC<ResponsiveChildProps> = ({ children, speed, direction }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const dx = e.clientX - window.innerWidth / 2;
            const dy = e.clientY - window.innerHeight / 2;

            let newX = 0;
            let newY = 0;

            switch (direction) {
                case 'with':
                    newX = dx * speed;
                    newY = dy * speed;
                    break;
                case 'opposite':
                    newX = -dx * speed;
                    newY = -dy * speed;
                    break;
                case 'perpendicular':
                    newX = dy * speed;
                    newY = -dx * speed;
                    break;
            }

            setPosition({ x: newX, y: newY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [speed, direction]);

    return <>{children(position)}</>;
};

interface MouseResponsiveContainerProps {
    children: ReactNode[];
}

const MouseResponsiveContainer: React.FC<MouseResponsiveContainerProps> = ({ children }) => {
    const directions: ('with' | 'opposite' | 'perpendicular')[] = ['with', 'opposite', 'perpendicular'];

    return (
        <div className=' z-[99] top-0 left-0' style={{ position: 'relative', width: '100%', height: 'max', overflow: 'visible' }}>
            {React.Children.map(children, (child, index) => (
                <ResponsiveChild
                    key={index}
                    speed={Math.random() * 0.1 + 0.05}
                    direction={directions[index % directions.length]}
                >
                    {({ x, y }) => (
                        <div style={{ position: 'absolute', transform: `translate(${x}px, ${y}px)` }}>
                            {child}
                        </div>
                    )}
                </ResponsiveChild>
            ))}
        </div>
    );
};

export default MouseResponsiveContainer;