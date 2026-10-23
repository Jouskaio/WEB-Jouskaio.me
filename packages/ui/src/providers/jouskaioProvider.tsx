import React from 'react';
import { useGlassGlow } from '../lib/motion/glassGlow';
import { usePageTransitions } from '../lib/motion/pageTransitions';
import { useScrollingAOS } from '../lib/motion/scrolling-effectAOS';
import '../styles/globals.scss';

interface JouskaioProviderProps {
    children: React.ReactNode;
}

/**
 * JouskaioProvider component that handles global setup like AOS initialization.
 * Wrap your application with this provider at the root level.
 */
const JouskaioProvider: React.FC<JouskaioProviderProps> = ({ children }) => {
    // Automatically initialize AOS for scroll animations
    useScrollingAOS();
    // Pages that cross-fade instead of cutting
    usePageTransitions();
    // A soft light follows the pointer on the glass cards
    useGlassGlow();

    return <>{children}</>;
};

export default JouskaioProvider;
