import { Component } from 'react';

/**
 * Switch component properties.
 */
export type SwitchProps = {
    /**
     * Field name (input name and id attributes).
     */
    name: string;
    /**
     * Defines if the switch is checked by default.
     */
    isChecked?: boolean;
    /**
     * Function called when the switch state changes.
     */
    onClick?: (checked: boolean) => void;
};

/**
 * Atom Component: Switch
 *
 * A toggle switch based on a checkbox.
 */
export default class Switch extends Component<SwitchProps> {
    handleToggle = () => {
        const { onClick, isChecked = false } = this.props;

        if (onClick) {
            onClick(!isChecked);
        }
    };

    render() {
        const { name, isChecked = false } = this.props;

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
