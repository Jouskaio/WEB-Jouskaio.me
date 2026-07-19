import TextDefault from '../../atom/text/TextDefault';
import TextH3 from '../../atom/text/textH3';
import Image from 'next/image';

export type FooterProps = {
    classname?: string;
};

/**
 * Organism: Footer
 */
export default function Footer({ classname = '' }: FooterProps) {
    const socialLinks = [
        {
            href: 'https://www.pinterest.fr/jouskaio/',
            icon: '/icons/pinterest.png',
            alt: 'Pinterest',
        },
        {
            href: 'https://twitter.com/Jouskaio_',
            icon: '/icons/twitter.png',
            alt: 'Twitter',
        },
        {
            href: 'https://www.instagram.com/jouskaio/',
            icon: '/icons/instagram.png',
            alt: 'Instagram',
        },
        {
            href: 'https://github.com/Jouskaio',
            icon: '/icons/github.png',
            alt: 'GitHub',
        },
        {
            href: 'https://www.linkedin.com/in/manonsalsou/',
            icon: '/icons/linkedin.png',
            alt: 'LinkedIn',
        },
        {
            href: 'https://open.spotify.com/user/desespery?si=ac027624ff264504&nd=1',
            icon: '/icons/spotify.png',
            alt: 'Spotify',
        },
    ];

    return (
        <div
            className={`o-footer ${classname}`.trim()}
            data-aos="fade-up"
            data-aos-duration={1000}
        >
            <hr className="o-footer__a-hr" />

            <TextH3 classname="o-footer__a-textH3">
                Don&apos;t hesitate to drop me an email or contact me via my profiles
                pictures
            </TextH3>

            <nav className="o-footer__m-divRow">
                <a
                    href="mailto:manon.salsou@icloud.com"
                    className="o-footer__a-mail"
                >
                    manon.salsou@icloud.com
                </a>

                <nav className="o-footer__m-divRowOneIcons">
                    {socialLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="o-footer__a-icons"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                src={link.icon}
                                className="o-footer__a-icons--img"
                                alt={link.alt}
                                width={24}
                                height={24}
                            />
                        </a>
                    ))}
                </nav>
            </nav>

            <nav className="o-footer__m-divRow o-footer__m-divRowTwo">
                <TextDefault>Made with ♥ in Paris</TextDefault>
                <TextDefault classname="o-footer__a-rowLast">
                    ©2023 Manon Salsou
                </TextDefault>
            </nav>
        </div>
    );
}
