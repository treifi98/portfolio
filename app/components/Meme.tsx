import Image from 'next/image'
import React, { useEffect } from 'react'

interface Props {
    img: string,
    width?: string,
    height?: string,
    top?: string,
    left?: string,
    delay?: string,
    display?: boolean
}
function extractSizeValue(pattern: any) {
    if (typeof pattern !== 'string') {
        return null;
    }
    // Define a regular expression to match the number inside the pattern
    const regex = /(w|h)-\[(\d+)px\]/;

    // Use the regular expression to find the match
    const match = pattern.match(regex);

    // If a match is found, return the number as an integer
    if (match) {
        return match[2];
    }

    // If no match is found, return null or some default value
    return null;
}

function Meme(props: Props) {
    const meme = React.useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (meme.current) {

            if (props.display) {
                // alert('d')
                meme.current.style.opacity = '1'
            } else {
                meme.current.style.opacity = '0'
                // meme.current?.classList.add('opacity-0')
                // meme.current?.classList.remove('opacity-100')
            }
        }
    }, [props.display])

    return (
        <>
            <div className={`fixed ${props.width ?? 'w-[200px]'} ${props.height ?? 'h-[200px]'} ${props.top ?? 'top-0'} ${props.left ?? 'left-0'} ${props.delay ?? 'delay-0'} opacity-0 transition-all duration-[0.3s] translate-x-[-50%] translate-y-[-50%] overflow-hidden`} ref={meme}>
                <div className='w-full h-full relative'>
                    <Image
                        src={props.img}
                        alt=""
                        layout='fill'
                        objectFit='cover'
                        className='object-cover object-center'
                    />

                </div>

            </div>
        </>
    )
}

export default React.memo(Meme)
