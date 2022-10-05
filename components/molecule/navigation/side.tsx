import React from "react";
// @ts-ignore
import Link from "next/link";
// @ts-ignore
import Image from "next/image";
import Icon from "../../atom/icon/icon";

/**
 * Send information to this page
 * @param props
 *
 */
function Side(props) {
  // ATTRIBUTES
  let icons = props.icons;
  let type = props.type;

  // METHOD
  return (
    <nav className={"m-sideGlobal"+type}>
      {icons.map(function(icon, i) {
        return <Icon href={icon.href} src={icon.src} classname={icon.classname} alt={icon.alt} key={i}/>;
      })}
      {/* > @icon src=src alt=alt href=href class=class*/}
      <nav className="m-sideGlobal__divider"></nav>
    </nav>
  );
};

export default Side;