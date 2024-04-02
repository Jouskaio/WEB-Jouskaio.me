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

// data-aos="zoom-in-up"
function Header({pages}) {
    return (
        <div className="o-header" data-aos={"zoom-in-up"} data-aos-duration={1000}>
            {pages.map(function (page, i) {
                return (
                    <Link href={{ pathname: page.source }} key={i} legacyBehavior>
                        <a className={page.class}>{page.name}</a>
                    </Link>
                );
            })}
        </div>
    )
}

export default Header;