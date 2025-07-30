'use client'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import BlurText from "@/components/animated/BlurText/blur-text";
import Squares from "@/components/animated/Squares/Squares";
import FadeContent from "@/components/fade-content";
export default function Home() {
    return <div className="min-h-screen dark:bg-background/50 bg-white/50 text-foreground transition-colors duration-300 relative">
        <Squares direction="diagonal" speed={.25} />
        <div className="container w-[90%] m-auto bg-transparent">
            <div className="flex flex-col-reverse p-6 gap-2.5 justify-center items-center md:flex-row h-svh">
                <div className="md:flex-1/2 justify-center">
                    <Badge className="flex items-center gap-2 rounded-full">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-700"></span>
                        </span>
                        Trusted by 10k+ customers
                    </Badge>

                    <BlurText className="text-4xl font-bold" delay={.2}  text="Met consectetur adipisicing eli. Amet, nobis!" rootMargin="0px" />
                    {/* <SplitText /> */}
                    <p className="font-semibold text-xl text-primary/70">Lorem ipsum dolor nsectetur adipisicing elit. Amet, nobis!</p>
                    <Button className="mt-5 rounded-full bg-chart-2">Contact now</Button>
                    {/* <div className="flex flex-row gap-3.5 mt-5 h-56 overflow-hidden ">
                    </div> */}

                </div>
                <FadeContent>
                    <div className="inline-block rounded-2xl md:flex-1/2">
                        <Image className="backdrop-blur-xs drop-shadow-2xl rounded-2xl" src={"/hero-image.png"} alt={"hero image"} width={400} height={500} />
                    </div>
                </FadeContent>
            </div>
        </div>
    </div>

}
