import React, { Component, ReactNode } from "react";
import PropTypes from "prop-types";
import TextDefault from "../../atom/text/TextDefault";
import TextH1 from "../../atom/text/textH1";

type CardInfosProps = {
    date: string;
    classname?: string;
    children: string;
    aosDuration?: number;
    aosEffect?: string;
};

/**
 * Molecule: CardInfos
 */
export default class CardInfos extends Component<CardInfosProps> {
    static propTypes = {
        date: PropTypes.string.isRequired,
        classname: PropTypes.string,
        children: PropTypes.string.isRequired,
        aosDuration: PropTypes.number,
        aosEffect: PropTypes.string,
    };

    render() {
        const {
            date,
            classname = "",
            children,
            aosDuration,
            aosEffect,
        } = this.props;

        const datetime = new Date(date);
        const day = datetime.getDate();
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const mmYY = `${monthNames[datetime.getMonth()]} ${datetime.getFullYear()}`; // ✅ getMonth() is 0-based

        return (
            <div
                className={`m-cardInfos ${classname}`}
                data-aos={aosEffect}
                data-aos-duration={aosDuration}
            >
                <div className="m-cardInfos__m-datetime">
                    <TextH1 classname="m-cardInfos__m-datetime--a-day">{day}</TextH1>
                    <TextDefault classname="m-cardInfos__m-datetime--a-mmYY">{mmYY}</TextDefault>
                </div>
                <TextDefault classname="m-cardInfos__m-message">{children}</TextDefault>
            </div>
        );
    }
}