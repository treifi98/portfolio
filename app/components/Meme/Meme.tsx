'use client'
import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
// import LottieAnimation from '../LottieAnimation';

import wow from '@assets/wow.json'; // Adjust the path to your animation JSON file
import compfun from '@assets/compfun.json'; // Adjust the path to your animation JSON file
import coffe from '@assets/coffee.json'; // Adjust the path to your animation JSON file
import overthinking from '@assets/overthinking.json'; // Adjust the path to your animation JSON file
import smart from '@assets/smart.json'; // Adjust the path to your animation JSON file
import galaxy from '@assets/galaxy.json'; // Adjust the path to your animation JSON file
import call from '@assets/call.json'; // Adjust the path to your animation JSON file
import design from '@assets/design.json'; // Adjust the path to your animation JSON file
import dev from '@assets/dev.json'; // Adjust the path to your animation JSON file
gsap.registerPlugin(ScrollTrigger);
import dynamic from 'next/dynamic'
import Button from '../Button';
import Contact from '../Contact';

const LottieAnimation = dynamic(
    () => import('../LottieAnimation'),
    { ssr: false }
)

interface Props { }

function Meme(props: Props) {
    const [hovered, setHovered] = React.useState(false)
    const [src, setSrc] = React.useState('/chandler.webp')

    const meme = useRef<HTMLDivElement>(null)
    useGSAP(() => {
        if (hovered) {
            gsap.to(
                meme.current,

                {
                    width: '200px',
                    height: '200px',
                    duration: 0.4,
                    ease: "power2.inOut",
                }
            )
        }
        else {

            gsap.to(
                meme.current,

                {
                    width: '0%',
                    height: '0%',
                    duration: 0.4,
                    ease: "power2.inOut",
                }
            )

        }
    }, [hovered])

    const handleHover = (img: string) => {
        setHovered(true)
        setSrc(img)
    }

    const [conatct, setContact] = React.useState(0)
    const handleContact = () => {
        setContact((prev) => (prev + 1))
    }
    return (
        <>
            <div className="w-[calc(100vw-40px)] lap:w-[calc(100%-300px)] mx-auto text-[18px] md:text-[30px] lap:text-[55px] font-body leading-[110%] relative h-max lap:mt-[20px] text-center z-[2]">
                <span className='block'>

                    <span className="  " >
                        Welcome to my little corner of the internet.
                        <span className='hidden tab:inline-block w-[30px] h-[30px] lap:w-[60px] lap:h-[60px] overflow-hidden' onMouseOver={() => handleHover('/funnycomputer.webp')} onMouseLeave={() => setHovered(false)}>
                            <LottieAnimation
                                animationData={smart}
                                width={60}
                                height={60}
                                className='inline-block w-[30px] h-[30px] lap:w-[60px] lap:h-[60px] object-cover p-0 m-0 mb-[-10px]'
                            />
                        </span>
                    </span>
                    <span className='lap:hidden inline-block w-[30px] h-[30px] lap:w-[60px] lap:h-[60px] overflow-hidden' onMouseOver={() => handleHover('/funnycomputer.webp')} onMouseLeave={() => setHovered(false)}>
                        <LottieAnimation
                            animationData={smart}
                            width={30}
                            height={30}
                            className='inline-block w-[30px] h-[30px] lap:w-[60px] lap:h-[60px] object-cover p-0 m-0 mb-[-20px]'
                        />
                    </span>
                </span>
                <span>
                    No, it's not as fancy as Space Jam's website
                </span>
                <span className='hidden tab:inline-block w-[30px] h-[30px] lap:w-[60px] lap:h-[60px] overflow-hidden' onMouseOver={() => handleHover('/spacejam.gif')} onMouseLeave={() => setHovered(false)}>
                    <LottieAnimation
                        animationData={galaxy}
                        width={60}
                        height={60}
                        className='inline-block w-[30px] h-[30px] lap:w-[60px] lap:h-[60px] object-cover p-0 m-0 mb-[-10px]'
                    />
                </span>
                <span className=''>
                    <span className='lap:hidden inline-block w-[30px] h-[30px] lap:w-[60px] lap:h-[60px] overflow-hidden' onMouseOver={() => handleHover('/spacejam.gif')} onMouseLeave={() => setHovered(false)}>
                        <LottieAnimation
                            animationData={galaxy}
                            width={30}
                            height={30}
                            className='inline-block w-[30px] h-[30px] lap:w-[60px] lap:h-[60px] object-cover p-0 m-0 mb-[-20px]'
                        />
                    </span>
                    <span className=''>
                        ,&nbsp;but hey, I'm working on it.
                    </span>
                </span>

                <span className='block mt-[35px] lap:mt-[50px]'>

                    &nbsp;<span className='italic font-bold '>What do I do?</span>

                    <span>
                        &nbsp;
                        I'm a full-stack engineer, UI/UX and graphic designer based in Dubai. Basically, I Design Posters, Adds and Logos.
                    </span>
                    <span className='lap:mb-[-10px] hidden tab:inline-block w-[30px] h-[30px] lap:w-[60px] lap:h-[60px] overflow-hidden' onMouseOver={() => handleHover('/design.webp')} onMouseLeave={() => setHovered(false)}>

                        <LottieAnimation
                            animationData={design}
                            width={60}
                            height={60}
                            className='inline-block w-[30px] h-[30px] lap:w-[60px] lap:h-[60px] object-cover p-0 m-0 mb-[-10px]'
                        />
                    </span>
                    <span className='mt-[35px] block'>
                        I also design and develop web platforms from an initial concept and wireframes to a fully functional websites/web apps.
                    <span className='lap:mb-[-10px] hidden tab:inline-block w-[30px] h-[30px] lap:w-[60px] lap:h-[60px] overflow-hidden' onMouseOver={() => handleHover('/chandler.webp')} onMouseLeave={() => setHovered(false)}>

                        <LottieAnimation
                            animationData={dev}
                            width={60}
                            height={60}
                            className='inline-block w-[30px] h-[30px] lap:w-[60px] lap:h-[60px] object-cover p-0 m-0 mb-[-10px]'
                        />
                    </span>
                    </span>
                    <span className='lap:hidden inline-block w-[30px] h-[30px] lap:w-[60px] lap:h-[60px] overflow-hidden' onMouseOver={() => handleHover('/chandler.webp')} onMouseLeave={() => setHovered(false)}>

                        <LottieAnimation
                            animationData={coffe}
                            width={30}
                            height={30}
                            className='inline-block w-[30px] h-[30px] lap:w-[60px] lap:h-[60px] object-cover p-0 m-0 mb-[-20px]'
                        />
                    </span>
                </span>


                <span className='block mt-[35px] lap:mt-[50px]'>

                    &nbsp;<span className='font-bold'>Want to work together?
                    </span>
                    <span>
                        &nbsp;
                        If you want a website or a design that looks good and actually works (crazy concept, I know),
                    </span>
                    <span className='hidden tab:inline-block w-[30px] h-[30px] lap:w-[60px] lap:h-[60px] overflow-hidden' onMouseOver={() => handleHover('/wow.webp')} onMouseLeave={() => setHovered(false)}>

                        <LottieAnimation
                            animationData={wow}
                            width={60}
                            height={60}
                            className='inline-block w-[30px] h-[30px] lap:w-[60px] lap:h-[60px] object-cover p-0 m-0 mb-[-10px]'
                        />
                    </span>
                    <span className='lap:hidden inline-block w-[30px] h-[30px] lap:w-[60px] lap:h-[60px] overflow-hidden' onMouseOver={() => handleHover('/wow.webp')} onMouseLeave={() => setHovered(false)}>

                        <LottieAnimation
                            animationData={wow}
                            width={30}
                            height={30}
                            className='inline-block w-[30px] h-[30px] lap:w-[60px] lap:h-[60px] object-cover p-0 m-0 mb-[-20px]'
                        />
                    </span>
                    <span>
                        &nbsp; then we should talk.
                    </span>
                    <span className='hidden tab:inline-block w-[30px] h-[30px] lap:w-[60px] lap:h-[60px] overflow-hidden' onMouseOver={() => handleHover('/call.gif')} onMouseLeave={() => setHovered(false)} onClick={handleContact}>

                        <LottieAnimation
                            animationData={call}
                            width={60}
                            height={60}
                            className='inline-block w-[30px] h-[30px] lap:w-[60px] lap:h-[60px] object-cover p-0 m-0 mb-[-10px]'
                        />
                    </span>
                    <span className='lap:hidden inline-block w-[30px] h-[30px] lap:w-[60px] lap:h-[60px] overflow-hidden' onMouseOver={() => handleHover('/call.gif')} onMouseLeave={() => setHovered(false)} onClick={handleContact}>

                        <LottieAnimation
                            animationData={call}
                            width={30}
                            height={30}
                            className='inline-block w-[30px] h-[30px] lap:w-[60px] lap:h-[60px] object-cover p-0 m-0 mb-[-20px]'
                        />
                    </span>
                </span>

            </div>
            <div className="fixed w-0 h-0 right-0 bottom-0 z-[9]" ref={meme}>
                <div className='w-full h-full relative' >
                    <Image
                        src={src}
                        alt=""
                        layout='fill'
                        objectFit='cover'
                    />

                </div>

            </div>
            <div className='w-[110px] lap:w-[140px] h-[40px] lap:h-[50px] mx-auto mb-[10px] mt-[35px] lap:mt-[30px]' onClick={handleContact}>
                <Button >
                    <div className='text-[16px] lap:text-[20px]'>
                        Get In Touch
                    </div>
                </Button>
            </div>
            <Contact status={conatct} />

        </>
    )
}

export default React.memo(Meme)
