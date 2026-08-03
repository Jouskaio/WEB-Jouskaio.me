import Link from 'next/link';

import CATEGORIES_QUERY from '../../../lib/api/category/categories';
import Query from '../../../lib/api/api';

/**
 * Structure of a navigation category.
 */
export type NavCategoryItem = {
    /**
     * Category name.
     */
    name: string;
    /**
     * Slug for the category URL.
     */
    slug: string;
};

/**
 * Properties of the NavCategories component.
 */
export type NavCategoriesProps = {
    /**
     * Width of the categories container.
     */
    width?: string | number;
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * Optional list of categories. If not provided, they will be fetched via the API.
     */
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
 * Molecule Component: Nav Categories
 * Displays a list of categories for blog navigation.
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
                    {(result: any) => {
                        const fetchedCategories =
                            result?.data?.categories?.data?.map((category: any) => ({
                                slug: category.attributes.slug,
                                name: category.attributes.name,
                            })) ?? [];

                        return <>{renderCategoryItems(fetchedCategories)}</>;
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
