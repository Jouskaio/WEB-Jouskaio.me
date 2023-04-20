import {Component} from "react";
import PropTypes from "prop-types";

/**
 * Atom: Title H1
 *
 * @param props
 * @param classname : string
 * @constructor
 */
export default class TextH1 extends Component {
    static propTypes = {
        classname: PropTypes.string,
        children: PropTypes.any
    }
    render() {
        const {
            //@ts-ignore
            classname,
            //@ts-ignore
            children
        } = this.props
        return (
            <>
                <h1 className={"a-titleH1 " + classname}>{children}</h1>
            </>
        );
    }
}