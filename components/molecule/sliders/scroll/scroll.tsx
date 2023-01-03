import React, {useEffect} from "react";
// @ts-ignore
import Script from "next/script";
// @ts-ignore
import { useRef, useState } from "react";
// Import Swiper React components
// @ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import 'swiper/css/effect-fade';


// import required modules
// @ts-ignore
import {Parallax, Pagination, Navigation, Autoplay, EffectFade} from "swiper";
import Tag from "../../quotes/Tag";
// @ts-ignore
import Link from "next/link";
import {useWindowSize} from "../../../protons/tools/sizeWindow";


/**
 * Send information to this page
 *
 * @param slides: [{media: string, title: string, linkTo: string, subtitle: string, text: string, tag: [{}]}]
 */
function Scroll({slides}) {
    const size = useWindowSize();
    let numberSlides = 1
    if (size.width <= 768) {
        numberSlides = 1
    } else {
        numberSlides = 3
    }

    // METHOD
    return (
        <>
            <Swiper
                speed={600}
                slidesPerView={numberSlides}
                spaceBetween={30}
                slidesPerGroup={numberSlides}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay, EffectFade]}
                className="m-sliderScroll"
            >
                <div
                    slot="container-start"
                    className={"parallax-bg"}
                    data-swiper-parallax="-23%"
                ></div>
                {slides.map(function (slide, i) {
                    return (
                        <SwiperSlide key={i} style={{backgroundImage: "url("+slide.media+")", backgroundSize: "cover", backgroundColor: "rgba(0,0,0,.5)", backgroundBlendMode: "multiply"}}>
                            <Link href={slide.linkTo}><a>
                                <div className={"title"} data-swiper-parallax="-300">
                                    {slide.title}
                                </div>
                                <div className={"subtitle"} data-swiper-parallax="-200">
                                    {slide.subtitle}
                                </div>
                                <div className={"text"} data-swiper-parallax="-100">
                                    <p>
                                        {slide.text}
                                    </p>
                                    <br/>
                                    <div>
                                        {slide.tag.map(function (tag, t) {
                                            return <Tag key={t} content={tag.content} color={tag.color} classname={tag.classname}/>
                                        })}
                                    </div>
                                </div>
                            </a></Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    );
}

export default Scroll;