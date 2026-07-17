import Link from 'next/link';

import CATEGORIES_QUERY from '../../../lib/api/category/categories';
import Query from '../../../lib/api/api';

export type NavCategoryItem = {
    name: string;
    slug: string;
};

export type NavCategoriesProps = {
    width?: string | number;
    classname?: string;
    categories?: NavCategoryItem[];
};

type CategoriesQueryResult = {
    data?: {
        categories?: {
            data?: Array<{
                attributes: {
                    slug: string;
                    name: string;
                };
            }>;
        };
    };
};

function renderCategoryItems(categories: NavCategoryItem[]) {
    return categories.map((category) => (
        <li key={category.slug}>
            <Link
                href={`/blog/category/[slug]`}
                as={`/blog/category/${category.slug}`}
                legacyBehavior
            >
                <a>{category.name}</a>
            </Link>
        </li>
    ));
}

/**
 * Molecule: Nav Categories
 */
export default function NavCategories({
                                          width = '100%',
                                          classname = '',
                                          categories,
                                      }: NavCategoriesProps) {
    if (categories) {
        return (
            <div className="l-blog__m-categories">
                <ul
                    className={`l-blog__m-categoriesUl ${classname}`.trim()}
                    style={{ width }}
                >
                    {renderCategoryItems(categories)}

                    <li className="m-categories__a-all">
                        <Link href="/blog/category" legacyBehavior>
                            <a>All</a>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }

    return (
        <div className="l-blog__m-categories">
            <ul
                className={`l-blog__m-categoriesUl ${classname}`.trim()}
                style={{ width }}
            >
                <Query query={CATEGORIES_QUERY}>
                    {(result: CategoriesQueryResult) => {
                        const fetchedCategories =
                            result?.data?.categories?.data?.map((category) => ({
                                slug: category.attributes.slug,
                                name: category.attributes.name,
                            })) ?? [];

                        return renderCategoryItems(fetchedCategories);
                    }}
                </Query>

                <li className="m-categories__a-all">
                    <Link href="/blog/category" legacyBehavior>
                        <a>All</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
