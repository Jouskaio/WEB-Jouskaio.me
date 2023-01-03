import Media from "../../atom/media/media";
import React from "react";
import TextLink from "../../atom/text/textLink";
// @ts-ignore
import Link from "next/link";

/**
 *
 * @param logo: {src: string, width: number, height: number, classname: string, alt: string}
 * @param pages: [{src: string, class: string, name: string}]
 * @constructor
 */
function Header({source, height, classname, alt, pages}) {
    return (
        <div className="o-header">
            <Media src={source} width={"100%"} height={height} classname={classname} alt={alt}/>
            <div className="o-header__pagesDiv">
                {pages.map(function(page, i) {
                    return <Link href={page.source} key={i}><a className={page.class}>{page.name}</a></Link>
                    //return <TextLink src={page.source} classname={page.class} key={i}>{page.name}</TextLink>
                })}
            </div>
        </div>
    )
}

export default Header;