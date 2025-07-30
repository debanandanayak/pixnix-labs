'use client';
import { AnimatedImageStack } from "@/components/animated/image-stack/animated-image-stack";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { bgRefAtom, imageanimationSetAtom, imageContainerRefAtom, imagesAtom } from "@/store/ref-store";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function Home() {
  const [bgRef, setBgRef] = useAtom(bgRefAtom);
  const imageContainer = useAtomValue(imagesAtom)
  const animateImages = useSetAtom(imageanimationSetAtom)
  useGSAP(() => {
    if (!imageContainer || !bgRef) return
    const images = gsap.utils.toArray(".img") as HTMLImageElement[]
    const t1 = gsap.timeline();

    gsap.set(images, { scale: 0 });

    t1.to(bgRef, {
      scaleY: "100%",
      duration: 3,
      ease: "power2.inOut",
      delay: 0.25
    },);
    t1.to(images, {
      scale: 1,
      duration: 1,
      stagger: 0.125,
      ease: "power3.out",
    }, "<");

    t1.to(bgRef, {
      // opacity:0,
      onStart: () => {
        animateImages()
      },
    })
  }, { dependencies: [bgRef, imageContainer] })
  return (
    <div className="font-sans h-screen w-screen overflow-x-hidden">
      <section className="hero relative w-screen h-svh bg-[#0d0d0d] overflow-hidden">
        <div ref={bgRef => setBgRef(bgRef)} className="absolute top-0 left-0 h-full w-full bg-[#000000] origin-bottom scale-y-0" />
        <AnimatedImageStack />
        <div className="flex flex-col w-full h-full gap-2">
          <nav className="h-10">

            <h1 className="ml11">
              <span className="text-wrapper">
                <span className="line line1"></span>
                <span className="letters">Hello Goodbye</span>
              </span>
            </h1>
          </nav>
          <main>
          </main>
        </div>
      </section>
      <section className="bg-blue-600 h-screen w-screen"></section>
    </div>
  );
}