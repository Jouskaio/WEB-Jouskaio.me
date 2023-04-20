import React from "react";
// @ts-ignore
import Link from "next/link";
import Icon from "../../atom/icon/icon";
import {shimmer, toBase64} from "../../../lib/preload/preload-image";
// @ts-ignore
import Image from "next/image";

/**
 *
 * @param logo: {src: string, width: number, height: number, classname: string, alt: string}
 * @param pages: [{src: string, class: string, name: string}]
 * @constructor
 */
function Header_top({pages}) {
    return (
        <div className="m-header">
                {pages.map(function(page, i) {
                    return <Link href={{pathname: page.source}} key={i} className={page.class}>{page.name}</Link>
                })}
        </div>
    )
}

export default Header_top;