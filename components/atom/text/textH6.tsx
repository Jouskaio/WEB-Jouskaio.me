import  {Component} from "react";
import PropTypes from "prop-types";

/**
 *
 * @param props
 * @constructor
 */
export default class TextH6 extends Component{
    static propTypes = {
        classname: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
        ])
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
                <h6 className={"a-titleH6 " + classname}>{children}</h6>
            </>
        );
    }
}