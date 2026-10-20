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

// Theme and text size are picked among three tiles; the others have two values: a switch (on = the second value)
const TILES = ['theme', 'textSize'] as const;
const SWITCHES = ['contrast', 'font', 'motion'] as const;

/**
 * Organism Component: DisplayPanel
 * The form of the display and accessibility settings: theme and text size as tiles, contrast, font and animations
 * as switches. It only renders the choices; useDisplaySettings keeps them and applies them to the page.
 */
export default function DisplayPanel({ settings, onChange, onReset, classname = '' }: DisplayPanelProps) {
    return (
        <div className={`o-displayPanel ${classname}`.trim()}>
            {TILES.map((key) => (
                <fieldset key={key} className={`o-displayPanel__m-group o-displayPanel__m-group--${key}`}>
                    <legend className="o-displayPanel__a-legend">{DISPLAY_OPTIONS[key].legend}</legend>
                    <div className="o-displayPanel__m-options">
                        {DISPLAY_OPTIONS[key].options.map((option) => (
                            <label key={option.value} className="o-displayPanel__a-option" data-value={option.value}>
                                <input
                                    type="radio"
                                    name={`display-${key}`}
                                    value={option.value}
                                    aria-label={option.label}
                                    checked={settings[key] === option.value}
                                    onChange={() => onChange(key, option.value as DisplaySettings[typeof key])}
                                />
                                <span aria-hidden="true">{option.short ?? option.label}</span>
                            </label>
                        ))}
                    </div>
                </fieldset>
            ))}

            <div className="o-displayPanel__m-switches" role="group" aria-label="Accessibility">
                {SWITCHES.map((key) => {
                    const [off, on] = DISPLAY_OPTIONS[key].options;
                    return (
                        <label key={key} className="o-displayPanel__a-switch">
                            <span>{DISPLAY_OPTIONS[key].switchLabel}</span>
                            <input
                                type="checkbox"
                                role="switch"
                                checked={settings[key] === on.value}
                                onChange={(event) =>
                                    onChange(key, (event.target.checked ? on.value : off.value) as DisplaySettings[typeof key])
                                }
                            />
                            <span className="o-displayPanel__a-track" aria-hidden="true" />
                        </label>
                    );
                })}
            </div>

            <div className="o-displayPanel__m-footer">
                <button type="button" className="o-displayPanel__a-reset" onClick={onReset}>
                    Reset
                </button>
                <span className="o-displayPanel__a-saved">Saved on this device</span>
            </div>
        </div>
    );
}
