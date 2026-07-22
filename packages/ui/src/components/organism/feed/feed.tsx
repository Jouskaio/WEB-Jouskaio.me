import Pin, { type PinSize, type PinTag } from '../../molecule/feed/pin';

/**
 * Structure of an element (Pin) in the global feed.
 */
export type FeedPin = {
    /**
     * Title of the element.
     */
    title: string;
    /**
     * Description text.
     */
    text: string;
    /**
     * Image URL.
     */
    media: string;
    /**
     * Destination URL.
     */
    url: string;
    /**
     * Size of the element (small, medium, large).
     */
    size: PinSize;
    /**
     * List of associated tags.
     */
    tags?: PinTag[];
};

/**
 * Properties of the Feed component.
 */
export type FeedProps = {
    /**
     * List of elements to display in the feed.
     */
    pins: FeedPin[];
    /**
     * Additional CSS classes.
     */
    classname?: string;
};

/**
 * Organism Component: Feed
 * A Pinterest-style feed assembling several Pin molecules.
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
