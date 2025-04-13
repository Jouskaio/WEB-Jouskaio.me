import React, { Component } from "react";
import PropTypes from "prop-types";

type SwitchProps = {
    name: string;
    isChecked?: boolean;
    onClick?: (checked: boolean) => void;
};

/**
 * Atom: Switch
 *
 * @param name : string (required)
 * @param isChecked : bool
 * @param onClick : function (bool) => void
 */
export default class Switch extends Component<SwitchProps> {
    static propTypes = {
        name: PropTypes.string.isRequired,
        isChecked: PropTypes.bool,
        onClick: PropTypes.func,
    };

    handleToggle = () => {
        const { onClick, isChecked } = this.props;
        if (onClick) {
            onClick(!isChecked);
        }
    };

    render() {
        const {
            name,
            isChecked = false,
        } = this.props;

        return (
            <div className="a-switch">
                <input
                    type="checkbox"
                    className="a-switch__a-checkbox"
                    name={name}
                    id={name}
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