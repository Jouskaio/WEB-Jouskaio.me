import  {Component} from "react";
import PropTypes from "prop-types";

/**
 *
 * @param props
 * @constructor
 */
export default class TextH5 extends Component{
    static propTypes = {
        classname: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
        ]),
        aosDuration: PropTypes.number,
        aosEffect: PropTypes.string,
    }
    render() {
        const {
            //@ts-ignore
            classname,
            //@ts-ignore
            children,
            //@ts-ignore
            aosDuration,
            //@ts-ignore
            aosEffect,
        } = this.props
        return (
            <>
                <h5 className={"a-titleH5 " + classname} data-aos={aosEffect} data-aos-duration={aosDuration}>{children}</h5>
            </>
        );
    }
}