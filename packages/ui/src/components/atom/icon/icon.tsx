import Image from 'next/image';
import Link from 'next/link';

/**
 * Icon component properties.
 */
export type IconProps = {
    /**
     * Destination URL for the link wrapping the icon.
     */
    href: string;
    /**
     * URL of the icon image.
     */
    src: string;
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * Alternative text for the icon image.
     */
    alt?: string;
    /**
     * Unique identifier for the element.
     */
    id?: string;
};

/**
 * Atom Component: Icon
 *
 * Displays a clickable icon wrapped in a Next.js link.
 */
export default function Icon({
                                 href,
                                 src,
                                 classname = '',
                                 alt = '',
                                 id,
                             }: IconProps) {
    return (
        <Link id={id} href={href} legacyBehavior>
            <a className={`a-icon ${classname} ${id ?? ''}`.trim()}>
                <Image
                    width={24}
                    height={24}
                    className="a-icon"
                    src={src}
                    alt={alt}
                    unoptimized
                />
            </a>
        </Link>
    );
}
