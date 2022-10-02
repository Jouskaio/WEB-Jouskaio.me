import React from "react";
// @ts-ignore
import Link from "next/link";
// @ts-ignore
import Image from "next/image";
import Icon from "../../atom/icon/icon";

export class IconObject {
  private readonly _src: string;
  private readonly _alt: string;
  private readonly _href: string;
  private readonly _classname: string;

  // Normal signature with defaults
  constructor(src: string = "", alt: string = "", href: string = "", classname: string = "") {
    this._src = src;
    this._alt = alt;
    this._href = href;
    this._classname = classname;
  }


  get src(): string {
    return this._src;
  }

  get alt(): string {
    return this._alt;
  }

  get href(): string {
    return this._href;
  }

  get classname(): string {
    return this._classname;
  }
}

/**
 * Send information to this page
 * @param props
 */
function Sider(props: {type: string, icons: Array<IconObject>}) {
  // ATTRIBUTES
  let icons = props.icons
  let type = props.type

  // METHOD
  return (
    <nav className={"m-sideGlobal"+type}>
      {icons.map(function(icon, i) {
        console.log(icon.src);
        return <Icon href={icon.href} src={icon.src} classname={icon.classname} alt={icon.classname} key={i}/>;
      })}
      {/* > @icon src=src alt=alt href=href class=class*/}
      <nav className="m-sideGlobal__divider"></nav>
    </nav>
  );
};

export default Sider;