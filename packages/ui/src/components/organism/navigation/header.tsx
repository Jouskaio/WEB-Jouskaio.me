import Link from 'next/link';

/**
 * Structure of a navigation page in the Header.
 */
export type HeaderPage = {
    /**
     * Destination URL (internal or external).
     */
    source: string;
    /**
     * Additional CSS classes for the link.
     */
    class: string;
    /**
     * Displayed name of the page.
     */
    name: string;
};

/**
 * Properties of the Header component.
 */
export type HeaderProps = {
    /**
     * List of navigation pages to display.
     */
    pages: HeaderPage[];
};

/**
 * Organism Component: Header
 * The main navigation bar of the site.
 */
export default function Header({ pages }: HeaderProps) {
    return (
        <div className="o-header" data-aos="zoom-in-up" data-aos-duration={1000}>
            {pages.map((page, index) => {
                const isExternal = page.source.startsWith('http');

                return isExternal ? (
                    <a
                        href={page.source}
                        className={page.class}
                        key={`${page.source}-${index}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {page.name}
                    </a>
                ) : (
                    <Link href={page.source} key={`${page.source}-${index}`} legacyBehavior>
                        <a className={page.class}>{page.name}</a>
                    </Link>
                );
            })}
        </div>
    );
}
