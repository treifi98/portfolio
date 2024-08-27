import React from 'react'
import Button from './Button'
import Tv from './Tv'
import Heading from './Heading'

interface Props { }

function Projects(props: Props) {
    const { } = props

    return (
        <>
            <div className='mt-[0px] w-full relative h-max z-[2]' id="projects">
                <div className='flex gap-[20px] justify-center items-center font-headings'>
                    <div className='hidden tab:block text-center text-[16px] tab:text-[20px] text-secondary'>
                        Some <br /> Featured
                    </div>
                    {/* <div className='heading_font_size font-normal text-secondary '>
                        PROJECTS
                    </div> */}
                    <div className='w-fit'>

                        <Heading text='PROJECTS' />
                    </div>
                    <div className='hidden tab:block text-center text-[16px] tab:text-[20px] text-secondary'>
                        Web Engineering <br />
                        & UI/UX
                    </div>

                </div>
                <Tv />
            </div>
        </>
    )
}

export default React.memo(Projects)
