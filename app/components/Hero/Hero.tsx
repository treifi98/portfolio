'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import Meme from '@components/Meme'
import Video from '@components/Video'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
interface Props { }

function Hero(props: Props) {
    const [hoveredSe, setHoveredSe] = React.useState(false)
    const [hoveredImg, setHoveredImg] = React.useState(false)
    const [hoveredUi, setHoveredUi] = React.useState(false)
    const [hoveredDubai, setHoveredDubai] = React.useState(false)

    const tl1 = useRef(gsap.timeline())
    useGSAP(() => {
        tl1.current
            .to('.vid2', {
                rotate: '-80deg',
                y: '-50vw',
                x: '-100vw',
                scrollTrigger: {
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 2,
                    trigger: '.hero',
                    // markers: true,
                }
            })
            .to('.vid1', {
                rotate: '80deg',
                y: '-50vw',
                x: '100vw',
                scrollTrigger: {
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 2,
                    trigger: '.hero',
                    // markers: true,
                }
            })
    })
    return (
        <>
            <div className='w-[100vw] relative overflow-x-clip h-max '>

                <div className=' relative h-[calc(100vh-200px)] w-full flex justify-center items-center font-[Josef] z-[9] '>
                    <div className='text-[60px] w-[50%] mx-auto text-center font-semibold mt-[-100px]'>
                        Hi!, I’m&nbsp;
                        <span className='underline ' onMouseOver={() => setHoveredImg(true)} onMouseLeave={() => setHoveredImg(false)}>Abdullatif Treifi </span>,
                        a Syrian&nbsp;
                        <span className='underline ' onMouseOver={() => setHoveredSe(true)} onMouseLeave={() => setHoveredSe(false)}>Software Engineer </span>
                        &&nbsp;
                        <span className='underline ' onMouseOver={() => setHoveredUi(true)} onMouseLeave={() => setHoveredUi(false)}>UI/UX Designer </span>
                        currently living in&nbsp;
                        <span className='underline ' onMouseOver={() => setHoveredDubai(true)} onMouseLeave={() => setHoveredDubai(false)}>Dubai</span>.
                    </div>
                </div>
                <Meme img='/sem.webp' top='top-[calc(100%-100px)]' left='left-[calc(100%-100px)]' delay='delay-0' display={hoveredSe} />
                <Meme img='/sem.webp' top='top-[70%]' left='left-[calc(100%-250px)]' width='w-[500px]' height='h-[80%]' delay='delay-0' display={hoveredImg} />
                <Meme img='/uiux.webp' top='top-[calc(100%-100px)]' left='left-[calc(100%-100px)]' delay='delay-0' display={hoveredUi} />
                <Meme img='/burjkhalifa.webp' top='top-[300px]' left='left-[100px]' delay='delay-0' display={hoveredDubai} />
                <div className='!mix-blend-multiply'>

                    <Meme img='/falcon.gif' top='top-[300px]' left='left-[calc(100%-100px)]' delay='delay-[0.15s]' display={hoveredDubai} />
                </div>

                <Meme img='/karak.gif' top='top-[calc(100%-100px)]' left='left-[100px]' delay='delay-[0.25s]' display={hoveredDubai} />
                <Meme img='/sky.gif' top='top-[calc(100%-100px)]' left='left-[calc(100%-100px)]' delay='delay-[0.35s]' display={hoveredDubai} />
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
