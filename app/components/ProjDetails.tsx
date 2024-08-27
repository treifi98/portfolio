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
            <div className='w-[200px] h-[50px] absolute top-[0px] left-[-6%] translate-x-[-100%] border-t-[2px] border-l-[2px] border-dashed border-[#000] hidden lap:block'>
                <div className='relative top-[calc(100%+5px)] translate-x-[-60%] left-0 w-[10px] aspect-square rotate-[45deg] bg-secondary'>

                    <div className='absolute animate-ping left-0 w-full h-full top-0  bg-secondary'></div>
                </div>
                <div className='relative top-[110%] left-0 translate-x-[-50%] w-fit text-[40px] font-body'>
                    {props.title}
                </div>
                <div className='relative top-[100%] left-0 translate-x-[-50%] w-fit text-[40px] font-body overflow-hidden'>
                    <img src={props.logo} alt="" className={`${props.logoWidth ?? 'w-[80px]'} aspect-auto ${props.logoMt ?? 'mt-0'}`} />
                </div>
            </div>
            <div className='w-[200px] h-[100px] absolute top-[300px] left-[-6%] translate-x-[-100%] border-t-[2px] border-l-[2px] border-dashed border-[#000] hidden lap:block'>
                <div className='relative top-[calc(100%+5px)]   translate-x-[-60%] left-0 w-[10px] aspect-square rotate-[45deg] bg-secondary'>

                    <div className='absolute  animate-ping left-0 w-full h-full top-0  bg-secondary'></div>
                </div>
                <div className='relative top-[105%] left-0 translate-x-[-50%] w-fit text-[40px] font-body'>
                    Tech
                </div>
                <div className='relative top-[100%] left-0 translate-x-[-50%] w-fit font-body text-[18px] text-center '>
                    {props.tech}
                </div>
            </div>
            <div className='w-[200px] h-[50px] absolute top-[0px] right-[-32%] translate-x-[100%] border-t-[2px] border-r-[2px] border-dashed border-[#000] hidden lap:block'>
                <div className='relative top-[calc(100%+5px)] translate-x-[-40%] right-[-100%] w-[10px] aspect-square rotate-[45deg] bg-secondary'>

                    <div className='absolute animate-ping left-0 w-full h-full top-0 bg-secondary'></div>
                </div>
                <div className='relative top-[105%] right-[-100%] translate-x-[-50%] w-fit text-[40px] font-body'>
                    Description
                </div>
                <div className='relative top-[100%] right-[-100%] translate-x-[-50%] w-fit text-[40px] font-body'>
                    <div className='text-[18px] w-[220px] text-center'>
                        {props.desc}
                    </div>
                </div>
            </div>




            {/* ----------------------------------------------------------------------------------------------------------------------- */}

            <div className='w-[80px] h-[35px] absolute top-[110%] left-[0px] translate-x-[80px] border-t-[0px] border-l-[2px] border-dashed border-[#000] lap:hidden overflow-visible flex flex-col items-start'>
                <div className='relative top-[calc(100%+5px)] translate-x-[-60%] left-0 w-[8px] aspect-square rotate-[45deg] bg-secondary'>

                    <div className='absolute animate-ping left-0 w-full h-full top-0  bg-secondary'></div>
                </div>
                <div className='relative top-[110%] left-0 translate-x-[-50%] w-fit text-[26px] font-body'>
                    {props.title}
                </div>
                <div className='relative top-[30px] left-[0px] translate-x-[-50%] text-[40px] font-body  w-[60px] '>
                    <img src={props.logo} alt="" className={`relative w-[60px]  aspect-auto ${'mt-[10px]'}`} />
                </div>
            </div>


            <div className='w-[80px] h-[35px] absolute top-[110%] left-[calc(100%-0px)] translate-x-[-100%] border-t-[0px] border-l-[2px] border-dashed border-[#000] lap:hidden flex flex-col items-start'>
                <div className='relative top-[calc(100%+5px)] translate-x-[-60%] left-0 w-[8px] aspect-square rotate-[45deg] bg-secondary'>

                    <div className='absolute  animate-ping left-0 w-full h-full top-0  bg-secondary'></div>
                </div>
                <div className='relative top-[105%] left-0 translate-x-[-50%] w-fit text-[26px] font-body'>
                    Tech
                </div>
                <div className='relative top-[100%] left-0 translate-x-[-50%] w-[100px] font-body text-[14px] text-center '>
                    {props.tech}
                </div>
            </div>

            <div className='w-[1px] h-[90%] absolute top-[110%] left-[50%%] translate-x-[50vw] border-t-[0px] border-r-[2px] border-dashed border-[#000] block lap:hidden'>
                <div className='relative top-[calc(100%+5px)] translate-x-[-40%] right-[-100%] w-[8px] aspect-square rotate-[45deg] bg-secondary'>

                    <div className='absolute animate-ping left-0 w-full h-full top-0 bg-secondary'></div>
                </div>
                <div className='relative top-[105%] right-[-100%] translate-x-[-50%] w-fit text-[26px] font-body'>
                    Description
                </div>
                <div className='relative top-[100%] right-[-100%] translate-x-[-50%] w-fit text-[40px] font-body'>
                    <div className='text-[14px] w-[80vw] text-center mt-[10px]'>
                        {props.desc}
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(ProjDetails)
