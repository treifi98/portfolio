import React, { useState } from 'react'
import Contact from './Contact'
import Social from './Social'
import { useClipboard } from '../hooks/useClipboard'

interface Props {
    ispressed: boolean
}

function Footer(props: Props) {
    const [contact, setContact] = useState(0)
    const { canCopy, copyToClipboard } = useClipboard();

    const handleContact = () => {
        setContact((prev) => (prev + 1))
    }

    const handle_click = (text: string, id: string) => {
        if (canCopy) {
            copyToClipboard(text);
            const element = document.querySelector(`#${id} .tt`) as HTMLElement | null;
            if (element) {
                element.innerText = 'Copied!';
            }
        }
    }

    const reset = (text: string, id: string) => {
        const element = document.querySelector(`#${id} .tt`) as HTMLElement | null;
        if (element) {
            element.innerText = text;
        }
    }

    return (
        <>
            <div className='w-full h-max mt-[200px] pb-[0px]'>
                <div className='w-[calc(100vw-40px)] lap:w-[calc(100%-80px)] mx-auto flex lap:justify-between lap:items-end font-body flex-col lap:flex-row justify-center items-center gap-[30px]'>
                    {/* <div className='w-[200px] lap:w-[320px]'>
                        <LogoFooter isPressed={props.ispressed} />
                    </div> */}
                    <div className='lap:text-[24px] text-[20px] lap:mb-[10px] text-center lap:text-left'>
                        <span>

                            Got a project idea brewing? Shoot me a message! <br />
                        </span>
                        <span className='flex justify-start gap-[0px] lap:gap-[5px] items-center lap:items-center '>

                            <span className=''>

                                Let's make the internet a "better" place
                            </span>
                            <img src="/cool.svg" alt="" className='justify-self-start w-[25px] lap:w-[32px] cursor-pointer' onClick={handleContact} />
                        </span>
                    </div>
                    <div className='flex flex-col justify-center gap-[5px] items-center lap:mb-[10px]'>
                        <div className='w-fit lap:text-[24px] text-[20px]'>
                            Stalk Me Professionally
                        </div>
                        <div className='flex gap-[20px] items-center'>
                            <a href='https://www.linkedin.com/in/abdullatif-treifi/' target='_blank' className='w-[20px] lap:w-[30px] h-max'>

                                <Social img='/linkedin.svg' text='LinkedIn' />
                            </a>
                            <div className='w-[26px] lap:w-[33px] h-max ' id='mail' onClick={() => handle_click('Abdullatif.treifi@gmail.com', 'mail')} onMouseLeave={() => reset('Abdullatif.treifi@gmail.com', 'mail')}>
                                <Social img='/mail1.svg' text='Abdullatif.treifi@gmail.com' mail={true} />
                            </div>
                            <div className='w-[20px] lap:w-[30px] h-max' id='phone' onClick={() => handle_click('+971501579362', 'phone')} onMouseLeave={() => reset('+971501579362', 'phone')}>
                                <Social img='/phone.svg' text='+971501579362' />
                            </div>
                            <a href='https://www.instagram.com/treifi98/' target='_blank' className='w-[20px] lap:w-[32px] h-max'>

                                <Social img='/insta2.svg' text='@treifi98' />
                            </a>
                            <a href='/resume.pdf' target='_blank' className='w-[20px] lap:w-[30px] h-max'>

                                <Social img='/cv.svg' text='View Resume' />
                            </a>
                        </div>
                    </div>
                    <div className=' mb-[10px]'>
                        <div className='lap:text-[24px] text-[20px] text-center'>
                            <span className=''>©</span> 2024 Abdullatif Treifi. All rights reserved.<br /> (Except the right to sleep. That's been revoked.)
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative z-[99]'>

                <Contact status={contact} />
            </div>


        </>
    )
}

export default Footer
