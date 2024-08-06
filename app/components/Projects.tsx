import React from 'react'
import Button from './Button'
import Tv from './Tv'

interface Props { }

function Projects(props: Props) {
    const { } = props

    return (
        <>
            <div className='mt-[20px] w-full relative h-max'>
                <div className='flex gap-[20px] justify-center items-center font-[Josef]'>
                    <div className='text-center text-[20px]'>
                        Some <br /> Featured
                    </div>
                    <div className=' text-[200px] font-bold'>
                        PROJECTS
                    </div>
                    <div className='text-center text-[20px]'>
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
