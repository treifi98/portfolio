'use client'
import Image from "next/image";
import Header from "@components/Header/Header";
import Meme from "@components/Meme/Meme";
import useLenis from "@hooks/useLenis";
import ProjectCard from "@components/projectCard/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import BG from "@components/BG/BG";
import Hero from "@components/Hero/Hero";
import Projects from "@components/Projects";
import Services from "./components/Services";
import CustomCursor from "./components/CustomeCursur";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ImageReveal from "./components/ImageReveal";
import Terminal from "./components/Terminal";
import Heading from "./components/Heading";
import Preload from "./components/preload";
import Fun from "./components/Fun";
gsap.registerPlugin(ScrollTrigger);



export default function Home() {


  const tl1 = useRef(gsap.timeline())

  useGSAP(() => {


    tl1.current.to('.projectcard', {
      scale: 1,
      top: '0px',
      scrollTrigger: {
        start: 'top top',
        end: '4000px top',
        scrub: true,
        trigger: '.mainxcx',
        // markers:true,
        pin: '.mainxcx',
        pinnedContainer: '.mainxcx',

        // pinSpacing:false
      },
      stagger: 0.7
    })
    tl1.current.to('.xxy', {
      rotate: 0,
      // top:'0px',
      scrollTrigger: {
        start: 'top top',
        end: '4000px top',
        scrub: true,
        trigger: '.mainxcx',
        // markers:true,
        // pin:'.mainxcx',
        // pinnedContainer:'.mainxcx',

        // pinSpacing:false
      },
      stagger: 0.7
    })



  }, []);

  const [isPressed, setIsPressed] = useState(false)

  useLenis();
  return (
    <>
      <div className="bg-primary  main w-[100vw] overflow-x-clip" onMouseDown={() => setIsPressed(true)} onMouseUp={() => setIsPressed(false)}>
        <Preload />
        <CustomCursor />
        <div className="w-full h-[100vh] relative">

          <Header />
          <Hero />
        </div>
        <Projects />
        <div className="w-full h-max relative mt-[420px] lap:mt-[400px] " id="about">
          <Heading text='ABOUT ME' />
          <Meme />
        </div>
        <Services />
        {/* <div className="w-[100vw] h-[700px] relative">

          <ImageReveal  />
        </div> */}
        <div className="mt-[100px] lap:mt-[250px] relative z-[99]">

          <Fun />
        </div>
        <div className="relative z-[99] mt-[200px]">

          <Footer ispressed={isPressed} />
        </div>
        <Terminal />
      </div>
      <BG />
    </>
  );
}
