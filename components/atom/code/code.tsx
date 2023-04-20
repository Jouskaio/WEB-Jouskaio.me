import {Component} from "react";
// @ts-ignore
import Link from 'next/link';
// @ts-ignore
import Highlight from "react-highlight"
import PropTypes from "prop-types";

/**
 * Atom: Code
 * @param props
 * @param props.classname : string
 * @param props.language : string
 * @param props.children: string
 * @augments
 */
class Code extends Component {
    static propTypes = {
        children: PropTypes.any,
        language: PropTypes.string,
        classname: PropTypes.string,
    }
    render () {
        const {
            // @ts-ignore
            classname: classname,
            // @ts-ignore
            language: language,
            // @ts-ignore
            children: children
        } = this.props
        return (
            <>
                <Highlight className={"a-code " +
                    classname + " " + language}>
                    {children}
                </Highlight>
            </>
        )
    }
}

export default Code;