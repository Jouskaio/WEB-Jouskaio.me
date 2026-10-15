import { useEffect, useState } from 'react';

/**
 * True when the visitor asked for fewer animations, in the display panel or in the system settings.
 */
export function prefersReducedMotion(): boolean {
    if (typeof window === 'undefined') {
        return false;
    }
    return (
        document.documentElement.dataset.motion === 'reduced' ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
}

/**
 * Same as prefersReducedMotion, and follows the changes (panel or system) without a reload.
 */
export function useReducedMotion(): boolean {
    const [reduced, setReduced] = useState(false);

    useEffect(() => {
        const update = () => setReduced(prefersReducedMotion());
        update();

        const media = window.matchMedia('(prefers-reduced-motion: reduce)');
        media.addEventListener('change', update);
        const observer = new MutationObserver(update);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-motion'] });

        return () => {
            media.removeEventListener('change', update);
            observer.disconnect();
        };
    }, []);

    return reduced;
}
