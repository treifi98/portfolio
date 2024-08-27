'use client'
import Link from 'next/link'
import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from '../Button';
import Contact from '../Contact';
import Logo from '../Logo';
import Menue from '../Menue';
gsap.registerPlugin(ScrollTrigger);

interface Props { }

function Header(props: Props) {

    const [hovered, setHovered] = React.useState(false)
    const hi = useRef<HTMLDivElement>(null)
    useGSAP(() => {
        if (hovered) {
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
        else {

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
    const [conatct, setContact] = React.useState(0)
    const handleContact = () => {
        setContact((prev) => (prev + 1))
    }
    return (
        <>
            <div className='bg-primary w-full h-[200px] flex items-center justify-between px-[20px] tab:px-[80px] relative z-[10] ' id="main">
                <div>
                    {/* <img src='/logo.svg' alt='logo' className='w-[100px]' /> */}
                    <div className='w-[70px] tab:w-[100px]'>

                        <Logo />
                    </div>
                </div>
                {/* <div className='text-[18px] text-center relative bg-[#ccc]  py-[5px] px-[20px] font-["rubik"] cursor-pointer z-[999] group' onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                    <div className='w-full h-full bg-[#00668C] absolute top-[5px] left-[5px] group-hover:left-0 group-hover:top-0 transition-all duration-[0.3s]'></div>
                    <div className='w-full h-full bg-primary absolute top-0 left-0 border-[#000] border-[2px]'></div>
                    <div className='relative'>

                        Say Hi!
                    </div>
                </div> */}
                <div className='w-[80px] tab:w-[100px] aspect-[2.2/1] ' onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={handleContact}>
                    <Button bg='bg-primary' secondBg='bg-secondary' >
                        <div className='text-[18px] tab:text-[20px]'>

                            Say Hi!
                        </div>
                    </Button>
                </div>
                <Menue />
            </div>
            <div className='w-full tab:w-[500px] aspect-[1.3/1] bg-primary  absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] scale-[0] opacity-0 overflow-hidden z-[99]' ref={hi} >
                <img src="/wazup.webp" alt="" className='w-full h-full object-cover object-center' />
            </div>

            <Contact status={conatct} />


        </>
    )
}

export default Header
