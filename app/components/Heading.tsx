import React from 'react'

interface Props {
    text: string
}

function Heading(props: Props) {
    const { } = props

    return (
        <>
            <div className='relative z-[2] group w-full mx-auto h-max'>

                <div className='leading-[100%] w-fit mx-auto peer relative heading_font_size text-center text-secondary font-headings z-[99] '>{props.text}</div>
                <div className='leading-[100%]  transition-all duration-[0.3s] absolute top-0 translate-x-[-50%] left-[50%] heading_font_size text-center text-[#000] font-headings  peer-hover:top-[10px] peer-hover:left-[calc(50%-10px)] opacity-0 peer-hover:opacity-[1] '> {props.text}</div>
            </div>

        </>
    )
}

export default Heading
