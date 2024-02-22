import React from "react";
import PropTypes from "prop-types";
import TextDefault from "../../atom/text/TextDefault";
import TextH6 from "../../atom/text/textH6";
import TextH4 from "../../atom/text/textH4";

/**
 * Send information to this page
 * @param props.details : [string]
 * @param props.title : string
 * @param props.media : string
 */
function CardListText (props) {
    // @ts-ignore
    const {
        details: details,
        title: title,
        media: media,
        classname: classname,
        aosDuration: aosDuration,
        aosEffect: aosEffect,
    } = props;

    // METHOD
    return (
        <div className={"m-cardListText " + classname}
             data-aos={"fade-up"} data-aos-duration={aosDuration} data-aos-effect={aosEffect}
             style={{backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5) ), url(" + media + ")"}}>
                <nav className="m-cardListText__content">
                    <TextH4 classname={"m-cardListText__a-title"}>{title}</TextH4>
                    {details.map((row, i) => <TextH6 key={i}>{row}</TextH6>)}
                </nav>
        </div>
    );
}


CardListText.propTypes = {
    details: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    media: PropTypes.string.isRequired,
    classname: PropTypes.string,
    aosDuration: PropTypes.number,
    aosEffect: PropTypes.string,
};
export default CardListText;