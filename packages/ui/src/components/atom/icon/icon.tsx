import Image from 'next/image';
import Link from 'next/link';

export type IconProps = {
    href: string;
    src: string;
    classname?: string;
    alt?: string;
    id?: string;
};

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
