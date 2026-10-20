import React, { type CSSProperties, type ReactNode } from 'react';

import Media from '../../atom/media/media';

/**
 * Properties of the CardCitation component.
 */
export type CardCitationProps = {
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * Inlined CSS styles.
     */
    style?: CSSProperties;
    /**
     * URL of the citation source.
     */
    urlSource?: string;
    /**
     * The citation text.
     */
    children?: ReactNode;
    /**
     * URL of the author's profile picture.
     */
    urlPhotoProfile?: string;
    /**
     * URL of the author's profile.
     */
    urlProfile?: string;
    /**
     * Author's name.
     */
    nameProfile?: string;
    /**
     * Description or title of the author (e.g., "Developer").
     */
    descriptionProfile?: string;
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
 * Molecule Component: Card Citation
 * A glass card displaying a quote, with the photo and the name of its author.
 */
export default function CardCitation({
                                         classname = '',
                                         style,
                                         urlSource = '#',
                                         children,
                                         urlPhotoProfile = '',
                                         urlProfile = '#',
                                         nameProfile,
                                         descriptionProfile,
                                         aosDuration,
                                         aosEffect,
                                     }: CardCitationProps) {
    return (
        <figure
            className={`m-cardCitation ${classname}`.trim()}
            style={style}
            data-aos={aosEffect || undefined}
            data-aos-duration={aosDuration}
        >
            <Media
                style={{ objectFit: 'cover' }}
                src={urlPhotoProfile}
                alt=""
                height="96"
                width="96"
                classname="m-cardCitation__a-avatar"
            />
            <div className="m-cardCitation__m-body">
                <blockquote className="m-cardCitation__a-quote">
                    <p>
                        <a href={urlSource}>“{children}”</a>
                    </p>
                </blockquote>
                <figcaption className="m-cardCitation__a-author">
                    <a href={urlProfile}>{nameProfile}</a>
                    {descriptionProfile && <span> · {descriptionProfile}</span>}
                </figcaption>
            </div>
        </figure>
    );
}
