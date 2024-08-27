import React, { useState, useEffect, useRef } from 'react';
// import curs from '@assets/fast-backward.json'
import dynamic from 'next/dynamic';

const LottieAnimation = dynamic(
    () => import('./LottieAnimation'),
    { ssr: false }
)

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateCursorPosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const checkForHoverableParent = (element: HTMLElement | null): boolean => {
            if (!element) return false;
            if (element.classList.contains('pointer-target')) return true;
            return checkForHoverableParent(element.parentElement);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (checkForHoverableParent(target)) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (checkForHoverableParent(target)) {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateCursorPosition);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', updateCursorPosition);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);



    const handleClick = () => {
        if (mouse.current) {

            mouse.current.style.scale = '2'
        }
    }

    const keyFrame = {
        transform: `translate(${position.x-12.5}px, ${position.y-12.5}px) rotate(45deg)`,
    }

    useEffect(() => {
        mouse.current?.animate(keyFrame, {
            duration: 700,
            fill: 'forwards',
        })
    }, [position])

    const mouse = useRef<HTMLDivElement>(null)

    return (
        <div
            className={` fixed pointer-events-none w-[25px]  bg-[#fff] aspect-square flex justify-center items-center z-[9999999999999] mix-blend-difference customc
                } `}
            // style={{
            //     left: `${position.x}px`,
            //     top: `${position.y}px`,
            //     transform: 'translate(-50%, -50%) rotate(45deg)',
            // }}
            ref={mouse}
            onClick={handleClick}
        >
            <div className={`w-full aspect-square `} >
            </div>
        </div>
    );
};

export default CustomCursor;