import { gsap, } from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/all";
import { useAtomValue, useSetAtom } from "jotai";
import {  imageContainerRefAtom, imagesAtom } from "@/store/ref-store";
gsap.registerPlugin(Flip);


export function useImageAnimationWithStagger() {
    const imageContainer = useAtomValue(imageContainerRefAtom);
    const setImages = useSetAtom(imagesAtom)
    // function flipOutAnimation(images:HTMLImageElement[]){
    //     images.forEach((image) => image?.classList.remove("flip-out-pos"));
    //         const state = Flip.getState(images);
    //         images.forEach((image) => image?.classList.add("flip-out-pos"));
    //         const mainTimeLine = gsap.timeline();
    //         mainTimeLine.add(Flip.from(state, {
    //             duration: 1,
    //             ease: "power1.inOut",
    //             stagger: 0.1,
    //         }));


    //         images.forEach((image, index) => {
    //             const scaleTimeLine = gsap.timeline();
    //             scaleTimeLine.to(image, {
    //                 scale: 2.5,
    //                 duration: 0.45,
    //                 ease: "power3.in"
    //             }, 0.25).to(image, {
    //                 scale: 1,
    //                 duration: 0.45,
    //                 ease: "power3.out"
    //             }, 0.5);
    //             mainTimeLine.add(scaleTimeLine, index * 0.1);
    //         })
    //         // setImageanimationTimeLine(mainTimeLine)
    //         return mainTimeLine
    // }
    // function animate (){
    //     if(!bgRef||!imageContainer) return
    //     const images = gsap.utils.toArray(".img") as HTMLImageElement[]

    //     function animate() {
    //         const t1 = gsap.timeline();
    //         // timelineRef.current = t1;

    //         gsap.set(images, { scale: 0 });

    //         t1.to(bgRef, {
    //             scaleY: "100%",
    //             duration: 3,
    //             ease: "power2.inOut",
    //             delay: 0.25
    //         },);
    //         t1.to(images, {
    //             scale: 1,
    //             duration: 1,
    //             stagger: 0.125,
    //             ease: "power3.out",
    //         }, "<");

    //         t1.to(bgRef, {
    //             // opacity:0,
    //             onStart: () => {
    //                 flipOutAnimation(images);
    //             },
    //         })
    //     }
    //     animate()
    // }
    const { contextSafe } = useGSAP(() => {
        if(!imageContainer) return
        const images = gsap.utils.toArray(".img") as HTMLImageElement[]
        setImages(images)
        // setImageanimationTimeLine(images)
    }, { dependencies: [imageContainer], scope: imageContainer! });
}