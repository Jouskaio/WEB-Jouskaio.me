import type { CSSProperties, ReactNode } from 'react';

import Media from '../../atom/media/media';
import TextDefault from '../../atom/text/TextDefault';
import TextSpanXS from '../../atom/text/textSpanXS';

export type CardCitationProps = {
    classname?: string;
    style?: CSSProperties;
    urlSource?: string;
    children?: ReactNode;
    urlPhotoProfile?: string;
    urlProfile?: string;
    nameProfile?: string;
    descriptionProfile?: string;
    aosDuration?: number;
    aosEffect?: string;
};

/**
 * Molecule: Card Citation
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
                            ? `Photo de profil de ${nameProfile}`
                            : 'Photo de profil'
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