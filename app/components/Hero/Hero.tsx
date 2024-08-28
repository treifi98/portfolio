'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import Meme from '@components/Meme'
import Video from '@components/Video'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LottieAnimation from '../LottieAnimation'
import scroll from '@assets/scroll.json'; // Adjust the path to your animation JSON file

gsap.registerPlugin(ScrollTrigger);
interface Props { }

function Hero(props: Props) {
    const [hoveredSe, setHoveredSe] = React.useState(false)
    const [hoveredSc, setHoveredSc] = React.useState(false)
    const [hoveredImg, setHoveredImg] = React.useState(false)
    const [hoveredUi, setHoveredUi] = React.useState(false)
    const [hoveredDubai, setHoveredDubai] = React.useState(false)

    const tl1 = useRef(gsap.timeline())
    useGSAP(() => {
        // tl1.current
        //     .to('.vid2', {
        //         rotate: '-80deg',
        //         y: '-50vw',
        //         x: '-100vw',
        //         scrollTrigger: {
        //             start: 'top top',
        //             end: 'bottom top',
        //             scrub: 2,
        //             trigger: '.hero',
        //             // markers: true,
        //         }
        //     })
        //     .to('.vid1', {
        //         rotate: '80deg',
        //         y: '-50vw',
        //         x: '100vw',
        //         scrollTrigger: {
        //             start: 'top top',
        //             end: 'bottom top',
        //             scrub: 2,
        //             trigger: '.hero',
        //             // markers: true,
        //         }
        //     })
        tl1.current
            .from('.hword', {
                opacity: 0,
                // y: -70,
                stagger: 0.35,
                // duration: 1,
                delay: 1.7,
                ease: "power4.inOut",
            })
    })
    return (
        <>
            <div className='w-[100vw] relative overflow-x-clip h-max '>
                <div className='w-[100vw] h-full fixed z-[1] top-0 left-0'></div>

                <div className=' relative h-[calc(100vh-150px)] tab:h-[calc(100vh-200px)] w-full flex justify-center items-center font-body z-[9] '>
                    <div className='text-[35px] tab:text-[60px] w-[80%] amer:w-[40%] max-w-[786px] mx-auto text-center font-normal mt-[-100px]'>
                        <span className='font-headings font-normal text-secondary hword'>Hi</span>
                        <span className='hword'>
                            ,

                            I’m&nbsp;
                        </span>
                        <span className='relative' onMouseOver={() => setHoveredImg(true)} onMouseLeave={() => setHoveredImg(false)}>
                            <span className='hword'>Abdullatif&nbsp;</span>
                            <span className='hword'>
                                Treifi,
                                <span className='w-full h-[1px] bg-[#000] bottom-[5px] absolute left-0'></span>
                            </span>
                        </span>
                        &nbsp;
                        <br />
                        <span className='relative' onMouseOver={() => setHoveredSe(true)} onMouseLeave={() => setHoveredSe(false)}>
                            <span className='hword'>
                                Software&nbsp;
                            </span>
                            <span className='hword'>

                                Engineer&nbsp;
                                <span className='w-full h-[1px] bg-[#000] bottom-[5px] absolute left-0'></span>
                            </span>
                        </span>
                        <span className='hword'>

                            &&nbsp;
                        </span>
                        <span className='relative w-max' onMouseOver={() => setHoveredUi(true)} onMouseLeave={() => setHoveredUi(false)}>
                            <span className='hword'>
                                <span className=' whitespace-nowrap hidden tab:inline-block'>

                                    UI/UX
                                </span>
                                <br />
                                &nbsp;
                                <span className='w-full h-[1px] bg-[#000] bottom-[5px] absolute left-0'></span>
                            </span>

                            <span className='hword relative inline-block'>
                                <span className=' whitespace-nowrap inline-block tab:hidden'>

                                    UI/UX &nbsp;
                                </span>
                                Designer&nbsp;
                                <span className='w-full h-[1px] bg-[#000] bottom-[5px] absolute left-0'></span>
                            </span>
                        </span>
                        <span className='hword'>
                            currently&nbsp;
                        </span>
                        <span className='hword'>
                            living in&nbsp;
                        </span>
                        <span className='relative' onMouseOver={() => setHoveredDubai(true)} onMouseLeave={() => setHoveredDubai(false)}>
                            <span className='hword'>
                                Dubai
                                <span className='w-full h-[1px] bg-[#000] bottom-[5px] absolute left-0'></span>
                                .
                            </span>
                        </span>
                        {/* <div className='text-[30px] text-center font-[rubik] '>
                            scroll
                        </div> */}
                        <div className='rotate-[-90deg] origin-center w-[60px] mx-auto hword object-cover' onMouseOver={() => setHoveredSc(true)} onMouseLeave={() => setHoveredSc(false)}>
                            <LottieAnimation
                                animationData={scroll}
                                width={60}
                                height={60}
                                className='inline-block w-[30px] h-[30px] lap:w-[60px] lap:h-[60px] object-cover p-0 m-0 mb-[-10px]'
                            />
                        </div>
                    </div>
                </div>
                <div className='hidden tab:block'>

                    <Meme img='/sem.webp' top='top-[calc(100%-100px)]' left='left-[calc(100%-100px)]' delay='delay-0' display={hoveredSe} />
                </div>
                <div className='mix-blend-difference hidden tab:block'>

                    <Meme img='/scroll-space.webp' top='top-[calc(100%-100px)]' left='left-[calc(100%-100px)]' delay='delay-0' display={hoveredSc} />
                </div>
                <div className='mix-blend-multiply hidden tab:block'>

                    <Meme img='/obada.png' top='top-[70%]' left='left-[calc(100%-250px)]' width='w-[700px]' height='h-[80%]' delay='delay-0' display={hoveredImg} />
                </div>
                <div className='hidden tab:block'>

                    <Meme img='/uiux.webp' top='top-[calc(100%-100px)]' left='left-[calc(100%-100px)]' delay='delay-0' display={hoveredUi} />
                </div>
                <div className='!mix-blend-exclusion opacity-[0.9]  hidden tab:block'>

                    <Meme img='/bkhalifa.webp' top='top-[300px]' left='left-[200px]' delay='delay-0' display={hoveredDubai} />
                </div>
                {/* <div className='!mix-blend-multiply'>

                    <Meme img='/falcon.gif' top='top-[300px]' left='left-[calc(100%-200px)]' delay='delay-[0.2s]' display={hoveredDubai} />
                </div> */}
                <div className='hidden tab:block'>

                    <Meme img='/tea2.gif' top='top-[300px]' left='right-[200px]' delay='delay-[0.4s]' width='w-[150px]' display={hoveredDubai} />
                </div>
                {/* <Meme img='/sky.gif' top='top-[calc(100%-100px)]' left='left-[calc(100%-100px)]' delay='delay-[0.6s]' display={hoveredDubai} /> */}
                {/* <div className='absolute bottom-[-50px] rotate-[10deg] left-[42%] translate-x-[-50%] vid1 z-[99999]'>
                    <Video vid='/vidlsc.mp4' />
                </div>
                <div className='absolute bottom-[-50px] rotate-[-10deg] left-[58%] translate-x-[-50%] vid2 z-[99999]'>
                    <Video vid='/vidlsc.mp4' />
                </div> */}
            </div>

        </>
    )
}

export default Hero
