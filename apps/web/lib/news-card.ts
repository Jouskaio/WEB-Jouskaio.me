/**
 * News card of the homepage, served by API-Jouskaio.me (module `news`).
 *
 * Server-side only: the API requires a Bearer token that must never reach the browser,
 * so this is called from `getStaticProps` and nowhere else.
 */
export type NewsCard = {
    /**
     * Day of the news, formatted YYYY-MM-DD.
     */
    date: string;
    /**
     * Text of the card, without quotation marks.
     */
    message: string;
};

/**
 * Displayed when the API is not configured or unreachable, so the page never breaks.
 */
export const DEFAULT_NEWS_CARD: NewsCard = {
    date: '2023-08-01',
    message:
        "My blog is finally created and you can now check last articles :) I'm currently working on my first project presentation.",
};

const REQUEST_TIMEOUT_MS = 3000;

/**
 * Fetch the news card from the API, or fall back to the default one.
 */
export const fetchNewsCard = async (): Promise<NewsCard> => {
    const { JOUSKAIO_API_URL, JOUSKAIO_API_TOKEN } = process.env;
    if (!JOUSKAIO_API_URL || !JOUSKAIO_API_TOKEN) {
        return DEFAULT_NEWS_CARD;
    }

    try {
        const response = await fetch(`${JOUSKAIO_API_URL}/api/v1/news`, {
            headers: { Authorization: `Bearer ${JOUSKAIO_API_TOKEN}` },
            signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
        });
        if (!response.ok) {
            return DEFAULT_NEWS_CARD;
        }

        const card = await response.json();
        if (typeof card.date !== 'string' || typeof card.message !== 'string') {
            return DEFAULT_NEWS_CARD;
        }
        return { date: card.date, message: card.message };
    } catch {
        return DEFAULT_NEWS_CARD;
    }
};
