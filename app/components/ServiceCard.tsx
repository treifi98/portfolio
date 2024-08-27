import React from 'react'

interface Props {
    title: string,
    description: string,
    points: { title: string, description: string }[]
}

function ServiceCard(props: Props) {
    const { } = props

    return (
        <>
            <div className='w-full h-full min-h-[700px]  relative bg-primary group flex justify-start items-center flex-col z-[3]'>
                <div className='w-full h-full bg-secondary absolute top-[15px] left-[15px] group-hover:top-0 group-hover:left-0 transition-all duration-[0.3s] flex flex-col justify-center items-center gap-[50px]'></div>
                <div className='absolute top-0 left-0 bg-primary w-full h-full border-[#000] border-solid border-[2px]'></div>
                <div className='my-[40px] lsp:my-[80px] w-[calc(100%-40px)] h-max flex flex-col justify-start items-center relative gap-[24px] lap:gap-[40px]'>
                    <div className='font-headings text-[26px] md:text-[34px] text-center'>{props.title}</div>
                    <div className='w-full flex flex-col justify-start items-center gap-[24px] lap:gap-[40px]'>
                        <div className='font-body text-[18px] lap:text-[22px] text-center'>
                            {props.description}
                        </div>
                        <div className='w-full flex flex-col justify-start items-center gap-[20px]'>
                            {
                                props.points.map((point, index) => (
                                    <div key={index} className='w-full gap-[5px] flex justify-start items-baseline'>
                                        <div className='text-[16px] lap:text-[18px] w-[10px] aspect-square bg-[#000] rotate-[45deg] border-solid border-[2px] border-accesnt'></div>
                                        <div>
                                            <span className='font-bold italic'>{point.title}:</span>&nbsp;{point.description}
                                        </div>
                                    </div>
                                ))

                            }

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ServiceCard
