import { atom } from "jotai";
import gsap from "gsap";
import { Flip } from "gsap/all";
gsap.registerPlugin(Flip);
export const bgRefAtom = atom<HTMLDivElement | null>(null);
export const imageContainerRefAtom = atom<HTMLDivElement | null>(null);
export const imagesAtom = atom<HTMLImageElement[]>([])
export const imageAnimationTimeLineValueAtom = atom<GSAPTimeline|null>(null)
export const intAtom = atom<number|null>(null)
export const imageanimationSetAtom = atom(
    null,
    (get, set,) => {
        const images = get(imagesAtom)
        if(!images) return;
        // images.forEach((image) => image?.classList.remove("flip-out-pos"));
        const state = Flip.getState(images);
        images.forEach((image) => image?.classList.add("flip-out-pos"));
        const mainTimeLine = gsap.timeline();
        mainTimeLine.add(Flip.from(state, {
            duration: 1,
            ease: "power1.inOut",
            stagger: 0.1,
        }));


        images.forEach((image, index) => {
            const scaleTimeLine = gsap.timeline();
            scaleTimeLine.to(image, {
                scale: 2.5,
                duration: 0.45,
                ease: "power3.in"
            }, 0.25).to(image, {
                scale: 1,
                duration: 0.45,
                ease: "power3.out"
            }, 0.5);
            mainTimeLine.add(scaleTimeLine, index * 0.1);
        })
        set(imageAnimationTimeLineValueAtom,mainTimeLine)
    }
)