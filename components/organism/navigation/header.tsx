import Link from 'next/link';

export type HeaderPage = {
    source: string;
    class: string;
    name: string;
};

export type HeaderProps = {
    pages: HeaderPage[];
};

/**
 * Organism: Header
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
