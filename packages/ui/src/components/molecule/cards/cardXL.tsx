import type { CSSProperties } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ReactPlayer = dynamic(() => import('react-player/lazy'), {
    ssr: false,
});

export type CardXLArticle = {
    tag?: string;
    title?: string;
    text?: string;
};

export type CardXLProps = {
    media: string;
    classname?: string;
    style?: CSSProperties;
    aosDuration?: number;
    aosEffect?: string;
    article?: CardXLArticle;
};

/**
 * Molecule: Card XL
 */
export default function CardXL({
                                   media,
                                   classname = '',
                                   style,
                                   aosDuration,
                                   aosEffect,
                                   article,
                               }: CardXLProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setIsPlaying(true);
    }, []);

    const handleTogglePlayback = () => {
        setIsPlaying((previousState) => !previousState);
    };

    return (
        <div
            className={`m-cardXL ${classname}`.trim()}
            style={style}
            data-aos={aosEffect}
            data-aos-duration={aosDuration}
        >
            {!isReady && (
                <div className="video-loader" role="status">
                    Chargement...
                </div>
            )}

            <ReactPlayer
                className="m-cardXL__a-media"
                url={media}
                controls={false}
                playing={isPlaying}
                muted
                width="100%"
                height="100%"
                loop
                onReady={() => setIsReady(true)}
            />

            <button
                type="button"
                className={[
                    'm-cardXL__a-play',
                    !isPlaying ? 'm-cardXL__a-play--play' : '',
                ]
                    .filter(Boolean)
                    .join(' ')}
                onClick={handleTogglePlayback}
                aria-label={
                    isPlaying
                        ? 'Mettre la vidéo en pause'
                        : 'Lire la vidéo'
                }
                aria-pressed={isPlaying}
            >
                <Image
                    src={isPlaying ? '/icons/pause.svg' : '/icons/play.svg'}
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden="true"
                />
            </button>

            {article && (
                <div className="m-cardXL__a-article">
                    {article.tag && <h5>{article.tag}</h5>}
                    {article.title && <h3>{article.title}</h3>}
                    {article.text && <p>{article.text}</p>}
                </div>
            )}
        </div>
    );
}