'use client'
import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'

interface Props {
    status: number
}

function Contact(props: Props) {
    const [formData, setFormData] = useState({
        name: '',
        communicationMethod: 'Whatsapp',
        contactDetails: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

    const box = useRef<HTMLDivElement>(null)
    const formRef = useRef<HTMLFormElement>(null)

    useEffect(() => {
        if (props.status > 0 && box.current) {
            box.current.style.display = 'flex'
        }
    }, [props.status])

    const close = () => {
        if (box.current) {
            box.current.style.display = 'none'
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
        // Clear the error for this field when the user starts typing
        setFormErrors(prev => ({ ...prev, [name]: '' }));
    };

    const validateForm = () => {
        const errors: { [key: string]: string } = {};
        if (!formData.name.trim()) errors.name = "Name is required";
        if (!formData.contactDetails.trim()) errors.contactDetails = "Contact details are required";
        if (!formData.message.trim()) errors.message = "Message is required";
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    communicationMethod: 'Whatsapp',
                    contactDetails: '',
                    message: ''
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className='w-[100vw] overflow-scroll min-h-[100vh] fixed top-0 left-0 bg-[#000000bb] z-[99999] justify-center items-center hidden' ref={box}>
                <div className='w-full h-full absolute top-0 left-0' onClick={close}></div>
                <div className='w-[calc(100%)] lap:w-[60%] h-[100vh] lap:h-max bg-primary py-[40px] relative overflow-hidden'>
                    <div className='w-full h-full flex justify-center items-center flex-col '>

                        <div className='absolute right-[10px] top-[10px] text-[22px] font-thin font-[rubik] text-secondary cursor-pointer' onClick={close}>
                            X
                        </div>
                        {/* <div className='font-headings text-[40px] lap:text-[100px] text-center mt-0'>
                            CONTACT ME
                        </div> */}
                        <div className='relative z-[2] group w-full mx-auto h-max'>

                            <div className='font-headings text-[40px] lap:text-[100px] text-center mt-0 w-fit mx-auto peer relative  text-[#000]  z-[99] '>CONTACT ME</div>
                            <div className='w-full text-[40px] lap:text-[100px]  mt-0  transition-all duration-[0.3s] absolute top-0 translate-x-[-50%] left-[50%] text-center text-accesnt font-headings  peer-hover:top-[10px] peer-hover:left-[calc(50%-10px)] opacity-0 peer-hover:opacity-[1] '> CONTACT ME</div>
                        </div>
                        <form ref={formRef} onSubmit={handleSubmit} className='w-[95%] lap:w-[80%] h-max lap:h-[75%] mx-auto flex flex-col gap-[20px] lap:gap-[25px] justify-center items-center'>
                            <div className='flex flex-col justify-center items-start gap-[5px] w-full'>
                                <div className='text-secondary text-[18px] lap:text-[20px]'>
                                    Your Name *
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className='w-full bg-[#fff] h-[40px] border-b-[1px] border-secondary border-solid p-[10px] text-[16px] lap:text-[18px] outline-none focus:outline-none'
                                    placeholder='Chuck Norris'
                                    required
                                />
                                {formErrors.name && <div className="text-red-500">{formErrors.name}</div>}
                            </div>
                            <div className='flex flex-col justify-center items-start gap-[5px] w-full'>
                                <div className='text-secondary text-[18px] lap:text-[20px]'>
                                    Your Preferred Method Of Communication *
                                </div>
                                <select
                                    name="communicationMethod"
                                    value={formData.communicationMethod}
                                    onChange={handleInputChange}
                                    className='w-full bg-[#fff] h-[40px] border-b-[1px] border-secondary border-solid px-[10px] text-[16px] lap:text-[18px] outline-none focus:outline-none font-body'
                                    required
                                >
                                    <option value="Whatsapp">Whatsapp</option>
                                    <option value="Telegram">Telegram</option>
                                    <option value="Email">Email</option>
                                    <option value="Phone Call">Phone Call</option>
                                </select>
                            </div>
                            <div className='flex flex-col justify-center items-start gap-[5px] w-full'>
                                <div className='text-secondary text-[18px] lap:text-[20px]'>
                                    Your Contact Details *
                                </div>
                                <input
                                    type="text"
                                    name="contactDetails"
                                    value={formData.contactDetails}
                                    onChange={handleInputChange}
                                    className='w-full bg-[#fff] h-[40px] border-b-[1px] border-secondary border-solid p-[10px] text-[16px] lap:text-[18px] outline-none focus:outline-none'
                                    placeholder='Your Whatsapp/Telegram/Email Address/Cell Number'
                                    required
                                />
                                {formErrors.contactDetails && <div className="text-red-500">{formErrors.contactDetails}</div>}
                            </div>
                            <div className='flex flex-col justify-center items-start gap-[5px] w-full'>
                                <div className='text-secondary text-[18px] lap:text-[20px]'>
                                    Your Message *
                                </div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className='resize-none w-full bg-[#fff] h-[15vh] border-b-[1px] border-secondary border-solid p-[10px] text-[16px] lap:text-[18px] outline-none focus:outline-none'
                                    placeholder='Roses are red violets are blue, I wanna work with you!'
                                    required
                                ></textarea>
                                {formErrors.message && <div className="text-red-500">{formErrors.message}</div>}
                            </div>
                            <button
                                type="submit"
                                className={`w-[80px] lap:w-[100px] h-[35px] lap:h-[40px] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
                                disabled={isSubmitting}
                            >
                                <Button>
                                    <div className='text-[16px] tab:text-[18px]'>
                                        {isSubmitting ? 'Sending...' : 'Send'}
                                    </div>
                                </Button>
                            </button>
                            {submitStatus === 'success' && (
                                <div className='text-green-500'>Message sent successfully!</div>
                            )}
                            {submitStatus === 'error' && (
                                <div className='text-red-500'>Failed to send message. Please try again.</div>
                            )}
                        </form>
                        <div className='w-[80%] mx-auto mt-[10px] h-max flex-col lap:flex-row justify-between items-center hidden tab:flex'>
                            <div>
                                <div className='flex w-fit justify-start items-center gap-[5px]'>
                                    <img src="/linkedin.svg" alt="" className='w-[25px]' />
                                    <a href='https://www.linkedin.com/in/abdullatif-treifi/' target='_blank' className='text-secondary text-[18px] lap:text-[20px]'>linkedin.com/in/abdullatif-treifi</a>
                                </div>
                                <div className='flex w-fit justify-start items-center gap-[5px] mt-[5px]'>
                                    <img src="/insta2.svg" alt="" className='w-[28px]' />
                                    <a href='https://www.instagram.com/treifi98/' target='_blank' className='text-secondary text-[18px] lap:text-[20px]'>@treifi98</a>
                                </div>
                            </div>
                            <div className='w-fit flex justify-center items-center gap-[5px] place-self-start lap:place-self-end'>
                                <img src="/cv.svg" alt="" className='w-[27px]' />
                                <a href='/Abdullatif-Resume.pdf' target='_blank' className='text-secondary text-[18px] lap:text-[20px]'>View My Resume</a>
                            </div>
                            <div className='flex flex-col items-start place-self-start'>
                                <div className='flex w-fit justify-start items-center gap-[5px]'>
                                    <img src="/phone.svg" alt="" className='w-[25px]' />
                                    <a href='tel:+971501579362' target='_blank' className='text-secondary text-[18px] lap:text-[20px]'>+971501579362</a>
                                </div>
                                <div className='flex w-fit justify-start items-center gap-[5px] mt-[5px]'>
                                    <img src="/email.svg" alt="" className='w-[35px]' />
                                    <a href='Hello@abdullatiftreifi.com' target='_blank' className='text-secondary text-[18px] lap:text-[20px]'>Hello@abdullatiftreifi.com</a>
                                </div>
                            </div>
                        </div>
                        <div className='w-[95%] h-max mx-auto flex flex-wrap justify-evenly items-center mt-[30px] tab:hidden'>
                            <a href="https://www.linkedin.com/in/abdullatif-treifi/">

                                <img src="/linkedin.svg" alt="" className='w-[25px]' />
                            </a>
                            <a href="mailto: Hello@abdullatiftreifi.com" >

                                <img src="/mail1.svg" alt="" className='w-[28px] opacity-[0.8] relative  block' />
                            </a>
                            <a href="tel:971501579362">

                                <img src="/phone.svg" alt="" className='w-[25px]' />
                            </a>
                            <a href="https://www.instagram.com/treifi98/">

                                <img src="/insta2.svg" alt="" className='w-[25px]' />
                            </a>
                            <a href="/Abdullatif-Resume.pdf">

                                <img src="/cv.svg" alt="" className='w-[27px]' />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(Contact)