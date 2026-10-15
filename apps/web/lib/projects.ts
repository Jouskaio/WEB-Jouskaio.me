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
     * Title and short points of the "how it is built" section.
     */
    how: { title: string; points: string[]; command?: string };
    links: ProjectLink[];
};

export const projects: Project[] = [
    {
        slug: 'babel',
        name: 'Babel',
        tagline: 'A personal and social library',
        summary:
            'All my reading in one place: ebooks, audiobooks, comics, fanfiction and paper books, with annotated reading, e-reader sync, statistics and a monthly Wrap.',
        role: 'Design, API, app and deployment',
        status: 'In development (app 0.60)',
        stack: ['Flutter', 'FastAPI', 'Dart', 'Python', 'OpenAPI', 'Docker'],
        icon: '/images/work/babel-icon.svg',
        features: [
            {
                title: 'Every kind of book',
                text: 'Ebooks, audiobooks, comics, fanfiction and paper books live on the same shelves.',
            },
            {
                title: 'Reading in the margin',
                text: 'Annotate while you read and keep your notes with the book.',
            },
            {
                title: 'E-reader sync',
                text: 'Kobo sync and KOReader or Boox progress. A book can be on paper and on your e-reader with the "On my e-reader" switch.',
            },
            {
                title: 'Resilient to network loss',
                text: 'In the metro or a bookshop, scans, searches, additions, progress and notes wait in a queue and are replayed when the network is back, without duplicates. Shelves stay readable offline, with a clear "No connection" screen and a retry.',
            },
            {
                title: 'Statistics and Wraps',
                text: 'Reading statistics and a monthly Wrap of what you read.',
            },
            {
                title: 'One app everywhere',
                text: 'Phone, tablet, desktop, web and Boox from a single Flutter client.',
            },
            {
                title: 'Many sources',
                text: 'Files from Kavita, Audiobookshelf, OPDS, WebDAV, GitHub and AO3. Metadata from Hardcover, Open Library, Wikidata, TMDB, Goodreads, Booknode and Pagebound.',
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
