import { Fragment, type CSSProperties } from 'react';

/**
 * RevealText component properties.
 */
export type RevealTextProps = {
    /**
     * The text, revealed word by word.
     */
    children: string;
    /**
     * Delay before the first word, in milliseconds.
     */
    delay?: number;
    /**
     * Additional CSS classes.
     */
    classname?: string;
};

/**
 * Atom Component: RevealText
 *
 * A title whose words rise and appear one after the other. The text is there only once, as plain words, so screen
 * readers and search engines read it as usual. The words show without any movement for visitors who asked for
 * reduced motion.
 */
export default function RevealText({ children, delay = 0, classname = '' }: RevealTextProps) {
    const words = children.split(' ');

    return (
        <span className={`a-revealText ${classname}`.trim()} style={{ '--delay': `${delay}ms` } as CSSProperties}>
            {words.map((word, index) => (
                <Fragment key={`${word}-${index}`}>
                    <span className="a-revealText__a-word" style={{ '--i': index } as CSSProperties}>
                        {word}
                    </span>
                    {index < words.length - 1 ? ' ' : ''}
                </Fragment>
            ))}
        </span>
    );
}
