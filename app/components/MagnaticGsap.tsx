'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import React, { MouseEvent, ReactElement, ReactNode, useEffect, useRef } from 'react'

interface Props {
    children: React.ReactNode

}

const MagnaticGsap = (props: Props) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (ref.current) {
            const xTo = gsap.quickTo(ref.current, "x", { duration: 1, ease: "power1.out" })
            const yTo = gsap.quickTo(ref.current, "y", { duration: 1, ease: "power1.out" })

            // rest of your code
            const mouseMove = (e: any) => {
                const { clientX, clientY } = e
                const { left, top, width, height } = ref.current ? ref.current.getBoundingClientRect() : { left: 0, top: 0, width: 0, height: 0 }
                const x = clientX - (left + width / 2)
                const y = clientY - (top + height / 2)
                // gsap.to(ref.current, {x:x})

                xTo(x)
                yTo(y)
            }

            const mouseLeave = () => {
                xTo(0)
                yTo(0)
            }
            ref.current.addEventListener("mousemove", mouseMove)
            ref.current.addEventListener("mouseleave", mouseLeave)
            const current = ref.current;
            if (current) {
                // ...
                return () => {
                    current.removeEventListener("mousemove", mouseMove),
                        current.removeEventListener("mouseleave", mouseLeave)
                }
            }
        }
    }, [])

    return (
        <div className='' ref={ref}>
            {props.children}
        </div>
    )
}

export default React.memo(MagnaticGsap)