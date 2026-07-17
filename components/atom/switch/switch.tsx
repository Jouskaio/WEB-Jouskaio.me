import { Component } from 'react';

export type SwitchProps = {
    name: string;
    isChecked?: boolean;
    onClick?: (checked: boolean) => void;
};

/**
 * Atom: Switch
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
