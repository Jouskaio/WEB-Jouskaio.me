/**
 * A link of a project page (source code, live app...).
 */
export type ProjectLink = {
    name: string;
    url: string;
};

/**
 * A feature of a project, shown as a card.
 */
export type ProjectFeature = {
    /**
     * Optional theme: the features of a project with many of them are shown under a heading per group.
     */
    group?: string;
    title: string;
    text: string;
};

/**
 * A project of the work section: it feeds the list of works, the menu and the project pages.
 */
export type Project = {
    slug: string;
    name: string;
    tagline: string;
    summary: string;
    role: string;
    status: string;
    stack: string[];
    icon?: string;
    features: ProjectFeature[];
    /**
     * Screenshots of the project (without third-party artwork).
     */
    screens?: { src: string; width: number; height: number; alt: string; caption: string }[];
    /**
     * Title and short points of the "how it is built" section.
     */
    how: { title: string; points: string[]; command?: string };
    links: ProjectLink[];
};

export const projects: Project[] = [
    {
        slug: 'babel',
        name: 'Babel',
        tagline: 'Your whole library, in one place',
        summary:
            'Paper or digital books, comics, audiobooks and fanfiction: organise your whole library, track your reading and share it with your friends. No ads, and your data stays yours.',
        role: 'Design, API, app and deployment',
        status: 'In development (app 0.60)',
        stack: ['Flutter', 'FastAPI', 'Dart', 'Python', 'OpenAPI', 'Docker'],
        icon: '/images/work/babel-icon.svg',
        screens: [
            {
                src: '/images/work/babel-home.jpg',
                width: 1456,
                height: 825,
                alt: 'The home screen of Babel in English: recommendations by genre, reading level and challenges, and moods to browse.',
                caption: 'Home: recommendations from what you read, your progress and moods to browse.',
            },
            {
                src: '/images/work/babel-library.jpg',
                width: 1456,
                height: 825,
                alt: 'The library screen of Babel in English: a shelf of books with their format and reading status.',
                caption: 'The library: paper books and ebooks side by side, with their status (to read, reading, read).',
            },
            {
                src: '/images/work/babel-profile.jpg',
                width: 1456,
                height: 825,
                alt: 'The profile screen of Babel in English: reading level, challenges of the month and badges.',
                caption: 'The profile: level, challenges and badges that follow your reading.',
            },
        ],
        features: [
            {
                group: 'Your library',
                title: 'Everything in one place',
                text: 'Paper books, ebooks, audiobooks, comics and fanfiction on the same shelves. Import your own EPUB, PDF, CBZ and M4B files.',
            },
            {
                group: 'Your library',
                title: 'Your sources, everywhere',
                text: 'Connect your own sources: GitHub, OPDS, WebDAV, Nextcloud, AO3 and more, with encrypted tokens. Metadata comes from Hardcover, Open Library, Wikidata, TMDB, Goodreads, Booknode and Pagebound.',
            },
            {
                group: 'Your library',
                title: 'Import by link or share',
                text: 'Paste or share a link (AO3, Gutenberg, a direct file), or use "Open with Babel" from Android, iPhone, Mac or the web app.',
            },
            {
                group: 'Your library',
                title: 'Fanfictions that follow you',
                text: 'Follow ongoing AO3 fanfictions: a daily check updates the book when a chapter appears, a cover is generated when there is none, and a push alert tells you.',
            },
            {
                group: 'Your library',
                title: 'Files stored once',
                text: 'A single copy of each file, identified by its SHA-256 fingerprint: if a book is already on Babel, it downloads directly instead of being uploaded again.',
            },
            {
                group: 'Your library',
                title: 'Clean up what you finished',
                text: 'Delete the file of a book you read and keep your stats, notes and reviews. Clean several books in one go.',
            },
            {
                group: 'Find and read',
                title: 'Scan and search',
                text: 'Search by title, author or tag. Scan an ISBN barcode (cover recognition is experimental), even with a webcam, scan a stack of paper books in a row, or add one by hand.',
            },
            {
                group: 'Find and read',
                title: 'Comics, manga and webtoons',
                text: 'CBZ reading left to right, or right to left for manga (ComicInfo), a vertical mode for webtoons, zoom, and notes on a single panel you can share.',
            },
            {
                group: 'Find and read',
                title: 'Reading comfort',
                text: 'Light, dark, e-ink and Art deco or Art nouveau themes. Dyslexia-friendly fonts (Lexend, Atkinson Hyperlegible), size, line spacing and contrast. E-ink mode switches itself on for a BOOX.',
            },
            {
                group: 'Find and read',
                title: 'Translation',
                text: 'Translate a passage or a whole book from the reader, with a self-hosted LibreTranslate and MyMemory for excerpts. The translated book joins your library.',
            },
            {
                group: 'Find and read',
                title: 'Books and their adaptations',
                text: 'Wikidata and TMDB link a book to its adaptations, related works, films and series, with posters.',
            },
            {
                group: 'Share and follow your reading',
                title: 'Notes in the margin',
                text: 'Highlight, comment and find your favourite passages again. Comments appear at the page where they were written, friends first.',
            },
            {
                group: 'Share and follow your reading',
                title: 'Reviews and friends',
                text: 'Read, write and answer reviews. Find readers in the directory, follow them and see what they read, their notes, their library and their recommendations.',
            },
            {
                group: 'Share and follow your reading',
                title: 'Your reading, in numbers',
                text: 'Statistics, goals, XP, levels and badges, plus monthly and yearly Wraps you can share as an image.',
            },
            {
                group: 'Share and follow your reading',
                title: 'Challenges of the month',
                text: 'A genre challenge and literary prizes from Wikidata, subjects from Open Library, a variety of authors and countries, and daily updates of prizes and playlists.',
            },
            {
                group: 'On every device',
                title: 'E-reader sync',
                text: 'KOReader and BOOX sync your progress (kosync) and your books through WebDAV. Kobo support is planned. A book can be on paper and on your e-reader with the "On my e-reader" switch.',
            },
            {
                group: 'On every device',
                title: 'Resilient to network loss',
                text: 'In the metro or a bookshop, scans, searches, additions, progress and notes wait in a queue and are replayed when the network is back, without duplicates. Your library and shelves stay readable offline, and each device keeps its own offline copy.',
            },
            {
                group: 'On every device',
                title: 'One app everywhere',
                text: 'Phone, tablet, desktop, web and BOOX from a single Flutter client. Features are enabled per device, and the ones a device cannot do are greyed out.',
            },
            {
                group: 'On every device',
                title: 'Apps to download',
                text: 'A download page for the Android app and the Mac app, with updates offered along with the list of what is new. iOS follows with the App Store.',
            },
            {
                group: 'On every device',
                title: 'Yours to run',
                text: 'Accounts with roles (admin, premium, public) and invitations, plugins the admin installs and each user activates, quotas, connectors switched on or off, and the health of each source.',
            },
        ],
        how: {
            title: 'How it is built',
            points: [
                'The app is a pure client: it shows data and sends requests, with no secret and no server logic.',
                'One OpenAPI contract: the Dart client is generated from it, so the app and the API cannot drift apart.',
                'Every route is versioned under /v1: a breaking change opens /v2 and older installed apps keep working.',
                'Offline first: actions are stored in a persistent outbox and replayed in order with backoff. Every write carries an idempotency key, so a replay never creates a duplicate.',
                'Each source is an isolated connector with its own cache and switch: one failing source never breaks the API.',
                'API and app ship independently, with their own CI, versions and tags, following git flow.',
            ],
        },
        links: [
            { name: 'Open Babel', url: 'https://babel.jouskaio.me' },
            { name: 'Source on GitHub', url: 'https://github.com/Jouskaio/Babel' },
        ],
    },
    {
        slug: 'toolkit',
        name: 'Toolkit',
        tagline: 'SSH and server toolkit',
        summary:
            'Small shell tools I use every day to look after servers: a menu for my SSH connections, a script that creates FTP users and a Linux cheat sheet.',
        role: 'Design, development and tests',
        status: 'Maintained',
        stack: ['Bash', 'jq', 'whiptail'],
        features: [
            {
                title: 'One menu for all your servers',
                text: 'Pick a connection and you are in. Add, edit or delete servers from the same menu.',
            },
            {
                title: 'Keys handled for you',
                text: 'Give the path of a private key: it is copied to ~/.ssh with the right permissions (600).',
            },
            {
                title: 'Your servers stay private',
                text: 'The list of servers is ignored by git, the repository only ships an example, and every change keeps a backup.',
            },
            {
                title: 'Tested',
                text: 'Two test suites cover the key file and the whole menu, driven by a fake whiptail, on temporary files only.',
            },
            {
                title: 'FTP users in one go',
                text: 'A script creates a dedicated folder for a new FTP user and walks you through the steps.',
            },
            {
                title: 'Linux cheat sheet',
                text: 'The basic Linux commands, kept in a Markdown page.',
            },
        ],
        how: {
            title: 'Try it',
            points: [
                'It needs bash, jq and whiptail: if one is missing, the script offers to install it.',
                'Servers live in a keys.json file next to the script, with a name, a user, a hostname, an optional port and an optional key.',
                'To leave a server, press Ctrl+D or type logout.',
            ],
            command: 'bash ssh/main.sh',
        },
        links: [{ name: 'Source on GitHub', url: 'https://github.com/Jouskaio/Toolkit' }],
    },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
