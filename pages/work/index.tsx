import React, { useEffect, useRef, useState } from "react";
import TextDefault from "../../components/atom/text/TextDefault";
import { useWindowSize } from "../../lib/motion/sizeWindow";
import TextH1 from "../../components/atom/text/textH1";

const Works = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    const [totalItems, setTotalItems] = useState(0);
    const size = useWindowSize();
    const statusAOS = size && size.width !== undefined;

    useEffect(() => {
        if (carouselRef.current) {
            const items = carouselRef.current.getElementsByClassName('m-carousel__item');
            setTotalItems(items.length);
        }
    }, []);  // S'exécute une fois après le premier montage

    useEffect(() => {
        console.log("Updated total items:", totalItems);  // Ceci affichera la valeur mise à jour de totalItems
    }, [totalItems]);  // S'exécute à chaque fois que totalItems change

    const scrollCarousel = (direction) => {
        let newIndex = currentIndex + direction;
        if (newIndex < 0) {
            newIndex = totalItems - 1;
        } else if (newIndex >= totalItems) {
            newIndex = 0;
        }
        setCurrentIndex(newIndex);
    };

    const offset = -currentIndex * (302 + 20);

    return (
        <section className="l-works">
            <TextH1 classname={"l-works__a-title"}>Works</TextH1>
            <div className="l-works__carousel m-carousel-container" style={statusAOS && size.width > 768 ? { width: `${size.width - 150}px` } : {}}>
                <div className="m-carousel" ref={carouselRef} style={{transform: `translateX(${offset}px)`}}>
                    <div className="m-carousel__item">
                        <img src="/images/jean-camille-sormain.png" alt="Image 1"/>
                        <TextDefault>Titre 1</TextDefault>
                    </div>
                    <div className="m-carousel__item">
                        <img src="/images/jean-camille-sormain.png" alt="Image 1"/>
                        <TextDefault>Titre 1</TextDefault>
                    </div>
                    <div className="m-carousel__item">
                        <img src="/images/jean-camille-sormain.png" alt="Image 1"/>
                        <TextDefault>Titre 1</TextDefault>
                    </div>
                    <div className="m-carousel__item">
                        <img src="/images/jean-camille-sormain.png" alt="Image 1"/>
                        <TextDefault>Titre 1</TextDefault>
                    </div>
                    <div className="m-carousel__item">
                        <img src="/images/jean-camille-sormain.png" alt="Image 1"/>
                        <TextDefault>Titre 1</TextDefault>
                    </div>
                    <div className="m-carousel__item">
                        <img src="/images/jean-camille-sormain.png" alt="Image 1"/>
                        <TextDefault>Titre 1</TextDefault>
                    </div>
                    <div className="m-carousel__item">
                        <img src="/images/jean-camille-sormain.png" alt="Image 1"/>
                        <TextDefault>Titre 1</TextDefault>
                    </div>
                    <div className="m-carousel__item">
                        <img src="/images/jean-camille-sormain.png" alt="Image 1"/>
                        <TextDefault>Titre 1</TextDefault>
                    </div>


                </div>
                <div className="m-navCarousel-buttons">
                    <button
                        className="m-navCarousel-button m-navCarousel-button--left"
                        onClick={() => scrollCarousel(-1)}
                    >
                        &#10094;
                    </button>
                    <button
                        className="m-navCarousel-button m-navCarousel-button--right"
                        onClick={() => scrollCarousel(1)}
                    >
                        &#10095;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Works;
