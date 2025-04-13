import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useWindowSize } from "../../lib/motion/sizeWindow";
import TextH1 from "../../components/atom/text/textH1";

export default function WorkPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const size = useWindowSize();
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const itemsLength = carouselRef.current?.children.length || 0;

    const scrollCarousel = (direction: number) => {
        let newIndex = currentIndex + direction;

        if (newIndex < 0) newIndex = itemsLength - 1;
        else if (newIndex >= itemsLength) newIndex = 0;

        setCurrentIndex(newIndex);
    };

    // Autoplay every 3 seconds
    useEffect(() => {
        if (itemsLength <= 1) return;

        intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % itemsLength);
        }, 3000);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [itemsLength]);

    const offset = -currentIndex * (302 + 20);
    const statusAOS = size?.width !== undefined;

    return (
        <section className="l-works">
            <Head>
                <title>Works – Jouskaio</title>
            </Head>

            <TextH1 classname="l-works__a-title">Works</TextH1>

            <div
                className="l-works__carousel m-carousel-container"
                style={
                    statusAOS && size.width > 768
                        ? { width: `${size.width - 150}px` }
                        : {}
                }
            >
                <div
                    className="m-carousel"
                    ref={carouselRef}
                    style={{ transform: `translateX(${offset}px)` }}
                >
                    <div className="m-carousel__item">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <Image src="/images/img.png" alt="Image 1" width={300} height={200} />
                            <p className="m-carousel__title">Titre 1</p>
                            <p className="m-carousel__desc">Go to your next event with us</p>
                            <p className="m-carousel__tags">Design - Web - React</p>
                        </a>
                    </div>
                    <div className="m-carousel__item">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <Image src="/images/img.png" alt="Image 2" width={300} height={200} />
                            <p className="m-carousel__title">Titre 2</p>
                            <p className="m-carousel__desc">Another event experience</p>
                            <p className="m-carousel__tags">Design - Web - React</p>
                        </a>
                    </div>
                    <div className="m-carousel__item">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <Image src="/images/img.png" alt="Image 3" width={300} height={200} />
                            <p className="m-carousel__title">Titre 3</p>
                            <p className="m-carousel__desc">Something unique</p>
                            <p className="m-carousel__tags">Design - Web - React</p>
                        </a>
                    </div>
                </div>

               <nav className={"m-carousel-buttonsNav"}>
                   <div className="m-navCarousel-buttons">
                       <button
                           className="m-navCarousel-button m-navCarousel-button--left"
                           onClick={() => scrollCarousel(-1)}
                       >
                           <Image src={"/icons/next.svg"} className={"m-carousel__buttonImg"} alt={"Previous"} width={30} height={30} />
                       </button>
                       <button
                           className="m-navCarousel-button m-navCarousel-button--right"
                           onClick={() => scrollCarousel(1)}
                       >
                           <Image src={"/icons/next.svg"} alt={"Previous"} width={30} height={30} />

                       </button>
                   </div>
               </nav>
            </div>
        </section>
    );
}