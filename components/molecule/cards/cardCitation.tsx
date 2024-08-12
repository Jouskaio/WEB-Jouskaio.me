import React, { Component } from "react";
import PropTypes from "prop-types";
import TextDefault from "../../atom/text/TextDefault";
import TextSpanXS from "../../atom/text/textSpanXS";
import Media from "../../atom/media/media";

class CardCitation extends Component {
    static propTypes = {
        urlSource: PropTypes.string,
        classname: PropTypes.string,
        children: PropTypes.string,
        urlPhotoProfile: PropTypes.string,
        urlProfile: PropTypes.string,
        nameProfile: PropTypes.string,
        descriptionProfile: PropTypes.string,
        aosDuration: PropTypes.number,
        aosEffect: PropTypes.string,
    };

    render() {
        const {
            // @ts-ignore
            classname,
            // @ts-ignore
            urlSource,
            // @ts-ignore
            children,
            // @ts-ignore
            urlPhotoProfile,
            // @ts-ignore
            urlProfile,
            // @ts-ignore
            nameProfile,
            // @ts-ignore
            descriptionProfile,
            // @ts-ignore
            aosDuration,
            // @ts-ignore
            aosEffect,
        } = this.props;
        return (
            <div className={"m-cardCitation " + classname} data-aos-duration={aosDuration} data-aos-effect={aosEffect}>
                <nav className={"m-cardCitation__m-divImage"}>
                    <Media objectFit={"cover"} src={urlPhotoProfile} alt={"Profile Image"} height={"100"} width={"100"} classname={"m-cardCitation__m-profilDivImg"}/>
                </nav>
                <a href={urlSource} className={"m-cardCitation__a-content"}>
                    <TextDefault>"{children}"</TextDefault>
                </a>
                <a href={urlProfile} className={"m-cardCitation__m-profilDiv"}>
                    <nav className={"m-cardCitation__m-profilDivText"}>
                        <TextDefault classname={"m-cardCitation__m-profilDivText--title"}>{nameProfile}</TextDefault>
                        <TextSpanXS>{descriptionProfile}</TextSpanXS>
                    </nav>
                </a>
            </div>
        );
    }
}
// @ts-ignore
export default CardCitation ;