import { useEffect } from 'react';

import { prefersReducedMotion } from '../accessibility/useReducedMotion';

// The glass cards of the site. Keep this list in line with $glow-cards in styles/04-layout/glow.scss.
const GLOW_CARDS = [
    '.m-cardStatus',
    '.m-cardInfos',
    '.m-cardNews',
    '.m-cardCitation',
    '.m-cardListText',
    '.m-cardMultiStatus',
    '.m-cardExperience',
    '.m-widgetContact',
    '.l-project__m-fact',
    '.l-project__m-feature',
    '.l-works__m-card',
    '.m-cardText',
    '.m-cardFact',
    '.m-cardSkill',
].join(', ');

/**
 * A soft light follows the pointer on the glass cards. The script only tells the card where the pointer is
 * (--glow-x, --glow-y); the light itself is painted by the styles. Only for a mouse or a trackpad: touch screens
 * and visitors who asked for fewer animations do not get it.
 */
export function useGlassGlow(): void {
    useEffect(() => {
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            return undefined;
        }

        let frame = 0;
        let card: HTMLElement | null = null;
        let x = 0;
        let y = 0;

        const paint = () => {
            frame = 0;
            if (!card) {
                return;
            }
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--glow-x', `${x - rect.left}px`);
            card.style.setProperty('--glow-y', `${y - rect.top}px`);
        };

        const onMove = (event: PointerEvent) => {
            if (prefersReducedMotion()) {
                return;
            }
            const target = event.target as Element | null;
            const found = target?.closest?.(GLOW_CARDS) as HTMLElement | null;
            if (!found) {
                return;
            }
            card = found;
            x = event.clientX;
            y = event.clientY;
            if (!frame) {
                frame = window.requestAnimationFrame(paint);
            }
        };

        document.addEventListener('pointermove', onMove, { passive: true });
        return () => {
            document.removeEventListener('pointermove', onMove);
            window.cancelAnimationFrame(frame);
        };
    }, []);
}
