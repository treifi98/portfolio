import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    project: {
        title: string,
        desc: string,
        img: string,
        id: string
    }
}

function ProjectCard(props: Props) {
    const { } = props

    return (
        <>
            <Link href={'/'} className={`relative w-[80vw] aspect-[2.2/1] mx-auto rounded-xl mb-[50px] flex justify-center items-center text-[20px] overflow-hidden rotate-[20deg] xxy group`}>
                <Image src={props.project.img} alt="" className='object-cover object-center group-hover:scale-[1.2] transition-all transform-gpu' layout='fill' loading='lazy' placeholder='empty' />
                <div className='w-full h-full bg-[#000] opacity-[0.5]'></div>
                <div className='w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center gap-[40px]'>
                    <div className='text-[60px] font-bold text-white uppercase'>{props.project.title}</div>
                    <div className='text-[30px] text-white font-["rubick"] w-[70%] mx-auto max-h-0 overflow-hidden group-hover:max-h-full transition-all duration-[0.4s] text-center'>{props.project.desc}</div>

                </div>
            </Link>
        </>
    )
}

export default ProjectCard
