import { graphql, http, HttpResponse } from 'msw';

const mockArticle = (index: number, category: string) => ({
    attributes: {
        slug: `article-${index}`,
        title: `Article ${index}: building a design system`,
        updatedAt: '2024-03-01T10:00:00Z',
        language: 'en',
        description: 'Create a consistent, reusable and documented component library.',
        number: null,
        location: null,
        categories: { data: [{ attributes: { slug: category.toLowerCase(), name: category, color: '#2563eb' } }] },
        tags: { data: [{ attributes: { name: category, slug: category.toLowerCase(), color: '#2563eb' } }] },
        image: { data: { attributes: { url: `https://placehold.co/600x400/2563eb/ffffff?text=Article+${index}` } } },
    },
});

const mockArticles = [1, 2, 3, 4, 5, 6].map((index) => mockArticle(index, index % 2 ? 'Frontend' : 'Backend'));

export const mswHandlers = [
    http.post('*/v1/email', async ({ request }) => {
        const data = await request.json() as any;

        if (data.email === 'error@example.com') {
            return new HttpResponse(null, { status: 500 });
        }

        return HttpResponse.json({ success: true }, { status: 200 });
    }),
    // Only the first page has articles, so the infinite scroll of FeedArticles stops there.
    graphql.query('Articles', ({ variables }) =>
        HttpResponse.json({ data: { articles: { data: variables.start ? [] : mockArticles } } }),
    ),
];
