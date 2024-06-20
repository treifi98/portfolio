'use client'
import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
// import LottieAnimation from '../LottieAnimation';
import animationData from '../assets/activate.json'; // Adjust the path to your animation JSON file
import passionanimation from '../assets/passion.json'; // Adjust the path to your animation JSON file
import winkanimation from '../assets/wink.json'; // Adjust the path to your animation JSON file
import webanimation from '../assets/web-browser.json'; // Adjust the path to your animation JSON file
import smartanimation from '../assets/smart.json'; // Adjust the path to your animation JSON file
import dumbbellanimation from '../assets/dumbbell.json'; // Adjust the path to your animation JSON file
gsap.registerPlugin(ScrollTrigger);
import dynamic from 'next/dynamic'

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

    return (
        <>
            <div className="w-[calc(100%-400px)] mx-auto text-[55px] mt-[100px] font-['rubik'] leading-[110%]">
                <span className="underline  underline-offset-[10px] decoration-[1px]" onMouseOver={() => handleHover('/chandler.webp')} onMouseLeave={() => setHovered(false)}>
                    Could I <span className='italic'>be</span> any more of a Mobile App Developer?
                </span>

                &nbsp;With my 3 years of experience in Flutter, I've somehow managed to develop and launch over 10 apps on both Google Play and the App Store
                <span className='w-[60px] h-[60px] overflow-hidden' onMouseOver={() => handleHover('/wow.webp')} onMouseLeave={() => setHovered(false)}>

                    <LottieAnimation
                        animationData={dumbbellanimation}
                        width={60}
                        height={60}
                        className='inline-block w-[60px] h-[60px] object-cover p-0 m-0'
                    />
                </span>
                . My days are just a thrilling rollercoaster of mobile app development—it's not just a job, it's a genuine passion that I can't escape.
                <span className='w-[60px] h-[60px] overflow-hidden' onMouseOver={() => handleHover('/passion2.webp')} onMouseLeave={() => setHovered(false)}>

                    <LottieAnimation
                        animationData={passionanimation}
                        width={60}
                        height={60}
                        className='inline-block w-[60px] h-[60px] object-cover p-0 m-0'
                    />
                </span>
                <span className='mt-[60px] inline-block' >
                    I'm always eager to learn and grow because, obviously, achieving excellence in this ever-changing field is a walk in the park.
                    <span className='w-[60px] h-[60px] overflow-hidden' onMouseOver={() => handleHover('/laughchan.webp')} onMouseLeave={() => setHovered(false)}>

                        <LottieAnimation
                            animationData={winkanimation}
                            width={60}
                            height={60}
                            className='inline-block w-[60px] h-[60px] object-cover p-0 m-0'
                        />
                    </span>
                    I often work with my web buddy, <a className='italic underline decoration-[1px]' href='https://abdullatiftreifi.com' target='_blank' onMouseOver={() => handleHover('/rossdoor.webp')} onMouseLeave={() => setHovered(false)}>Abdullatif</a>—the epitome of cool web developers
                    <span className='w-[60px] h-[60px] overflow-hidden' onMouseOver={() => handleHover('/web2.webp')} onMouseLeave={() => setHovered(false)}>

                        <LottieAnimation
                            animationData={webanimation}
                            width={60}
                            height={60}
                            className='inline-block w-[60px] h-[60px] object-cover p-0 m-0'
                        />
                    </span>
                    . Together, we created <a href='https://dailydeploy.blog' target='_blank' className='font-bold italic'>Daily Deploy</a>, a tech blog that takes all those ridiculously complicated web and mobile dev topics and makes them seem almost understandable
                    <span className='w-[60px] h-[60px] overflow-hidden' onMouseOver={() => handleHover('/unagi.webp')} onMouseLeave={() => setHovered(false)}>

                        <LottieAnimation
                            animationData={smartanimation}
                            width={60}
                            height={60}
                            className='inline-block w-[60px] h-[60px] object-cover p-0 m-0'
                        />
                    </span>
                    .&nbsp;
                    <span className='underline decoration-[1px] underline-offset-[10px]' onMouseOver={() => handleHover('/awosome.webp')} onMouseLeave={() => setHovered(false)}>
                        Could we <span className='italic'>be</span> any more awesome?
                    </span>
                </span>
            </div>
            <div className="fixed w-0 h-0 right-0 bottom-0" ref={meme}>
                <div className='w-full h-full relative'>
                    <Image
                        src={src}
                        alt=""
                        layout='fill'
                        objectFit='cover'
                    />

                </div>

            </div>
        </>
    )
}

export default Meme
