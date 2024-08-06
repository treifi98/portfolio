import React from 'react'

interface Props { }

function BG(props: Props) {
    const { } = props

    return (
        <>
            <div className="fixed inset-0 w-full h-full bg-[url('/noise.gif')] bg-[length:110px] opacity-[calc(12/100)] pointer-events-none z-[10000000]"></div>

        </>
    )
}

export default BG
