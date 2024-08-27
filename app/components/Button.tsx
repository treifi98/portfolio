import React from 'react'

interface Props {
    // text: string,
    children: React.ReactNode,
    bg?: string,
    secondBg?: string,
    textColr?: string
}

function Button(props: Props) {
    const { } = props

    return (
        <>
            <div className={`text-[18px] text-center relative ${props.bg ?? 'bg-primary'}  w-full h-full font-["rubik"] cursor-pointer z-[999] group flex items-center justify-center`} >
                <div className={`w-full h-full ${props.secondBg ?? 'bg-secondary'} absolute top-[15%] left-[6%] group-hover:left-0 group-hover:top-0 transition-all duration-[0.3s]`}></div>
                <div className={`w-full h-full ${props.bg ?? 'bg-primary'} absolute top-0 left-0 border-[#000] border-[2px]`}></div>
                <div className='relative !font-body font-bold'>
                    {/* make the text html */}
                    <div className={`${props.textColr ?? 'text-[#000]'}`} >

                        {props.children}
                    </div>
                    {/* {props.text} */}
                </div>
            </div>
        </>
    )
}

export default React.memo(Button)
