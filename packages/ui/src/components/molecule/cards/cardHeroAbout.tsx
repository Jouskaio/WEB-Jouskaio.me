import React from 'react';
import Image from 'next/image';
import TextH1 from '../../atom/text/textH1';
import TextH4 from '../../atom/text/textH4';
import TextDefault from '../../atom/text/TextDefault';

/**
 * Properties of the CardHeroAbout component.
 */
export type CardHeroAboutProps = {
    /**
     * Hero title.
     */
    title: string;
    /**
     * Hero subtitle.
     */
    subtitle: string;
    /**
     * Intro title (e.g., "Hi, I'm Manon.").
     */
    introTitle?: string;
    /**
     * Intro text/description.
     */
    introText?: string;
    /**
     * Source URL of the hero image.
     */
    imageSrc: string;
    /**
     * Alternative text for the image.
     */
    imageAlt?: string;
    /**
     * Additional content to display in the text container.
     */
    children?: React.ReactNode;
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * AOS animation duration in milliseconds.
     */
    aosDuration?: number;
    /**
     * AOS animation effect (e.g., "fade-up").
     */
    aosEffect?: string;
};

/**
 * Molecule Component: Card Hero About
 * A hero section specifically designed for the About page, featuring a large responsive image and text.
 */
export default function CardHeroAbout({
                                            title,
                                            subtitle,
                                            introTitle,
                                            introText,
                                            imageSrc,
                                            imageAlt = '',
                                            children,
                                            classname = '',
                                            aosDuration,
                                            aosEffect,
                                        }: CardHeroAboutProps) {
    return (
        <div
            className={`m-cardHeroAbout ${classname}`.trim()}
            data-aos={aosEffect || undefined}
            data-aos-duration={aosDuration}
        >
            <div className="m-cardHeroAbout__title-container">
                <TextH1 classname="m-cardHeroAbout__a-title">{title}</TextH1>
            </div>
            <div className="m-cardHeroAbout__image-container">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    priority
                    className="a-image"
                />
            </div>
            <div className="m-cardHeroAbout__text-container">
                <div className="m-cardHeroAbout__subtitle">
                    <TextH4>{subtitle}</TextH4>
                </div>
                {(introTitle || introText) && (
                    <div className="m-cardHeroAbout__intro">
                        {introTitle && (
                            <TextH4 classname="m-cardHeroAbout__intro-title">
                                {introTitle}
                            </TextH4>
                        )}
                        {introText && (
                            <TextDefault classname="m-cardHeroAbout__intro-text">
                                {introText}
                            </TextDefault>
                        )}
                    </div>
                )}
                {children && (
                    <div className="m-cardHeroAbout__extra">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}
