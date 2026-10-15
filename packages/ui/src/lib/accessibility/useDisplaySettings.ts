import { useEffect, useState } from 'react';

import {
    DEFAULT_DISPLAY_SETTINGS,
    applyStoredDisplaySettings,
    clearDisplaySettings,
    readStoredDisplaySettings,
    saveDisplaySettings,
    type DisplaySettings,
} from './displaySettings';

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
        applyStoredDisplaySettings();
    };

    const reset = () => {
        setSettings(DEFAULT_DISPLAY_SETTINGS);
        clearDisplaySettings();
        applyStoredDisplaySettings();
    };

    return { settings, update, reset };
}
