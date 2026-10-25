import React, { useEffect, useState, type CSSProperties, Suspense, lazy } from 'react';

import { useReducedMotion } from '../../../lib/accessibility/useReducedMotion';
import Loader from '../../atom/loader/loader';
import TextDefault from '../../atom/text/textDefault';

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
    const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

    const reducedMotion = useReducedMotion();

    useEffect(() => {
        // The video starts paused for visitors who asked for reduced motion
        setIsPlaying(!reducedMotion);
    }, [reducedMotion]);

    const handleTogglePlayback = () => {
        setIsPlaying((previousState) => !previousState);
    };

    return (
        <div
            // The state goes in a data attribute, not in the class: the animation library adds its own classes
            // (aos-animate) to this element, and React would erase them if the class changed
            className={`m-cardXL ${classname}`.trim()}
            data-status={status}
            style={style}
            data-aos={aosEffect || undefined}
            data-aos-duration={aosDuration}
        >
            {status === 'loading' && (
                <div className="m-cardXL__m-placeholder">
                    <Loader label="Loading video" />
                </div>
            )}
            {status === 'error' && (
                <div className="m-cardXL__m-placeholder" role="status">
                    <TextDefault>The video could not be loaded.</TextDefault>
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
                        // iPhones only play a video inside the page with this attribute
                        playsinline
                        config={{ file: { attributes: { playsInline: true, disablePictureInPicture: true } } }}
                        onReady={() => setStatus('ready')}
                        onError={(e: any) => {
                            console.error('ReactPlayer Error:', e);
                            // The browser refused to start the video (low power mode, data saver): the video is
                            // fine, it waits for a tap on the play button
                            if (e?.name === 'NotAllowedError' || e?.name === 'AbortError') {
                                setIsPlaying(false);
                                return;
                            }
                            // An error after the video was ready does not hide it
                            setStatus((previous) => (previous === 'ready' ? previous : 'error'));
                        }}
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
                <span
                    className="m-cardXL__a-playIcon"
                    style={{ '--icon': `url(${isPlaying ? '/icons/pause.svg' : '/icons/play.svg'})` } as React.CSSProperties}
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