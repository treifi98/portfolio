import React from 'react'

interface Props { 
    vid: string
}

function Video(props: Props) {
    const { } = props

    return (
        <>
            <div className='w-[350px] aspect-[1.8/1] z-[9999] bg-[#fff] border-[10px] border-[#fff]'>
                <video className='w-full h-full object-cover object-center' autoPlay loop muted disablePictureInPicture>
                    <source src={`${props.vid}`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </>
    )
}

export default React.memo(Video)
