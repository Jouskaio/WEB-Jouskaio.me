import {Component} from "react";
import PropTypes from "prop-types";

/**
 * Atom: Title H2
 *
 * @param props
 * @param classname : string
 * @constructor
 */
export default class TextH2 extends Component {
    static propTypes = {
        classname: PropTypes.string,
        children: PropTypes.string
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
                <h2 className={"a-titleH2 " + classname}>{children}</h2>
            </>
        );
    }
}