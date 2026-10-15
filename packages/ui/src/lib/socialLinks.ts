/**
 * A profile of mine on a social network.
 */
export type SocialLink = {
    /**
     * Destination URL.
     */
    href: string;
    /**
     * Icon, served by the website (`/icons`).
     */
    icon: string;
    /**
     * Name of the network, also the accessible name of the link.
     */
    alt: string;
};

/**
 * My social networks, shared by the footer and the quick navigation.
 */
export const socialLinks: SocialLink[] = [
    { href: 'https://www.pinterest.fr/jouskaio/', icon: '/icons/pinterest.png', alt: 'Pinterest' },
    { href: 'https://twitter.com/Jouskaio_', icon: '/icons/twitter.png', alt: 'Twitter' },
    { href: 'https://www.instagram.com/jouskaio/', icon: '/icons/instagram.png', alt: 'Instagram' },
    { href: 'https://github.com/Jouskaio', icon: '/icons/github.png', alt: 'GitHub' },
    { href: 'https://www.linkedin.com/in/manonsalsou/', icon: '/icons/linkedin.png', alt: 'LinkedIn' },
    {
        href: 'https://open.spotify.com/user/desespery?si=ac027624ff264504&nd=1',
        icon: '/icons/spotify.png',
        alt: 'Spotify',
    },
];
