import Image from 'next/image';

export const ShowCaseCoursel = () => {
    const images = [
        "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f",
        "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187"
    ];

    return (
        <div className="w-full flex flex-row justify-center relative carousel-cards-card">
            <div
                key={images[0]}
                className="transition-all h-96 w-72 duration-500 shadow-black drop-shadow-lg">
                <Image
                    src={images[0]}
                    width={200}
                    height={250}
                    alt={`Slide ${0 + 1}`}
                    className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute inset-0 opacity-50 bg-black"></div>
            </div>
            <div
                key={images[1]}
                className="transition-all h-96 w-72 duration-500 shadow-black drop-shadow-lg absolute">
                <Image
                    src={images[1]}
                    width={200}
                    height={250}
                    alt={`Slide ${0 + 1}`}
                    className="w-full h-full object-cover rounded-md"
                />
            </div>
            <div
                key={images[2]}
                className="transition-all h-96 w-72 duration-500 shadow-black drop-shadow-lg absolute">
                <Image
                    src={images[2]}
                    width={200}
                    height={250}
                    alt={`Slide ${2 + 1}`}
                    className="w-full h-full object-cover rounded-md"
                />
            </div>
            <div
                key={images[3]}
                className="transition-all h-96 w-72 duration-500 shadow-black drop-shadow-lg absolute right-3.5">
                <Image
                    src={images[3]}
                    width={200}
                    height={250}
                    alt={`Slide ${3 + 1}`}
                    className="w-full h-full object-cover rounded-md"
                />
            </div>
        </div>
    );
};

