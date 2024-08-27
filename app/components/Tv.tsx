import React, { useEffect, useState, useCallback, useRef } from 'react'
import Button from './Button'
import ProjDetails from './ProjDetails'
import Image from 'next/image'

interface Project {
    id: number;
    video?: string;
    image?: string;
    title?: string;
    logo?: string;
    tech?: string;
    desc?: string;
    logoWidth?: string;
    logoMt?: string;
    url?: string;
}

interface ProjDetailsProps {
    title: string;
    logo: string;
    tech: string;
    desc: string;
    logoWidth?: string;
    logoMt?: string;
    url?: string;
}

interface ButtonProps {
    text: string;
    bg: string;
    textColr: string;
    secondBg: string;
}

const projectData: Project[] = [
    { id: 1, video: '/vidlsc.mp4', title: 'LSC', logo: '/ilogo.svg', tech: 'NextJs, TailwindCss, TypeScript, Gsap, Prisma, AWS, RDS, NodeJs.', desc: `I led both the design and development of the website, creating the graphics and layout. The site showcases LSC's projects and includes a dashboard for easy content management. It also features dynamic animations for a more engaging user experience.`, url:'https://lsc-uae.com/interior' },
    { id: 2, video: '/lux.mp4', title: 'LUXRENOV', logo: '/luxrenove.svg', tech: 'NextJs, TailwindCss, TypeScript, Gsap, Prisma, AWS.', desc: `I managed both the design and development of this project, including the creation of the logo, graphics, and website layout. The website serves as a platform for LuxRenov to showcase their services and attract clients, featuring a range of animations to enhance the user experience.`, logoWidth: 'w-[120px]', url:'https://staging-luxrenov.abdullatiftreifi.com' },
    { id: 3, video: '/stones.mp4', title: 'STONESTOX', logo: '/stonestox.svg', tech: 'PHP, Laravel, MySQl, AWS, TailwindCss, AlpineJS', desc: `I was responsible for all the development work on this project, as well as contributing to the design process by creating the website layout. The site is an e-commerce platform with an integrated inquiry system for seamless customer interaction.`, logoWidth: 'w-[180px]', logoMt: 'mt-[10px]', url:'https://stonestox.com' },
    { id: 4, video: '/yalayisboat.mp4', title: 'yalayisboat', logo: '/yalayisboat.png', tech: 'PHP, Laravel, TailwindCss, AlpineJS', desc: `I managed both the design and development for this project, including the creation of the logo, graphics, and website layout. The website serves as a platform for Yalayis Boat to showcase their services effectively.`, logoWidth: 'w-[180px]', logoMt: 'mt-[10px]', url:'https://yalayisboat.com' },
    { id: 5, image: '/movie.webp' },
    { id: 6, image: '/tv.webp' }
]

const Tv: React.FC = () => {
    const [activeProject, setActiveProject] = useState<number>(1)
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

    useEffect(() => {
        const elements = projectData.map(project => ({
            proj: document.getElementById(`proj${project.id}`),
            vid: document.getElementById(`vid${project.id}`)
        }))

        elements.forEach(({ proj, vid }, index) => {
            if (proj && vid) {
                const isActive = activeProject === index + 1
                proj.style.opacity = isActive ? '1' : '0'
                vid.style.opacity = isActive ? '1' : '0'

                if (isActive && videoRefs.current[index]) {
                    videoRefs.current[index]?.play()
                } else if (videoRefs.current[index]) {
                    videoRefs.current[index]?.pause()
                }
            }
        })
    }, [activeProject])

    const handleNext = useCallback(() => {
        setActiveProject(prev => prev < projectData.length ? prev + 1 : 1)
    }, [])

    const handlePrev = useCallback(() => {
        setActiveProject(prev => prev > 1 ? prev - 1 : projectData.length)
    }, [])

    const handleView = useCallback(() => {
        const currentProject = projectData[activeProject - 1]
        if (currentProject && currentProject.url) {
            window.open(currentProject.url, '_blank')
        }
    }, [activeProject])

    return (
        <div className='relative h-max w-full lap:w-[45vw] mx-auto bg-[#fff] lap:translate-x-[-15%] my-[40px] lap:mt-[120px] shadow-md'>
            <div className='relative w-full lap:w-[45vw] aspect-[1.8/1] top-0 left-0'>
                {projectData.map((project, index) => (
                    <div key={project.id} className='absolute transition-all duration-[0.3s] left-[5%] lap:left-0 w-[80vw] lap:w-full h-full' id={`vid${project.id}`}>
                        {project.video ? (
                            <video
                                className='w-full h-full object-cover object-center'
                                loop
                                muted
                                disablePictureInPicture
                                ref={el => {
                                    videoRefs.current[index] = el;
                                }}
                                preload="none"
                            >
                                <source src={project.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : project.image ? (
                            <Image layout='fill' loading='lazy' src={project.image} alt="" className='w-full h-full object-cover' id={`proj${project.id}`} />
                        ) : null}
                    </div>
                ))}
                <div className='w-full lap:w-[calc(45vw+40%)] aspect-[1.4/1] lap:aspect-[1.8/1]  absolute top-[-15%] lap:left-[-7%]'>
                    <Image src="/tv.png" alt="" layout='fill' />
                    <div className='relative top-0 left-0 w-full h-full'>
                        {[
                            { text: 'Next -&gt;', onClick: handleNext, mobileText: '-&gt;' },
                            { text: '&lt;- Prev', onClick: handlePrev, mobileText: '&lt;-' },
                            { text: 'View', onClick: handleView, mobileText: 'View' }
                        ].map((button, index) => (
                            <React.Fragment key={button.text}>
                                <div className='hidden md:block w-[32px] md:w-[9%] aspect-[1/1] md:aspect-[2/1] bg-[#fff] rounded-full absolute right-[5%]' style={{ top: `${50 + index * 10}%` }} onClick={button.onClick}>
                                    <Button bg='bg-[#58514c]' textColr='text-[#fff]' secondBg='bg-[#00668C]' >
                                        <div className='text-[17px] xlap:text-[20px]' dangerouslySetInnerHTML={{ __html: button.text }}>
                                        </div>
                                    </Button>
                                </div>
                                <div className='md:hidden block w-[8.5vw] md:w-[9%] aspect-[1.4/1] md:aspect-[2/1] bg-[#fff] rounded-full absolute right-[5%]' style={{ top: `${48 + index * 11}%` }} onClick={button.onClick}>
                                    <Button bg='bg-[#58514c]' textColr='text-[#fff]' secondBg='bg-[#00668C]' >
                                        <div className=' text-[11px] !font-normal' dangerouslySetInnerHTML={{ __html: button.mobileText }}>
                                        </div>
                                    </Button>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
            {projectData.slice(0, 4).map(project => (
                project.title && project.logo && project.tech && project.desc ? (
                    <div key={project.id} id={`proj${project.id}`} className='transition-all duration-[0.3s]'>
                        <ProjDetails
                            title={project.title}
                            logo={project.logo}
                            tech={project.tech}
                            desc={project.desc}
                            logoWidth={project.logoWidth}
                            logoMt={project.logoMt}
                        />
                    </div>
                ) : null
            ))}
        </div>
    )
}

export default React.memo(Tv)