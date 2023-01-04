import Media from "../../atom/media/media";
import React from "react";
import TextLink from "../../atom/text/textLink";
// @ts-ignore
import Link from "next/link";
import Icon from "../../atom/icon/icon";
import {shimmer, toBase64} from "../../protons/preload/preload-image";
// @ts-ignore
import Image from "next/image";

/**
 *
 * @param logo: {src: string, width: number, height: number, classname: string, alt: string}
 * @param pages: [{src: string, class: string, name: string}]
 * @constructor
 */
function Header_top({source, height, classname, alt, pages}) {
    return (
        <div className="m-header">
            <Link href={"/"}><Image className={"a-media "+ classname } src={source} alt={alt} height={height} width={"100%"} objectFit='contain' unoptimized={true}  placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer("100%", height))}`} loader={() => source}/></Link>
            <div className="m-header__pagesDiv">
                {pages.map(function(page, i) {
                    return <Link href={page.source} key={i}><a className={page.class}>{page.name}</a></Link>
                })}
            </div>
        </div>
    )
}

export default Header_top;