import React from 'react'

interface Props {
    title: string,
    logo: string,
    tech: string,
    desc: string,
    logoWidth?: string,
    logoMt?: string
}

function ProjDetails(props: Props) {
    const { } = props

    return (
        <>
            <div className='w-[200px] h-[50px] absolute top-[0px] left-[-6%] translate-x-[-100%] border-t-[2px] border-l-[2px] border-dashed border-[#000]'>
                <div className='relative top-[calc(100%+5px)] translate-x-[-60%] left-0 w-[10px] aspect-square rotate-[45deg] bg-[#00668C]'>

                    <div className='absolute animate-ping left-0 w-full h-full top-0  bg-[#00668C]'></div>
                </div>
                <div className='relative top-[110%] left-0 translate-x-[-50%] w-fit text-[40px] font-[josef]'>
                    {props.title}
                </div>
                <div className='relative top-[100%] left-0 translate-x-[-50%] w-fit text-[40px] font-[josef] overflow-hidden'>
                    <img src={props.logo} alt="" className={`${props.logoWidth ?? 'w-[80px]'} aspect-auto ${props.logoMt ?? 'mt-0'}`} />
                </div>
            </div>
            <div className='w-[200px] h-[100px] absolute top-[300px] left-[-6%] translate-x-[-100%] border-t-[2px] border-l-[2px] border-dashed border-[#000]'>
                <div className='relative top-[calc(100%+5px)]   translate-x-[-60%] left-0 w-[10px] aspect-square rotate-[45deg] bg-[#00668C]'>

                    <div className='absolute  animate-ping left-0 w-full h-full top-0  bg-[#00668C]'></div>
                </div>
                <div className='relative top-[105%] left-0 translate-x-[-50%] w-fit text-[40px] font-[josef]'>
                    Tech
                </div>
                <div className='relative top-[100%] left-0 translate-x-[-50%] w-fit font-[josef] text-[18px] text-center '>
                    {props.tech}
                </div>
            </div>
            <div className='w-[200px] h-[50px] absolute top-[0px] right-[-32%] translate-x-[100%] border-t-[2px] border-r-[2px] border-dashed border-[#000]'>
                <div className='relative top-[calc(100%+5px)] translate-x-[-40%] right-[-100%] w-[10px] aspect-square rotate-[45deg] bg-[#00668C]'>

                    <div className='absolute animate-ping left-0 w-full h-full top-0 bg-[#00668C]'></div>
                </div>
                <div className='relative top-[105%] right-[-100%] translate-x-[-50%] w-fit text-[40px] font-[josef]'>
                    Description
                </div>
                <div className='relative top-[100%] right-[-100%] translate-x-[-50%] w-fit text-[40px] font-[josef]'>
                    <div className='text-[18px] w-[200px] text-center'>
                        {props.desc}
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(ProjDetails)
