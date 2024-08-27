'use client'
import React, { useState, useEffect, useCallback } from 'react'
import TechCircle from './TechCircle'

interface Props { }

function Fun(props: Props) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        });
    }, []);

    const calculateOffset = (speed: number, direction: 'follow' | 'opposite' | 'perpendicular') => {
        const centerX = 45 * 16 / 2; // Assuming 1rem = 16px, and width is 45rem
        const centerY = 45 * 16 / 2; // Assuming square aspect ratio
        const dx = mousePosition.x - centerX;
        const dy = mousePosition.y - centerY;

        switch (direction) {
            case 'follow':
                return { x: dx * speed, y: dy * speed };
            case 'opposite':
                return { x: -dx * speed, y: -dy * speed };
            case 'perpendicular':
                return { x: dy * speed, y: -dx * speed };
        }
    };

    return (
        <div className='mx-auto p-[50px] w-fit mt-[250px] h-max mb-[30px]' onMouseMove={handleMouseMove}>
            <div className='relative w-[50vw] min-w-[300px] h-0 pb-[45vw] mx-auto'>
                <div className='absolute top-0 left-0 w-full h-full bg-[red]'>
                    <TechCircle />
                </div>

                <div className='w-[30px] tab:w-[70px] aspect-auto absolute top-[90%] tab:top-[60%] left-[30%] mix-blend-luminosity' style={{
                    transform: `translate(${calculateOffset(0.05, 'follow').x}px, ${calculateOffset(0.05, 'follow').y}px)`
                }}>
                    <img src="/comp4.webp" alt="" className='w-full h-full !mix-blend-luminosity' />
                </div>

                <div className='w-[30px] tab:w-[70px] aspect-auto absolute top-[50%] tab:top-[30%] right-[30%] mix-blend-multiply ' style={{
                    transform: `translate(${calculateOffset(0.03, 'opposite').x}px, ${calculateOffset(0.03, 'opposite').y}px)`
                }}>
                    <img src="/qr.svg" alt="" className='w-full h-full  ' />
                </div>

                <div className='absolute top-0 left-0 w-full h-full'>
                    <div className='relative w-full h-full top-0 left-0 flex justify-center items-center '>
                        <img src="/moon.png" alt="" className='absolute w-[40%] tab:w-[50%] aspect-auto bottom-[-80%] tab:bottom-[-20%] left-[50%] translate-x-[-50%] ' style={{
                            transform: `translate(calc(-50% + ${calculateOffset(0.01, 'perpendicular').x}px), ${calculateOffset(0.01, 'perpendicular').y}px)`
                        }} />
                        <img src="/ast.png" alt="" className='relative w-[20%] bottom-[-50%] tab:bottom-0 tab:w-[25%]' style={{
                            transform: `translate(${calculateOffset(0.02, 'follow').x}px, ${calculateOffset(0.02, 'follow').y}px)`
                        }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fun