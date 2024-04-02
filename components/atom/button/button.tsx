import {Component} from "react";
// @ts-ignore
import Link from 'next/link';
import PropTypes from 'prop-types';

/**
 * Atom: Button
 * @param props : content, src
 * @param src : string
 * @param classname: string
 * @param onClick: function()
 */
class Button extends Component {
    static propTypes = {
        src: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        classname: PropTypes.string,
        children: PropTypes.string
    };

    render() {
        const {
            // @ts-ignore
            src: src,
            // @ts-ignore
            onClick: onClick,
            // @ts-ignore
            classname: classname,
            // @ts-ignore
            children: children
        } = this.props;
        return (
            <Link href={src} legacyBehavior>
                <a onClick={onClick} className={'a-button ' + classname}>
                    {children}
                </a>
            </Link>
        );
    }
}

export default Button;