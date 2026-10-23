import { useEffect } from 'react';
import Router from 'next/router';

import { prefersReducedMotion } from '../accessibility/useReducedMotion';

type ViewTransitionDocument = Document & {
    startViewTransition?: (update: () => Promise<void> | void) => unknown;
};

// The page must never stay frozen: a transition waits at most this long for the new page
const MAX_WAIT_MS = 2500;

/**
 * Cross-fades the pages of the site (and morphs the elements that share a `view-transition-name`, like the icon
 * of a project) with the View Transitions API. The browser takes a picture of the page, the router changes it,
 * and the browser animates from one to the other. Browsers without the API, and visitors who asked for fewer
 * animations, simply navigate.
 */
export function usePageTransitions(): void {
    useEffect(() => {
        const doc = document as ViewTransitionDocument;
        if (typeof doc.startViewTransition !== 'function') {
            return undefined;
        }

        let finish: (() => void) | null = null;
        let timer: number | undefined;

        const end = () => {
            window.clearTimeout(timer);
            finish?.();
            finish = null;
        };

        const start = (_url: string, { shallow }: { shallow: boolean }) => {
            if (shallow || prefersReducedMotion()) {
                return;
            }
            end();
            doc.startViewTransition?.(
                () =>
                    new Promise<void>((resolve) => {
                        finish = resolve;
                        timer = window.setTimeout(end, MAX_WAIT_MS);
                    }),
            );
        };

        Router.events.on('routeChangeStart', start);
        Router.events.on('routeChangeComplete', end);
        Router.events.on('routeChangeError', end);

        return () => {
            Router.events.off('routeChangeStart', start);
            Router.events.off('routeChangeComplete', end);
            Router.events.off('routeChangeError', end);
            end();
        };
    }, []);
}
