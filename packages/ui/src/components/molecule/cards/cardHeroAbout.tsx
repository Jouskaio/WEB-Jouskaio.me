import React from 'react';
import Image from 'next/image';
import Chip from '../../atom/chip/chip';

/**
 * Properties of the CardHeroAbout component.
 */
export type CardHeroAboutProps = {
    /**
     * Small label above the headline (e.g., "About me").
     */
    title: string;
    /**
     * Headline: the main title (h1) of the page.
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
     * Short labels shown as chips under the text (e.g., "Paris", "IoT").
     */
    pills?: string[];
    /**
     * Width and height of the image, to reserve its place (portrait 3:4 by default).
     */
    imageWidth?: number;
    imageHeight?: number;
    /**
     * Actions shown at the end of the text (buttons).
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
     * AOS animation effect of the image (e.g., "fade-right").
     */
    imageAosEffect?: string;
    /**
     * AOS animation effect of the text (e.g., "fade-left").
     */
    textAosEffect?: string;
};

/**
 * Molecule Component: Card Hero About
 * The hero of the About page: a portrait on one side, the headline, an introduction, chips and actions on the other.
 */
export default function CardHeroAbout({
                                            title,
                                            subtitle,
                                            introTitle,
                                            introText,
                                            imageSrc,
                                            imageAlt = '',
                                            pills = [],
                                            imageWidth = 840,
                                            imageHeight = 1120,
                                            children,
                                            classname = '',
                                            aosDuration,
                                            imageAosEffect,
                                            textAosEffect,
                                        }: CardHeroAboutProps) {
    return (
        <header className={`m-cardHeroAbout ${classname}`.trim()}>
            <div
                className="m-cardHeroAbout__m-image"
                data-aos={imageAosEffect || undefined}
                data-aos-duration={aosDuration}
            >
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
                    priority
                    className="m-cardHeroAbout__a-image"
                />
            </div>
            <div
                className="m-cardHeroAbout__m-text"
                data-aos={textAosEffect || undefined}
                data-aos-duration={aosDuration}
            >
                <p className="m-cardHeroAbout__a-eyebrow">{title}</p>
                <h1 className="m-cardHeroAbout__a-headline">{subtitle}</h1>
                {introTitle && <p className="m-cardHeroAbout__a-introTitle">{introTitle}</p>}
                {introText && <p className="m-cardHeroAbout__a-introText">{introText}</p>}
                {pills.length > 0 && (
                    <ul className="m-cardHeroAbout__m-pills" aria-label="Areas">
                        {pills.map((pill) => (
                            <li key={pill}>
                                <Chip>{pill}</Chip>
                            </li>
                        ))}
                    </ul>
                )}
                {children && <div className="m-cardHeroAbout__m-actions">{children}</div>}
            </div>
        </header>
    );
}
