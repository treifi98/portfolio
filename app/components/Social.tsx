import React from 'react'

interface Props {
    img:string,
    text:string
    mail?:boolean
 }

function Social(props: Props) {
    const { } = props

    return (
        <>
        <div className='relative h-max w-full cursor-pointer group'>

            <img src={props.img} alt="" className={`w-full ${props.mail?'opacity-[0.75]':'opacity-[1]'}`}  />

            <div className='tt absolute w-max top-[-50px] left-[50%] translate-x-[-50%] p-[5px] bg-accesnt text-primary text-[18px] font-body scale-0 group-hover:scale-[1] opacity-0 group-hover:opacity-[1] duration-[0.3s] transition-all'>
                {props.text}
            </div>
        </div>

        </>
    )
}

export default Social
