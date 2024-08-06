import React from 'react'

interface Props {
    text: string,
    bg?: string,
    secondBg?: string,
    textColr?: string
}

function Button(props: Props) {
    const { } = props

    return (
        <>
            <div className={`text-[18px] text-center relative ${props.bg??'bg-[#ccc]'}  w-full h-full font-["rubik"] cursor-pointer z-[999] group flex items-center justify-center`} >
                <div className={`w-full h-full ${props.secondBg??'bg-[#fff]'} absolute top-[5px] left-[5px] group-hover:left-0 group-hover:top-0 transition-all duration-[0.3s]`}></div>
                <div className={`w-full h-full ${props.bg??'bg-[#ccc]'} absolute top-0 left-0 border-[#000] border-[2px]`}></div>
                <div className='relative'>
                    {/* make the text html */}
                     <div className={`${props.textColr??'text-[#000]'}`} dangerouslySetInnerHTML={{ __html: props.text }}></div>
                    {/* {props.text} */}
                </div>
            </div>
        </>
    )
}

export default React.memo(Button)
