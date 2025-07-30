'use client'
import gsap from "gsap";
import { Flip } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
import {  useImageAnimationWithStagger } from "./use-image-animation";
import { useSetAtom } from "jotai";
import { imageContainerRefAtom } from "@/store/ref-store";
gsap.registerPlugin(Flip);
const images = [
    "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f",
    "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    "https://images.unsplash.com/photo-1441716844725-09cedc13a4e7",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7",
];
export function AnimatedImageStack() {
    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
    const h1ref = useRef<HTMLHeadingElement | null>(null);
    const setImageContainerRef = useSetAtom(imageContainerRefAtom)
    useImageAnimationWithStagger()
    return (
        <>
            <div className="image-container" ref={ref=>setImageContainerRef(ref)}>
                {images.map((image, index) => (
                    <Image
                        className="img"
                        loading="eager"
                        height={230}
                        width={192}
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        ref={(el) => { imageRefs.current[index] = el }}
                    />
                ))}
            </div>
        </>
    )
}