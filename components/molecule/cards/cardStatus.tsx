import React from "react";
import PropTypes from 'prop-types';
import TextH4 from "../../atom/text/textH4";
import TextDefault from "../../atom/text/TextDefault";


function CardStatus(props) {

    const {
        title: title,
        text: text,
        color: color,
        classname: classname,
        aosDuration: aosDuration,
        aosEffect: aosEffect,
    } = props;

    return (
        <div className={`m-cardStatus ${classname}`} data-aos={aosEffect} data-aos-duration={aosDuration}>
            <nav className={"m-cardStatus__a-verticalBar"} style={{backgroundColor: color}}></nav>
            <div>
                <TextH4 classname={"m-cardStatus__a-title"}>{title}</TextH4>
                <TextDefault classname={"m-cardStatus__a-text"}>{text}</TextDefault>
            </div>
        </div>
    );
}

CardStatus.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    classname: PropTypes.string,
    aosDuration: PropTypes.number,
    aosEffect: PropTypes.string,
};

export default CardStatus;
