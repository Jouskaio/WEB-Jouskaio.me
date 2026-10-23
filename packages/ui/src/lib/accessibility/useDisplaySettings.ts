import { useEffect, useState } from 'react';

import {
    DEFAULT_DISPLAY_SETTINGS,
    applyStoredDisplaySettings,
    clearDisplaySettings,
    readStoredDisplaySettings,
    saveDisplaySettings,
    type DisplaySettings,
} from './displaySettings';
import { runWithThemeReveal } from '../motion/themeTransition';

/**
 * State of the display settings: read from the browser after the first render (so the server and
 * the client render the same markup), saved and applied to <html> on every change.
 */
export function useDisplaySettings() {
    const [settings, setSettings] = useState<DisplaySettings>(DEFAULT_DISPLAY_SETTINGS);

    useEffect(() => {
        setSettings(readStoredDisplaySettings());
    }, []);

    const update = <K extends keyof DisplaySettings>(key: K, value: DisplaySettings[K]) => {
        const next = { ...settings, [key]: value };
        setSettings(next);
        saveDisplaySettings(next);
        // New colors are revealed by a circle that grows from the control; the other settings change at once
        if (key === 'theme' || key === 'contrast') {
            runWithThemeReveal(applyStoredDisplaySettings);
        } else {
            applyStoredDisplaySettings();
        }
    };

    const reset = () => {
        setSettings(DEFAULT_DISPLAY_SETTINGS);
        clearDisplaySettings();
        applyStoredDisplaySettings();
    };

    return { settings, update, reset };
}
