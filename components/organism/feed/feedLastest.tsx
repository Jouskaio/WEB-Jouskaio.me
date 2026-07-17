import Pin, { type PinSize, type PinTag } from '../../molecule/feed/pin';

export type FeedLatestPin = {
    title: string;
    text: string;
    media: string;
    url: string;
    size: PinSize;
    tags?: PinTag[];
};

export type FeedLatestProps = {
    pins: FeedLatestPin[];
    classname?: string;
};

/**
 * Organism: Feed Latest
 */
export default function FeedLatest({
                                       pins,
                                       classname = '',
                                   }: FeedLatestProps) {
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
