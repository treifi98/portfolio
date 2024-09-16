import React from 'react'

interface Props {}

function Page(props: Props) {
    const {} = props

    return (
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>

        <div className='w-[90vw] h-max overflow-hidden mx-auto mt-[200px] flex justify-between flex-wrap bg-[#fff]'>

            <img className="w-[200px]" src="/sc1.png" alt="" />
            <img className="w-[200px]" src="/sc2.png" alt="" />
            <img className="w-[200px]" src="sc3.png" alt="" />
        </div>
        <div className='absolute top-0 left-0 h-[100vh] w-[100vw] '>

        </div>

        </>
    )
}

export default Page
