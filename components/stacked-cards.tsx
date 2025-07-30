'use client'
import { Card } from "@/components/ui/card"
import { gsap } from "gsap"
import { useEffect, useRef } from "react"
export function StackedCards() {
    const cards = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f",
            alt: "Food image 1",
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
            alt: "Food image 2",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
            alt: "Food image 3",
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
            alt: "Food image 4",
        },
    ]


    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    function animateCards() {
        const tl = gsap.timeline()
        tl.to(".card", {
            x: -64,
            translateY:23,
            duration: 0.5,
            ease: "power1.inOut",
            stagger: {
                amount: 0.2,
            },
        })
    }
    useEffect(() => {
        intervalRef.current = setInterval(animateCards, 1000)

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [animateCards])

    return (
        <div className="min-h-max min-w-max flex items-center justify-center p-8">
            <div className="relative" style={{ width: `${320 + (cards.length - 1) * 64}px`, height: "384px" }}>
                <div
                        key={cards[0].id}
                        className="bg-blue-600 w-60 h-[340px] p-0 rounded-sm shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
                        style={{
                            left: `${0 * 64}px`,
                            zIndex: cards.length - 0,
                        }}
                    >
                        <img src={cards[0].image || "/placeholder.svg"} alt={cards[0].alt} className="w-full h-full  object-cover" />
                    </div>
            </div>
            <div className="relative" style={{ width: `${320 + (cards.length - 1) * 64}px`, height: "384px" }}>
                <div
                        key={cards[0].id}
                        className="bg-blue-600 w-60 h-[340px] p-0 rounded-sm shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
                        style={{
                            left: `${0 * 64}px`,
                            zIndex: cards.length - 0,
                        }}
                    >
                        <img src={cards[0].image || "/placeholder.svg"} alt={cards[0].alt} className="w-full h-full  object-cover" />
                    </div>
            </div>
        </div>
    )
}
