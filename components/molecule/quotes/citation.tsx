import React, {Component} from "react";
// @ts-ignore
import Link from 'next/link';
// @ts-ignore
import Highlight from "react-highlight"
import PropTypes from "prop-types";
import TextDefault from "../../atom/text/TextDefault";
import TextSpanM from "../../atom/text/textSpanM";
import TextSpanXS from "../../atom/text/textSpanXS";

/**
 * Atom: Code
 * @param props
 * @param props.classname : string
 * @param props.translation : string
 * @param props.children: string
 * @param props.urlPhotoProfil: string
 * @param props.urlProfil: string
 * @param props.nameProfil: string
 * @param props.descriptionProfil: string
 * @param props.urlSource: string
 * @augments
 */
class Citation extends Component {
    static propTypes = {
        children: PropTypes.any,
        urlSource: PropTypes.string,
        classname: PropTypes.string,
        translation: PropTypes.string,
        urlPhotoProfil: PropTypes.string,
        urlProfil: PropTypes.string,
        nameProfil: PropTypes.string,
        descriptionProfil: PropTypes.string
    }
    render () {
        const {
            // @ts-ignore
            classname: classname,
            // @ts-ignore
            urlSource: urlSource,
            // @ts-ignore
            translation: translation,
            // @ts-ignore
            children: children,
            // @ts-ignore
            urlPhotoProfil: urlPhotoProfil,
            // @ts-ignore
            urlProfil: urlProfil,
            // @ts-ignore
            nameProfil: nameProfil,
            // @ts-ignore
            descriptionProfil: descriptionProfil,
        } = this.props
        return (
            <div className={"m-citation"}>
                <a href={urlSource} className={"m-citation__a-content"}>
                    <TextDefault>"{children}"</TextDefault>
                    <hr className={"m-citation__a-hr"}/>
                    <TextDefault classname={"m-citation__a-translation"}>"{translation}"</TextDefault>
                </a>
                <a href={urlProfil} className={"m-citation__m-profilDiv"}>
                    <nav className={"m-citation__m-profilDiv--a-photo"}><img src={urlPhotoProfil} alt={"Profil Image"}/></nav>
                    <nav>
                        <TextDefault>{nameProfil}</TextDefault>
                        <TextSpanXS>{descriptionProfil}</TextSpanXS>
                    </nav>
                </a>
            </div>
        )
    }
}

export default Citation;