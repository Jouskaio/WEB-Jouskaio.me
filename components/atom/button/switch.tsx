import {Component} from "react";
// @ts-ignore
import Link from 'next/link';
import PropTypes from 'prop-types';
import {on} from "dom7";

/**
 * Atom: Button
 * @param onClick : func
 * @param name: string
 */
class Switch extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        isChecked: PropTypes.bool
    };


    // If changing state of the switch (boolean), than it force its execution
    handleToggle = () => {
        //@ts-ignore
        const { onClick, isChecked } = this.props;
        if (onClick) {
            onClick(!isChecked);
        }
    };
    render() {
        const {
            // @ts-ignore
            name: name,
            // @ts-ignore
            onClick: onClick,
            // @ts-ignore
            isChecked: isChecked
        } = this.props;
        return (
            <div className="a-switch">
                <input type="checkbox" className="a-switch__a-checkbox"
                       name={name} id={name}
                       onChange={this.handleToggle}
                       checked={isChecked}
                />
                <label className="a-switch__a-label" htmlFor={name}>
                    <span className="a-switch__a-inner" />
                    <span className="a-switch__a-switch" />
                </label>
            </div>
        );
    }
}

export default Switch;