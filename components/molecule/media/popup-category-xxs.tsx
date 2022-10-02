import React from "react";
// @ts-ignore
import Link from "next/link";
// @ts-ignore
import Image from "next/image";

/**
 * Send information to this page
 * @param props
 */
function PopCategoryXXS(props: {content: Array<string>, title: string, number: string, subtitle: string, media: string}) {
    // ATTRIBUTES
    let content = props.content
    let title = props.title
    let number = props.number
    let subtitle = props.subtitle
    let media = props.media

    // METHOD
    return (
      <div className="m-popupCategoryXXS">
        <nav className="m-popupCategoryXXS__mediaContainer"
             style={{backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5) ), url("+media+")"}}>
          <p className="m-popupCategoryXXS__content a-spanXS">
              {content.map((line) => <p key={line}>{line}</p>)}
          </p>
        </nav>
        <nav className="m-popupCategoryXXS__titleContainer">
            <span className="a-spanXL m-popupCategoryXXS__number">{number}</span>
            <nav className="m-popupCategoryXXS__textContainer">
                <span className="a-spanL m-popupCategoryXXS__title">{title}</span>
                <p className="a-spanXS m-popupCategoryXXS__subtitle">{subtitle}</p>
            </nav>
        </nav>
      </div>
    );
};

export default PopCategoryXXS;