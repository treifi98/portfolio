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
            <div className="w-[calc(100%-400px)] mx-auto text-[55px]  font-['rubik'] leading-[110%] relative h-max">
                <span className="underline  underline-offset-[10px] decoration-[1px]" onMouseOver={() => handleHover('/chandler.webp')} onMouseLeave={() => setHovered(false)}>
                    Welcome to my little corner of the internet.No, it's not as fancy as Mint Mobile's website, but hey, I'm working on it.
                </span>

                &nbsp;<br /><span className='font-bold'>What do I do?</span>
                {/* <span className='w-[60px] h-[60px] overflow-hidden' onMouseOver={() => handleHover('/wow.webp')} onMouseLeave={() => setHovered(false)}>

                    <LottieAnimation
                        animationData={dumbbellanimation}
                        width={60}
                        height={60}
                        className='inline-block w-[60px] h-[60px] object-cover p-0 m-0'
                    />
                </span> */}
                <span>
                    &nbsp;
                    I'm a full-stack engineer and UI/UX designer based in Dubai. Basically, I make computers do pretty things that are also functional.
                </span>
                <span className='w-[60px] h-[60px] overflow-hidden' onMouseOver={() => handleHover('/funnycomputer.webp')} onMouseLeave={() => setHovered(false)}>

                    <LottieAnimation
                        animationData={compfun}
                        width={60}
                        height={60}
                        className='inline-block w-[60px] h-[60px] object-cover p-0 m-0'
                    />
                </span>
                <span>
                    &nbsp; It's like being a magician, but instead of pulling rabbits out of hats, I pull websites out of caffeine-induced coding sessions.
                </span>
                <span className='w-[60px] h-[60px] overflow-hidden' onMouseOver={() => handleHover('/chandler.webp')} onMouseLeave={() => setHovered(false)}>

                    <LottieAnimation
                        animationData={coffe}
                        width={60}
                        height={60}
                        className='inline-block w-[60px] h-[60px] object-cover p-0 m-0'
                    />
                </span>
                <span className='mt-[60px] inline-block' >
                    When I'm not making the internet a prettier place... I'm debating whether that button should be "Ocean Blue" or "Slightly Less Ocean Blue." It's a tough life, but someone's gotta live it.

                    <span className='w-[60px] h-[60px] overflow-hidden' onMouseOver={() => handleHover('/picky.webp')} onMouseLeave={() => setHovered(false)}>

                        <LottieAnimation
                            animationData={overthinking}
                            width={60}
                            height={60}
                            className='inline-block w-[60px] h-[60px] object-cover p-0 m-0'
                        />
                    </span>
                    &nbsp;<br /><span className='font-bold'>Want to work together?
                    </span>
                    <span>
                        &nbsp;
                        If you want a website that looks good and actually works (crazy concept, I know), 
                    </span>
                    <span className='w-[60px] h-[60px] overflow-hidden' onMouseOver={() => handleHover('/wow.webp')} onMouseLeave={() => setHovered(false)}>

                        <LottieAnimation
                            animationData={wow}
                            width={60}
                            height={60}
                            className='inline-block w-[60px] h-[60px] object-cover p-0 m-0'
                        />
                    </span>
                    <span>
                        &nbsp; then we should talk.
                    </span>
                    <span className='w-[60px] h-[60px] overflow-hidden' onMouseOver={() => handleHover('/chandler.webp')} onMouseLeave={() => setHovered(false)}>

                        <LottieAnimation
                            animationData={coffe}
                            width={60}
                            height={60}
                            className='inline-block w-[60px] h-[60px] object-cover p-0 m-0'
                        />
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

export default React.memo(Meme)
