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


const projects = [
  {
    title: 'proj1',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis tempora alias facilis incidunt, atque, harum fugiat tenetur rem voluptate blanditiis, quis eveniet minima libero iste corporis quod sunt sed expedita.',
    img: '/proj1.jpg',
    id: '1'
  },
  {
    title: 'proj2',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis tempora alias facilis incidunt, atque, harum fugiat tenetur rem voluptate blanditiis, quis eveniet minima libero iste corporis quod sunt sed expedita.',
    img: '/proj2.jpg',
    id: '2'
  },
  {
    title: 'proj3',
    desc: 'desc3',
    img: '/proj3.jpg',
    id: '3'
  },
  {
    title: 'proj4',
    desc: 'desc4',
    img: '/proj4.jpg',
    id: '4'
  }
]

export default function Home() {


  const tl1 = useRef(gsap.timeline())
  // const clientsec = useRef(null)

  useGSAP(() => {
    // const isMobile = window.innerWidth <= 768; // You can adjust the breakpoint as needed
    // const staggerValue = isMobile ? 0.5 : 0.1; // Increase the stagger value for mobile screens
    // const moveValue = isMobile ? -80 : -200; // Increase the stagger value for mobile screens
    // Select all sections within the container
    // const sections = gsap.utils.toArray(".section");

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

    // Create ScrollTrigger for each section
    // sections.forEach((section, index) => {
    //     ScrollTrigger.create({
    //         trigger: section as gsap.DOMTarget,
    //         start: "top top",
    //         end: "+=100%",
    //         pin: true,
    //         pinSpacing: false,
    //         scrub: true,

    //         // markers: false,
    //         // snap: 1,
    //     });
    // });
    // tl1.current
    //   .fromTo('.reveal',
    //     { opacity: 0.8 },
    //     {
    //       opacity: 0,
    //       scrollTrigger: {
    //         start: 'top top',
    //         end: 'center top',
    //         scrub: true,
    //         trigger: '.aboutint3',
    //         // markers: true,
    //         pin: 'reveal',
    //         pinSpacing: false
    //       }
    //     }
    //   )

    // projects.forEach((project, index) => {
    //   tl1.current
    //     .to(`.proj${project.id}`,
    //       {
    //         scale: 1,
    //         y: '0',
    //         top: '0',
    //         scrollTrigger: {
    //           start: `${index*200}px bottom`,
    //           end: `bottom top`,
    //           scrub: true,
    //           trigger: `.proj${project.id}`,
    //           markers: true,
    //           pin: '.xcx',
    //           // pinSpacing: false
    //           // pinnedContainer: ".cont"

    //         }
    //       }
    //     )

    // })




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
        <div className="w-full h-max relative mt-[400px] lap:mt-[400px] " id="about">
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
      {/* <div className="w-full h-[100vh] bg-primary"></div> */}
      <BG />
    </>
  );
}
