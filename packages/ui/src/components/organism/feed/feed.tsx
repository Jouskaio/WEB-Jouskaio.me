import Pin, { type PinSize, type PinTag } from '../../molecule/feed/pin';

export type FeedPin = {
    title: string;
    text: string;
    media: string;
    url: string;
    size: PinSize;
    tags?: PinTag[];
};

export type FeedProps = {
    pins: FeedPin[];
    classname?: string;
};

/**
 * Organism: Feed
 */
export default function Feed({
                                 pins,
                                 classname = '',
                             }: FeedProps) {
    return (
        <div className={`m-feed ${classname}`.trim()}>
            {pins.map((pin, index) => (
                <Pin
                    key={`${pin.title}-${index}`}
                    size={pin.size}
                    media={pin.media}
                    tags={pin.tags}
                    title={pin.title}
                    text={pin.text}
                    url={pin.url}
                />
            ))}
        </div>
    );
}
