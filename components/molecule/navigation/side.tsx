import React from "react";
// @ts-ignore
import Link from "next/link";
// @ts-ignore
import Image from "next/image";
import Icon from "../../atom/icon/icon";

/**
 * Send information to this page
 * @param props
 * @param icons : [{href: string, src: string, classname: string, alt: string}]
 * @param type : string
 */
function Side({icons, type, classname}) {
    // METHOD
    return (
    <nav className={classname + " m-sideGlobal m-sideGlobal"+type}>
      {icons.map(function(icon, i) {
         return <Icon href={icon.href} src={icon.src} classname={icon.classname} alt={icon.alt} key={i}/>;
      })}
      <nav className="m-sideGlobal__divider"></nav>
    </nav>
    );
}

export default Side;