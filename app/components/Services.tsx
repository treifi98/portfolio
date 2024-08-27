import React from 'react'
import ServiceCard from './ServiceCard'
import Button from './Button'
import Contact from './Contact'
import Heading from './Heading'

interface Props { }

function Services(props: Props) {
    const { } = props

    const [conatct, setContact] = React.useState(0)
    const handleContact = () => {
        setContact((prev) => (prev + 1))
    }

    return (
        <>
            <div className='w-full h-max mt-[300px]' id='services'>
                <Heading text='SERVICES' />
                <div className='lap:mt-[20px] text-center text-[30px] lap:text-[40px] font-normal font-body'>
                    Here's what I can do for you
                </div>
                <div className='w-[calc(100vw-40px)] lap:w-[calc(100%-300px)] h-max flex flex-wrap justify-around gap-y-[30px] gap-x-[5px] mx-auto items-center mt-[20px]'>
                    <div className='w-[500px] h-max lap:h-[750px] min-h-[700px]'>

                        <ServiceCard title='WEB DESIGN & DEVELOPMENT' description="What if I told you... you could have a website that doesn't look like it's from 1999?" points={[
                            { title: 'Landing Pages', description: "First impressions that stick better than that song you can't get out of your head." },
                            { title: 'Restaurant Websites', description: "Websites that make fast food look healthy. Magic? Nah, just good design." },
                            { title: 'Gym Websites', description: "Websites that do the heavy lifting, so you don't have to. Wait... 🤔 " },
                            { title: 'E-commerce Sites', description: 'Turning "just browsing" into "how did I spend so much?"' },
                            { title: 'Templates', description: 'For when you want that "custom feel" without the "custom price tag."' },
                        ]} />
                    </div>
                    <div className='w-[500px] h-max lap:h-[750px] min-h-[700px]'>

                        <ServiceCard title='WEB & MOBILE APPLICATIONS' description="Crafting digital experiences that engage, convert, and delight."
                            points={[
                                { title: 'Custom Web/Mobile Apps', description: "Like a Swiss Army knife, but for your business. And less likely to cut you." },
                                { title: 'Interactive Dashboards', description: "Graphs so pretty, even your accountant might smile. Maybe." },
                                { title: 'Online Tools', description: "Tools so useful, you'll wonder how you ever procrastinated without them." },
                            ]} />
                    </div>

                    <div className='w-[500px] h-max lap:h-[750px] min-h-[700px]'>

                        <ServiceCard title='GRAPHIC DESIGN & BRANDING' description="Making your competitors wish they had our crayons"
                            points={[
                                { title: 'Brand Design', description: `Turning your company's personality from "who?" to "wow!"` },
                                { title: 'Logo Design', description: "We'll distill your entire business essence into a tiny symbol. No pressure or anything." },
                                { title: 'Poster Design', description: "Creating posters so eye-catching, people might actually look up from their phones. Briefly." },
                                { title: 'Flyer Design', description: "Creating flyers so appealing, people might actually keep them. In their special drawer. With the takeout menus." },
                            ]} />
                    </div>


                </div>
                <div className='w-[110px] lap:w-[140px] h-[40px] lap:h-[50px] mx-auto mb-[10px] mt-[35px] lap:mt-[40px]' onClick={handleContact}>
                    <Button >
                        <div className='text-[16px] lap:text-[20px]'>
                            Lets Talk
                        </div>
                    </Button>
                </div>
            </div>
            <Contact status={conatct} />

        </>
    )
}

export default Services
