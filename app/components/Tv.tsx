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
}

const projectData: Project[] = [
    { id: 1, video: '/vidlsc.mp4', title: 'LSC', logo: '/ilogo.svg', tech: 'NextJs, TailwindCss, TypeScript, Gsap, Prisma, AWS, RDS, NodeJs.', desc: 'A website for a local church in Lagos, Nigeria. It is a platform for the church to reach out to its members and the world at large.' },
    { id: 2, video: '/lux.mp4', title: 'LUXRENOV', logo: '/luxrenove.svg', tech: 'NextJs, TailwindCss, TypeScript, Gsap, Prisma, AWS, RDS, NodeJs.', desc: 'ggggggfffffff', logoWidth: 'w-[120px]' },
    { id: 3, video: '/stones.mp4', title: 'STONESTOX', logo: '/stonestox.svg', tech: 'NextJs, TailwindCss, TypeScript, Gsap, Prisma, AWS, RDS, NodeJs.', desc: 'gg', logoWidth: 'w-[180px]', logoMt: 'mt-[10px]' },
    { id: 4, image: '/movie.webp' },
    { id: 5, image: '/maradona.webp' },
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
        setActiveProject(prev => prev < 6 ? prev + 1 : 1)
    }, [])

    const handlePrev = useCallback(() => {
        setActiveProject(prev => prev > 1 ? prev - 1 : 6)
    }, [])

    const setVideoRef = useCallback((el: HTMLVideoElement | null, index: number) => {
        videoRefs.current[index] = el
    }, [])

    return (
        <div className='relative h-max w-[45vw] mx-auto bg-[#fff] translate-x-[-15%] mt-[100px] shadow-md'>
            <div className='relative w-[45vw] aspect-[1.8/1] top-0 left-0'>
                {projectData.map((project, index) => (
                    <div key={project.id} className='absolute transition-all duration-[0.3s] w-full h-full' id={`vid${project.id}`}>
                        {project.video ? (
                            <video
                                className='w-full h-full object-cover object-center'
                                loop
                                muted
                                disablePictureInPicture
                                ref={(el) => setVideoRef(el, index)}
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
                <div className='w-[calc(45vw+40%)] aspect-[1.8/1] absolute top-[-15%] left-[-7%]'>
                    <Image src="/tv.png" alt="" layout='fill' />
                    <div className='relative top-0 left-0 w-full h-full'>
                        {[
                            { text: 'Next -&gt;', onClick: handleNext },
                            { text: '&lt;- Prev', onClick: handlePrev },
                            { text: 'View', onClick: undefined }
                        ].map((button, index) => (
                            <div key={button.text} className='w-[60px] tab:w-[9%] aspect-[2/1] bg-[#fff] rounded-full absolute right-[5%]' style={{ top: `${50 + index * 10}%` }} onClick={button.onClick}>
                                <Button text={button.text} bg='bg-[#58514c]' textColr='text-[#fff]' secondBg='bg-[#00668C]' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {projectData.slice(0, 3).map(project => (
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