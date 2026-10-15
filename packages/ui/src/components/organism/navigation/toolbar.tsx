import React, { useState } from 'react';
import Image from 'next/image';

import { useDisplaySettings } from '../../../lib/accessibility/useDisplaySettings';
import Dialog from '../../molecule/dialog/dialog';
import DisplayPanel from '../interaction/displayPanel';
import QuickNav, { type QuickNavLink } from './quickNav';

/**
 * Properties of the Toolbar component.
 */
export type ToolbarProps = {
    /**
     * Pages of the website, for the quick navigation.
     */
    pages: QuickNavLink[];
    /**
     * Profiles to contact me on, for the quick navigation.
     */
    contacts: QuickNavLink[];
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
    pages,
    contacts,
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
                <Image src="/icons/more.svg" alt="" height={16} width={16} />
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
                <Image src="/icons/params.svg" alt="" height={16} width={16} />
            </button>

            <Dialog open={menuOpen} onClose={() => setMenuOpen(false)} title="Quick navigation">
                {menuOpen && (
                    <QuickNav
                        pages={pages}
                        contacts={contacts}
                        email={email}
                        onNavigate={() => setMenuOpen(false)}
                    />
                )}
            </Dialog>
            <Dialog
                open={settingsOpen}
                onClose={() => setSettingsOpen(false)}
                title="Display and accessibility"
            >
                <DisplayPanel settings={settings} onChange={update} onReset={reset} />
            </Dialog>
        </>
    );
}
