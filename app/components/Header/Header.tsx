'use client'
import Link from 'next/link'
import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface Props { }

function Header(props: Props) {

    const [hovered, setHovered] = React.useState(false)
    const hi = useRef<HTMLDivElement>(null)
    useGSAP(() => {
        if(hovered) {
            gsap.to(
                hi.current,

                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.inOut",
                }
            )
        }
        else{
            
            gsap.to(
                hi.current,
    
                {
                    opacity: 0,
                    scale: 0,
                    duration: 0.2,
                    ease: "power2.inOut",
                }
            )

        }
    }, [hovered])

    return (
        <>
            <div className='bg-[#ccc] w-full h-[200px] flex items-center justify-between px-[80px]'>
                <div>
                    <img src='/logo.svg' alt='logo' className='w-[100px]' />
                </div>
                <div className='text-[18px] text-center rounded-full border-[#000] border-[2px] py-[5px] px-[20px] font-["rubik"]' onMouseOver={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
                    Say Hi!
                </div>
                <div className='w-[100px] flex flex-col justify-between items-center h-[20px]'>
                    <div className='w-full h-[5px] bg-[#000]'></div>
                    <div className='w-full h-[5px] bg-[#000]'></div>
                </div>
            </div>
            <div className='w-[500px] aspect-[1.3/1] bg-[red] rounded-md absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] scale-[0] opacity-0 overflow-hidden' ref={hi} >
                <img src="/rach.webp" alt="" className='w-full h-full object-cover object-center' />
            </div>
        </>
    )
}

export default Header
