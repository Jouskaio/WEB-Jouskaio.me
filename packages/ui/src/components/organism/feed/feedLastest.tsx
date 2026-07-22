import Pin, { type PinSize, type PinTag } from '../../molecule/feed/pin';

/**
 * Structure of an element (Pin) in the latest items feed.
 */
export type FeedLatestPin = {
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
 * Properties of the FeedLatest component.
 */
export type FeedLatestProps = {
    /**
     * List of the latest items to display.
     */
    pins: FeedLatestPin[];
    /**
     * Additional CSS classes.
     */
    classname?: string;
};

/**
 * Organism Component: FeedLatest
 * Displays the latest items added in a Pinterest-style feed.
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
