import type { CSSProperties, ReactNode } from 'react';

import Media from '../../atom/media/media';
import TextDefault from '../../atom/text/TextDefault';
import TextSpanXS from '../../atom/text/textSpanXS';

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
 * A card displaying a citation with the photo and profile of its author.
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
        <div
            className={`m-cardCitation ${classname}`.trim()}
            style={style}
            data-aos={aosEffect}
            data-aos-duration={aosDuration}
        >
            <div className="m-cardCitation__m-divImage">
                <Media
                    style={{ objectFit: 'cover' }}
                    src={urlPhotoProfile}
                    alt={
                        nameProfile
                            ? `Profile picture of ${nameProfile}`
                            : 'Profile picture'
                    }
                    height="100"
                    width="100"
                    classname="m-cardCitation__m-profilDivImg"
                />
            </div>

            <a href={urlSource} className="m-cardCitation__a-content">
                <TextDefault>“{children}”</TextDefault>
            </a>

            <a href={urlProfile} className="m-cardCitation__m-profilDiv">
                <div className="m-cardCitation__m-profilDivText">
                    <TextDefault classname="m-cardCitation__m-profilDivText--title">
                        {nameProfile}
                    </TextDefault>

                    <TextSpanXS>{descriptionProfile}</TextSpanXS>
                </div>
            </a>
        </div>
    );
}