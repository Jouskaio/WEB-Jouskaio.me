import React from "react";
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

// import required modules
// @ts-ignore
import { Parallax, Pagination, Navigation, Autoplay } from "swiper";
import Tag from "../quotes/Tag";
// @ts-ignore
import Link from "next/link";


/**
 * Send information to this page
 *
 * @param slides: [{media: string, title: string, linkTo: string, subtitle: string, text: string, tag: [{}]}]
 */
function SliderScroll({slides}) {
    // METHOD
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation, Autoplay]}
                className="m-sliderScroll"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    data-swiper-parallax="-23%"
                ></div>
                {slides.map(function (slide, i) {
                    return (
                        <SwiperSlide key={i} style={{backgroundImage: "url("+slide.media+")", backgroundSize: "cover", backgroundColor: "rgba(0,0,0,.5)", backgroundBlendMode: "multiply"}}>
                            <Link href={slide.linkTo}><a>
                                <div className="m-sliderScroll__title" data-swiper-parallax="-300">
                                    {slide.title}
                                </div>
                                <div className="m-sliderScroll__subtitle" data-swiper-parallax="-200">
                                    {slide.subtitle}
                                </div>
                                <div className="m-sliderScroll__text" data-swiper-parallax="-100">
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

export default SliderScroll;