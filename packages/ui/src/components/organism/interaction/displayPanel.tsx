import React from 'react';

import {
    DISPLAY_OPTIONS,
    type DisplaySettings,
} from '../../../lib/accessibility/displaySettings';

/**
 * Properties of the DisplayPanel component.
 */
export type DisplayPanelProps = {
    /**
     * Current display settings.
     */
    settings: DisplaySettings;
    /**
     * Called when the visitor picks a value for a setting.
     */
    onChange: <K extends keyof DisplaySettings>(key: K, value: DisplaySettings[K]) => void;
    /**
     * Called when the visitor resets every setting.
     */
    onReset: () => void;
    /**
     * Additional CSS classes.
     */
    classname?: string;
};

const SETTINGS = Object.keys(DISPLAY_OPTIONS) as (keyof DisplaySettings)[];

/**
 * Organism Component: DisplayPanel
 * The form of the display and accessibility settings: theme, text size, contrast, font and animations.
 * It only renders the choices; useDisplaySettings keeps them and applies them to the page.
 */
export default function DisplayPanel({ settings, onChange, onReset, classname = '' }: DisplayPanelProps) {
    return (
        <div className={`o-displayPanel ${classname}`.trim()}>
            <p className="o-displayPanel__a-intro">Your choices are saved on this device.</p>

            {SETTINGS.map((key) => (
                <fieldset key={key} className={`o-displayPanel__m-group o-displayPanel__m-group--${key}`}>
                    <legend className="o-displayPanel__a-legend">{DISPLAY_OPTIONS[key].legend}</legend>
                    <div className="o-displayPanel__m-options">
                    {DISPLAY_OPTIONS[key].options.map((option) => (
                        <label key={option.value} className="o-displayPanel__a-option" data-value={option.value}>
                            <input
                                type="radio"
                                name={`display-${key}`}
                                value={option.value}
                                checked={settings[key] === option.value}
                                onChange={() => onChange(key, option.value as DisplaySettings[typeof key])}
                            />
                            <span>{option.label}</span>
                        </label>
                    ))}
                    </div>
                </fieldset>
            ))}

            <button type="button" className="o-displayPanel__a-reset" onClick={onReset}>
                Reset to default
            </button>
        </div>
    );
}
