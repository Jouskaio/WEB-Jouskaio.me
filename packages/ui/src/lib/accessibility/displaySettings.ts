/**
 * Display settings chosen by the visitor: theme, text size, contrast, font and animations.
 * They are saved in the browser (localStorage) and applied as attributes on <html>,
 * which the styles in 00-protons/_accessibility.scss read.
 */
export type Theme = 'dark' | 'light' | 'system';
export type TextSize = 'normal' | 'large' | 'xlarge';
export type Contrast = 'normal' | 'high';
export type FontChoice = 'default' | 'readable';
export type Palette = 'violet' | 'ocean' | 'forest' | 'multicolor';
export type Motion = 'system' | 'reduced';

export type DisplaySettings = {
    theme: Theme;
    palette: Palette;
    textSize: TextSize;
    contrast: Contrast;
    font: FontChoice;
    motion: Motion;
};

export const DEFAULT_DISPLAY_SETTINGS: DisplaySettings = {
    theme: 'dark',
    palette: 'violet',
    textSize: 'normal',
    contrast: 'normal',
    font: 'default',
    motion: 'system',
};

export const DISPLAY_SETTINGS_STORAGE_KEY = 'jouskaio:display';

/**
 * Allowed values of each setting, with the label shown in the display panel.
 */
export const DISPLAY_OPTIONS: {
    [K in keyof DisplaySettings]: { legend: string; options: { value: DisplaySettings[K]; label: string }[] };
} = {
    theme: {
        legend: 'Theme',
        options: [
            { value: 'dark', label: 'Dark' },
            { value: 'light', label: 'Light' },
            { value: 'system', label: 'Same as my device' },
        ],
    },
    palette: {
        legend: 'Colors',
        options: [
            { value: 'violet', label: 'Violet' },
            { value: 'ocean', label: 'Ocean' },
            { value: 'forest', label: 'Forest' },
            { value: 'multicolor', label: 'Rose and amber' },
        ],
    },
    textSize: {
        legend: 'Text size',
        options: [
            { value: 'normal', label: 'Normal' },
            { value: 'large', label: 'Large' },
            { value: 'xlarge', label: 'Very large' },
        ],
    },
    contrast: {
        legend: 'Contrast',
        options: [
            { value: 'normal', label: 'Standard' },
            { value: 'high', label: 'High' },
        ],
    },
    font: {
        legend: 'Font',
        options: [
            { value: 'default', label: 'Default' },
            { value: 'readable', label: 'Easy to read (wider spacing)' },
        ],
    },
    motion: {
        legend: 'Animations',
        options: [
            { value: 'system', label: 'Same as my device' },
            { value: 'reduced', label: 'Reduce them' },
        ],
    },
};

/**
 * Keeps the known values and falls back to the defaults for anything else (corrupted or old storage).
 */
export function sanitizeDisplaySettings(value: unknown): DisplaySettings {
    const stored = (value && typeof value === 'object' ? value : {}) as Record<string, unknown>;
    const pick = <K extends keyof DisplaySettings>(key: K): DisplaySettings[K] => {
        const allowed = DISPLAY_OPTIONS[key].options.map((option) => option.value) as unknown[];
        return allowed.includes(stored[key]) ? (stored[key] as DisplaySettings[K]) : DEFAULT_DISPLAY_SETTINGS[key];
    };
    return { theme: pick('theme'), palette: pick('palette'), textSize: pick('textSize'), contrast: pick('contrast'), font: pick('font'), motion: pick('motion') };
}

export function readStoredDisplaySettings(): DisplaySettings {
    try {
        return sanitizeDisplaySettings(JSON.parse(localStorage.getItem(DISPLAY_SETTINGS_STORAGE_KEY) || '{}'));
    } catch (error) {
        return DEFAULT_DISPLAY_SETTINGS;
    }
}

export function saveDisplaySettings(settings: DisplaySettings): void {
    try {
        localStorage.setItem(DISPLAY_SETTINGS_STORAGE_KEY, JSON.stringify(settings));
    } catch (error) {
        // Storage can be blocked (private window): the settings then last until the page is closed.
    }
}

export function clearDisplaySettings(): void {
    try {
        localStorage.removeItem(DISPLAY_SETTINGS_STORAGE_KEY);
    } catch (error) {
        // Nothing to clear
    }
}

/**
 * Reads the saved settings and writes them as attributes on <html>. An attribute is only present when
 * its setting differs from the default one, so a visitor without settings sees the site as it always was.
 *
 * It is self-contained on purpose (plain JavaScript, no outside reference): its source is inlined in
 * _document.tsx, so the page is themed before its first paint and does not flash.
 */
export function applyStoredDisplaySettings(): void {
    try {
        var stored = JSON.parse(localStorage.getItem('jouskaio:display') || '{}') || {};
        var root = document.documentElement;
        var theme = stored.theme;
        if (theme === 'system') {
            theme = matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
        }
        var values: { [name: string]: string | null } = {
            'data-theme': theme === 'light' || theme === 'dark' ? theme : null,
            'data-palette': stored.palette === 'ocean' || stored.palette === 'forest' || stored.palette === 'multicolor' ? stored.palette : null,
            'data-text-size': stored.textSize === 'large' || stored.textSize === 'xlarge' ? stored.textSize : null,
            'data-contrast': stored.contrast === 'high' ? 'high' : null,
            'data-font': stored.font === 'readable' ? 'readable' : null,
            'data-motion': stored.motion === 'reduced' ? 'reduced' : null,
        };
        for (var name in values) {
            if (values[name]) {
                root.setAttribute(name, values[name] as string);
            } else {
                root.removeAttribute(name);
            }
        }
    } catch (error) {
        // Without storage, the site keeps its default look
    }
}

/**
 * Source of applyStoredDisplaySettings as an immediately-invoked function, for an inline <script>.
 */
export const DISPLAY_SETTINGS_INIT_SCRIPT = '(' + applyStoredDisplaySettings.toString() + ')()';
