import React from "react";
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
            <Link href={{pathname: "/"}}>
                <img alt={alt} src={source} className={"a-media "+ classname } width={"100%"} height={height} style={{objectFit:"fill"}} placeholder="blur" onLoad={() => source}/>
            </Link>
            <div className="m-header__pagesDiv">
                {pages.map(function(page, i) {
                    return <Link href={{pathname: page.source}} key={i} className={page.class}>{page.name}</Link>
                })}
            </div>
        </div>
    )
}

export default Header_top;