'use client'
import Image from "next/image";
import Header from "./components/Header/Header";
import Meme from "./components/Meme/Meme";
import useLenis from "./hooks/useLenis";
import ProjectCard from "./components/projectCard/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
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

    tl1.current.to('.projectcard',{
      scale:1,
      top:'0px',
      scrollTrigger:{
        start:'top top',
        end:'4000px top',
        scrub:true,
        trigger:'.mainxcx',
        // markers:true,
        pin:'.mainxcx',
        pinnedContainer:'.mainxcx',
      
        // pinSpacing:false
      },
      stagger:0.7
    })
    tl1.current.to('.xxy',{
      rotate:0,
      // top:'0px',
      scrollTrigger:{
        start:'top top',
        end:'4000px top',
        scrub:true,
        trigger:'.mainxcx',
        // markers:true,
        // pin:'.mainxcx',
        // pinnedContainer:'.mainxcx',
      
        // pinSpacing:false
      },
      stagger:0.7
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

  useLenis();
  return (
    <>
      <div className="bg-[#ccc]">

        <div className="w-full h-[100vh] relative">

          <Header />
          <div className="h-[calc(100vh-200px)]  w-full overflow-hidden">
            <div className="w-max mx-auto text-[100px] font-bold mt-[50px] text-center leading-[100%]">
              InnovAtive
              <br />
              FlUtteR EnGineeR
            </div>
            <div className="w-max mx-auto text-[30px] font-bold mt-[40px]">
              Co-Creator Of Daily Deploy
            </div>
            <div className="w-[200px] mx-auto h-max flex flex-col justify-center items-start absolute left-[50%] translate-x-[-50%] bottom-0">
              <div className="flex gap-[5px] items-center">
                <div className="rounded-full bg-[#000] aspect-square w-[15px] font-['rubik']"></div>
                <div className="font-['rubik'] text-[20px]">

                  I'M ABDULHADI
                </div>
              </div>
              <div className="w-full aspect-[1/1.2] mt-[0px] relative rounded-md">
                <Image
                  src={"/jo3.webp"}
                  alt=""
                  fill={true}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-max  overflow-hidden z-[3]">
          <Meme />
        </div>
        <div className="relative w-full h-max  mt-[600px] mainxcx overflow-hidden">
          <div className="w-max flex gap-[20px] mx-auto justify-center items-center  z-[3]">
            <div className="font-[rubik] h-min text-right">
              Some<br /> Featured
            </div>
            <div className="w-max mx-auto text-[100px] font-bold">
              PROJECTS
            </div>
            <div className="font-['rubik'] text-left">
              Flutter<br /> Applications
            </div>
          </div>

          <div className="w-full h-[100vh] overflow-hidden mt-[50px] relative xcx">
              {
                projects.map((project, index) => (
                  <div className="absolute  left-[50%] translate-x-[-50%] scale-0 projectcard rotate-45 transform-gpu" style={{ top:`${(index+1)*1000}px`,marginTop:`${index*20}px` }}>

                    <ProjectCard key={index} project={project} />
                  </div>
                ))
              }
          </div>

        </div>
        <div className="w-full h-[100vh] bg-[#ddd]">

        </div>

      </div>
    </>
  );
}
