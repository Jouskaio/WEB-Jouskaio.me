import React, { useState } from 'react';

import { useDisplaySettings } from '../../../lib/accessibility/useDisplaySettings';
import Dialog from '../../molecule/dialog/dialog';
import DisplayPanel from '../interaction/displayPanel';
import QuickNav, { type QuickNavDownload, type QuickNavProject } from './quickNav';

/**
 * Properties of the Toolbar component.
 */
export type ToolbarProps = {
    /**
     * Case studies of the quick navigation.
     */
    projects: QuickNavProject[];
    /**
     * Page listing all my work.
     */
    workUrl: string;
    /**
     * CVs to download, one per language.
     */
    resumes: QuickNavDownload[];
    /**
     * Email address the visitor can copy.
     */
    email?: string;
    /**
     * CSS classes of the round button that opens the quick navigation.
     */
    menuClassName?: string;
    /**
     * CSS classes of the round button that opens the display settings.
     */
    settingsClassName?: string;
    /**
     * AOS animation effect of the two buttons (e.g., "fade-left").
     */
    aosEffect?: string;
};

/**
 * Organism Component: Toolbar
 * The two round buttons of the page: the quick navigation and the display and accessibility settings,
 * each opening its dialog.
 */
export default function Toolbar({
    projects,
    workUrl,
    resumes,
    email,
    menuClassName = '',
    settingsClassName = '',
    aosEffect,
}: ToolbarProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const { settings, update, reset } = useDisplaySettings();

    return (
        <>
            <button
                type="button"
                className={menuClassName}
                aria-label="Quick navigation"
                aria-haspopup="dialog"
                onClick={() => setMenuOpen(true)}
                data-aos={aosEffect || undefined}
                data-aos-duration={1000}
            >
                <span className="l-main__a-icon" style={{ '--icon': 'url(/icons/more.svg)' } as React.CSSProperties} />
            </button>
            <button
                type="button"
                className={settingsClassName}
                aria-label="Display and accessibility settings"
                aria-haspopup="dialog"
                onClick={() => setSettingsOpen(true)}
                data-aos={aosEffect || undefined}
                data-aos-duration={1200}
            >
                <span className="l-main__a-icon" style={{ '--icon': 'url(/icons/params.svg)' } as React.CSSProperties} />
            </button>

            <Dialog open={menuOpen} onClose={() => setMenuOpen(false)} title="Menu" variant="drawer">
                {menuOpen && (
                    <QuickNav
                        projects={projects}
                        workUrl={workUrl}
                        resumes={resumes}
                        email={email}
                        onNavigate={() => setMenuOpen(false)}
                    />
                )}
            </Dialog>
            <Dialog
                open={settingsOpen}
                onClose={() => setSettingsOpen(false)}
                title="Display and accessibility"
                variant="drawer"
            >
                <DisplayPanel settings={settings} onChange={update} onReset={reset} />
            </Dialog>
        </>
    );
}
