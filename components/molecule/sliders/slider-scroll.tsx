import React from "react";
// @ts-ignore
import Image from "next/image";


/**
 * Send information to this page
 *
 * @param slides: {type: string, tag: string, title: string, subtitle: string, text: string, media: string}
 */
function SliderScroll({slides}) {
    // METHOD
    return (
        <section role="main">
            {/*-- Slider --*/}
            <div className="velo-slides" data-velo-slider="on" data-velo-theme="light">
                {slides.map(function(slide, i) {
                        {/*-- Image --*/}
                    if (slide.type == "default" && !slide.link) {
                        return (
                                <div className="velo-slide" key={i}>
                                    {/*-- Pre-title hint --*/}
                                    <span
                                        className="velo-slider__hint"><span><span>{slide.tag}</span></span></span> {/*-- Slide BG --*/}
                                    <div className="velo-slide__bg">
                                        {/*-- Border --*/}
                                        <span className="border"><span></span></span>
                                        {/*-- Image --*/}
                                        <figure className="velo-slide__figure"
                                                style={{backgroundImage: slide.media}}>
                                            <Image src={slide.media} alt={""}/>
                                        </figure>
                                    </div>
                                    {/*-- Header --*/}
                                    <header className="velo-slide__header">
                                        <h3 className="velo-slide__title"><span
                                            className="oh"><span>{slide.title}</span></span><span
                                            className="oh"><span>{slide.subtitle}</span></span></h3>
                                        <p className="velo-slide__text"><span
                                            className="oh"><span>{slide.text}</span></span></p>
                                    </header>
                                </div>
                            )
                        } else if (slide.type == "default" && slide.link) {
                            return (
                                <div className="velo-slide" key={i}>
                                    {/*-- Pre-title hint --*/}
                                    <span
                                        className="velo-slider__hint"><span><span>{slide.tag}</span></span></span> {/*-- Slide BG --*/}
                                    <div className="velo-slide__bg">
                                        {/*-- Border --*/}
                                        <span className="border"><span></span></span>
                                        {/*-- Image --*/}
                                        <figure className="velo-slide__figure"
                                                style={{backgroundImage: slide.media}}></figure>
                                    </div>
                                    {/*-- Header --*/}
                                    <header className="velo-slide__header">
                                        <h3 className="velo-slide__title"><span
                                            className="oh"><span>{slide.title}</span></span><span
                                            className="oh"><span>{slide.subtitle}</span></span></h3>
                                        <p className="velo-slide__text"><span
                                            className="oh"><span>{slide.text}</span></span></p>
                                        <span className="velo-slide__btn"><a className="btn-draw btn--white"
                                                                             href={slide.text}><span
                                            className="btn-draw__text"><span>{slide.linkText}</span></span></a></span>
                                    </header>
                                </div>
                            )
                        } else if (slide.type == "video" && !slide.link) {
                            return (
                                <div className="velo-slide" key={i}>
                                    {/*-- Pretitle Hint --*/}
                                        <span className="velo-slider__hint"><span><span>{slide.tag}</span></span></span>
                                    {/*-- Slide BG --*/}
                                    <div className="velo-slide__bg">
                                        {/*-- Border --*/}
                                        <span className="border"><span></span></span> {/*-- Image --*/}
                                        <figure className="velo-slide__figure" style={{backgroundImage: "none"}}></figure>
                                        <div className="velo-slide__vid-wrap">
                                            <video autoPlay={true} muted className="velo-slide__vid" loop={true} poster="">
                                                <source src={slide.media} type={slide.mediaType}/>
                                            </video>
                                        </div>
                                    </div>
                                    {/*-- Header --*/}
                                    <header className="velo-slide__header">
                                        <h3 className="velo-slide__title"><span
                                            className="oh"><span>{slide.title}</span></span><span
                                            className="oh"><span>{slide.subtitle}</span></span></h3>
                                        <p className="velo-slide__text"><span
                                            className="oh"><span>{slide.text}</span></span></p>
                                        </header>
                                </div>
                            )
                        } else if (slide.type == "video" && slide.link) {
                            return (
                                <div className="velo-slide" key={i}>
                                    {/*-- Pretitle Hint --*/}
                                    <span className="velo-slider__hint"><span><span>{slide.tag}</span></span></span>
                                    {/*-- Slide BG --*/}
                                    <div className="velo-slide__bg">
                                        {/*-- Border --*/}
                                        <span className="border"><span></span></span> {/*-- Image --*/}
                                        <figure className="velo-slide__figure" style={{backgroundImage: "none"}}></figure>
                                        <div className="velo-slide__vid-wrap">
                                            <video autoPlay={true} muted className="velo-slide__vid" loop={true} poster="">
                                                <source src={slide.media} type={slide.mediaType}/>
                                            </video>
                                        </div>
                                    </div>
                                    {/*-- Header --*/}
                                    <header className="velo-slide__header">
                                        <h3 className="velo-slide__title"><span
                                            className="oh"><span>{slide.title}</span></span><span
                                            className="oh"><span>{slide.subtitle}</span></span></h3>
                                        <p className="velo-slide__text"><span
                                            className="oh"><span>{slide.text}</span></span></p>
                                        <span className="velo-slide__btn"><a className="btn-draw btn--white" href={slide.link}><span
                                            className="btn-draw__text"><span>{slide.linkText}</span></span></a></span>
                                    </header>
                                </div>
                            )
                        }
                })}

                {/*-- Slide Nav --*/}
                <nav className="velo-slides-nav">
                    <ul className="velo-slides-nav__list">
                        <li>
                            <a className="js-velo-slides-prev velo-slides-nav__prev inactive" href="#0"><i className="icon-up-arrow"></i></a>
                        </li>
                    <li>
                        <a className="js-velo-slides-next velo-slides-nav__next" href="#0"><i className="icon-down-arrow"></i></a>
                    </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}

export default SliderScroll;