import React, {Component} from "react";
import PropTypes from 'prop-types';
import TextDefault from "../../atom/text/TextDefault";
import TextH1 from "../../atom/text/textH1";

class CardInfos extends Component {
    static propTypes = {
        date: PropTypes.string.isRequired,
        classname: PropTypes.string,
        children: PropTypes.string.isRequired,
        aosDuration: PropTypes.number,
        aosEffect: PropTypes.string,
    };

    render() {
        const {
            // @ts-ignore
            date: date,
            // @ts-ignore
            classname: classname,
            // @ts-ignore
            children: children,
            // @ts-ignore
            aosDuration: aosDuration,
            // @ts-ignore
            aosEffect: aosEffect,
        } = this.props;

        let datetime = new Date(date)
        let day = datetime.getDate()
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        let mmYY = monthNames[datetime.getMonth() + 1] + " " +  datetime.getFullYear()
        return (
            <div className={"m-cardInfos " + classname} data-aos={aosEffect} data-aos-duration={aosDuration}>
                <div className={"m-cardInfos__m-datetime"}>
                    <TextH1 classname={"m-cardInfos__m-datetime--a-day"}>{day}</TextH1>
                    <TextDefault classname={"m-cardInfos__m-datetime--a-mmYY"}>{mmYY}</TextDefault>
                </div>
                <TextDefault classname={"m-cardInfos__m-message"}>{children}</TextDefault>
            </div>
        );
    }
}

export default CardInfos;
