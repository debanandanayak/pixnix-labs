import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Page() {
    return (
        <div className="container w-[85%] my-10 m-auto md:max-w-3xl md:my-32 scroll-smooth">
            <div className="my-10 md:flex md:items-start">
                <div className="flex-1/2 flex justify-end mb-20 pr-2 md:block md:mb-0 md:pr-0">
                    <ThemeSwitcher />
                </div>
                <div className="flex-1/2">
                    <div className="">
                        <div className="pb-12 mb-5">
                            <h1 className="text-xl font-bold text-primary">Hi, I'm Deba.</h1>
                        </div>
                        <div className="text-primary/90">
                            <p className="mb-5">I'm a software engineer with a background in computer science and a passion for building practical, user-focused applications.</p>
                            <p className="mb-5">I enjoy learning new technologies, solving problems, and writing clean, efficient code. I'm currently looking for opportunities to grow as a developer and contribute to real-world software projects.</p>
                            <div className="h-12"></div>
                            <h4 className="mb-5 text-primary/70 font-semibold uppercase">Previously</h4>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-start">
                            <h2 className="flex-1/2 font-bold text-primary">Sit amet.</h2>
                            <div className="flex-1/2">
                                <h3 className="mb-1">
                                    Consectetur adipisicing
                                </h3>
                                <h4 className="text-primary/70 mb-5">2020-2021</h4>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <h2 className="flex-1/2 font-bold text-primary">Lorem, ipsum.</h2>
                            <div className="flex flex-1/2 flex-col self-start">
                                <h3 className="mb-1">
                                    Lorem, ipsum dolor.
                                </h3>
                                <h4 className="text-primary/70 mb-5">2020-2021</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}