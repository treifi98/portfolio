import React, { useState, useEffect } from 'react'
import BG from './BG/BG'

interface Props { }

function Preload(props: Props) {
    const { } = props
    const [count, setCount] = useState(0)

    useEffect(() => {
        // Disable scrolling when the component mounts
        document.body.classList.add('overflow-hidden')

        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount < 100) {
                    return prevCount + 5
                }
                else {
                    close()
                }
                clearInterval(interval)
                return prevCount
            })
        }, 40) // Adjust this value to change the speed of the counter

        return () => {
            clearInterval(interval)
            // Re-enable scrolling when the component unmounts
            // document.body.classList.remove('overflow-hidden')
        }
    }, [])

    const close = () => {
        // alert('close')
        document.querySelector('.preloader')?.classList.add('!scale-y-0')
        // Re-enable scrolling when closing the preloader
        document.body.classList.remove('overflow-hidden')
    }

    return (
        <>
            <div className='fixed top-0 left-0 w-[100vw] h-[100vh] bg-accesnt z-[99999999] transition-all delay-[0.1s] duration-[0.3s] preloader overflow-hidden origin-center'>
                <img src="/tv.webp" alt="" className='absolute top-0 left-0 w-full h-full object-cover' />
                <div className='absolute top-0 left-0 w-full h-full bg-[#00000055]'></div>
                <div className='text-[180px] tab:text-[250px] font-headings text-primary absolute top-[50vh] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    {count}
                </div>
                <BG />
            </div>
        </>
    )
}

export default Preload