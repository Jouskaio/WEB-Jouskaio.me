import { prefersReducedMotion } from '../accessibility/useReducedMotion';

type ViewTransition = { ready: Promise<void>; finished: Promise<void> };
type ViewTransitionDocument = Document & {
    startViewTransition?: (update: () => void) => ViewTransition;
};

const DURATION_MS = 650;

/**
 * Runs a change of colors (theme, contrast) as a circle that grows from the control the visitor used, with the
 * View Transitions API. Without the API, or with fewer animations asked, the change is instant.
 */
export function runWithThemeReveal(apply: () => void): void {
    const doc = document as ViewTransitionDocument;
    if (typeof doc.startViewTransition !== 'function' || prefersReducedMotion()) {
        apply();
        return;
    }

    // The circle starts from the control that has the focus (the tile or the switch), by mouse or by keyboard
    const active = document.activeElement as HTMLElement | null;
    const origin = active?.closest('label') ?? active;
    const rect = origin?.getBoundingClientRect();
    const x = rect && rect.width > 0 ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = rect && rect.height > 0 ? rect.top + rect.height / 2 : window.innerHeight / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

    const root = document.documentElement;
    root.dataset.transition = 'theme';

    const transition = doc.startViewTransition(apply);
    transition.ready
        .then(() => {
            root.animate(
                { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
                { duration: DURATION_MS, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', pseudoElement: '::view-transition-new(root)' },
            );
        })
        .catch(() => undefined);
    transition.finished.finally(() => {
        delete root.dataset.transition;
    });
}
