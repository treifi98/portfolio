'use client'

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface MagneticEffectProps {
    speed: number;
    direction: 'follow' | 'opposite' | 'perpendicular';
    className?: string;
}

export function withMagneticEffect<P extends object>(
    WrappedComponent: React.ComponentType<P>
) {
    return function MagneticComponent({
        speed,
        direction,
        className = '',
        ...props
    }: P & MagneticEffectProps) {
        const elementRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            const element = elementRef.current;
            if (!element) return;

            const parent = element.closest('.magnet-container') as HTMLElement;
            if (!parent) return;

            const moveElement = (e: MouseEvent) => {
                const rect = parent.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const distanceX = e.clientX - centerX;
                const distanceY = e.clientY - centerY;

                let moveX = distanceX * speed;
                let moveY = distanceY * speed;

                if (direction === 'opposite') {
                    moveX *= -1;
                    moveY *= -1;
                } else if (direction === 'perpendicular') {
                    [moveX, moveY] = [-moveY, moveX];
                }

                gsap.to(element, {
                    x: moveX,
                    y: moveY,
                    duration: 0.3,
                });
            };

            parent.addEventListener('mousemove', moveElement);

            return () => {
                parent.removeEventListener('mousemove', moveElement);
            };
        }, [speed, direction]);

        return (
            <div ref={elementRef} className={`magnet-nested-element ${className}`}>
                <WrappedComponent {...(props as P)} />
            </div>
        );
    };
}
