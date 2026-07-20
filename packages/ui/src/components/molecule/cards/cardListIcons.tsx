import Image, { type StaticImageData } from 'next/image';
import {
    type CSSProperties,
    type MouseEvent,
    type TouchEvent,
    useEffect,
    useRef,
    useState,
} from 'react';

import TextH4 from '../../atom/text/textH4';
import TextDefault from '../../atom/text/TextDefault';

export type CardListIconItem = {
    icon: string | StaticImageData;
    title?: string;
    text: string;
    alt?: string;
};

export type CardListIconsProps = {
    icons: CardListIconItem[];
    classname?: string;
    aosDuration?: number;
    aosEffect?: string;
    intervalDuration?: number;
    style?: CSSProperties;
};

const SWIPE_THRESHOLD = 50;

/**
 * Molecule: Card List Icons
 */
export default function CardListIcons({
                                          icons,
                                          classname = '',
                                          aosDuration,
                                          aosEffect,
                                          intervalDuration = 2500,
                                          style,
                                      }: CardListIconsProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const startX = useRef(0);
    const isDragging = useRef(false);

    const iconsCount = icons.length;

    const showPreviousItem = () => {
        if (iconsCount === 0) {
            return;
        }

        setCurrentIndex(
            (previousIndex) =>
                (previousIndex - 1 + iconsCount) % iconsCount
        );
    };

    const showNextItem = () => {
        if (iconsCount === 0) {
            return;
        }

        setCurrentIndex(
            (previousIndex) => (previousIndex + 1) % iconsCount
        );
    };

    const handleDrag = (clientX: number) => {
        if (!isDragging.current) {
            return;
        }

        const deltaX = clientX - startX.current;

        if (deltaX > SWIPE_THRESHOLD) {
            showPreviousItem();
            isDragging.current = false;
        } else if (deltaX < -SWIPE_THRESHOLD) {
            showNextItem();
            isDragging.current = false;
        }
    };

    const handleTouchStart = (
        event: TouchEvent<HTMLDivElement>
    ) => {
        startX.current = event.touches[0].clientX;
        isDragging.current = true;
    };

    const handleTouchMove = (
        event: TouchEvent<HTMLDivElement>
    ) => {
        handleDrag(event.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        isDragging.current = false;
    };

    const handleMouseDown = (
        event: MouseEvent<HTMLDivElement>
    ) => {
        startX.current = event.clientX;
        isDragging.current = true;
    };

    const handleMouseMove = (
        event: MouseEvent<HTMLDivElement>
    ) => {
        handleDrag(event.clientX);
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    useEffect(() => {
        if (iconsCount <= 1) {
            return;
        }

        const interval = window.setInterval(() => {
            setCurrentIndex(
                (previousIndex) =>
                    (previousIndex + 1) % iconsCount
            );
        }, intervalDuration);

        return () => {
            window.clearInterval(interval);
        };
    }, [iconsCount, intervalDuration]);

    if (iconsCount === 0) {
        return null;
    }

    return (
        <div
            className={`m-cardListIcons ${classname}`.trim()}
            style={style}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            data-aos={aosEffect}
            data-aos-duration={aosDuration}
        >
            {icons.map((item, index) => {
                const isActive = index === currentIndex;

                return (
                    <div
                        className={[
                            'm-cardListIcons__a-item',
                            isActive ? 'active' : 'hidden',
                        ].join(' ')}
                        key={`${item.title ?? item.text}-${index}`}
                        aria-hidden={!isActive}
                    >
                        <div className="m-cardListIcons--background" />

                        <div className="m-cardListIcons__a-div">
                            <Image
                                className="m-cardListIcons__a-icons"
                                src={item.icon}
                                alt={item.alt ?? item.title ?? ''}
                                height={56}
                                width={56}
                            />

                            <div className="m-cardListIcons__a-divText">
                                {item.title && (
                                    <TextH4 classname="m-cardListIcons__a-title">
                                        {item.title}
                                    </TextH4>
                                )}

                                <TextDefault classname="m-cardListIcons__a-text">
                                    {item.text}
                                </TextDefault>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}