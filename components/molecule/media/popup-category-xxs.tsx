import React from "react";
// @ts-ignore
import Link from "next/link";
// @ts-ignore
import Image from "next/image";

/**
 * Send information to this page
 * @param details : [string]
 * @param title : string
 * @param number : string
 * @param subtitle : string
 * @param media : string
 */
function PopCategoryXXS({details, title, number, subtitle, media}) {
    // METHOD
    return (
        <div className="m-popupCategoryXXS">
            <nav className="m-popupCategoryXXS__mediaContainer"
                     style={{backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5) ), url(" + media + ")"}}>
                    <nav className="m-popupCategoryXXS__content a-spanXS">
                        {details.map((line, k) => <p key={k}>{line}</p>)}
                    </nav>
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
}

export default PopCategoryXXS;