import React, { useEffect, useState, type CSSProperties, Suspense, lazy } from 'react';
import Image from 'next/image';

const ReactPlayer = lazy(() => 
    import('react-player/lazy').then((mod) => {
        const Player = (mod as any).default || mod;
        return { default: Player.default || Player };
    })
);

/**
 * Structure of the article displayed on the XL card.
 */
export type CardXLArticle = {
    /**
     * Category tag.
     */
    tag?: string;
    /**
     * Article title.
     */
    title?: string;
    /**
     * Short description text.
     */
    text?: string;
};

/**
 * Properties of the CardXL component.
 */
export type CardXLProps = {
    /**
     * URL of the media to display (supported by ReactPlayer: YouTube, Vimeo, MP4, etc.).
     */
    media: string;
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * Inline CSS styles.
     */
    style?: CSSProperties;
    /**
     * AOS animation duration in milliseconds.
     */
    aosDuration?: number;
    /**
     * AOS animation effect (e.g., "fade-up").
     */
    aosEffect?: string;
    /**
     * Article data to display as an overlay.
     */
    article?: CardXLArticle;
};

/**
 * Molecule Component: Card XL
 * A large multimedia card displaying a background video with textual information.
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
                    Loading...
                </div>
            )}

            <Suspense fallback={null}>
                <div className="m-cardXL__a-media">
                    <ReactPlayer
                        //@ts-ignore
                        url={media}
                        controls={false}
                        playing={isPlaying}
                        muted
                        width="100%"
                        height="100%"
                        loop
                        onReady={() => setIsReady(true)}
                        onError={(e: any) => console.error('ReactPlayer Error:', e)}
                    />
                </div>
            </Suspense>

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
                        ? 'Pause video'
                        : 'Play video'
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