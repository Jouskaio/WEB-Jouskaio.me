import CATEGORIES_QUERY from "../../../lib/blog/category/categories";
import Query from "../../../lib/blog/api";
// @ts-ignore
import Link from "next/link";

/**
 *
 * @constructor
 */
export default function NavCategories() {
  // @ts-ignore
    // @ts-ignore
    return (
    <ul className={"m-categories"}>
      <Query query={CATEGORIES_QUERY} >
          {({ data: { categories } }) => {
          return (
            categories.data.map((category) => {
              return (
                <li key={category.attributes.slug}>
                  <Link
                    href={`/blog/category/[slug]`} as={`/blog/category/${category.attributes.slug}`}
                    className="uk-link-reset">
                    {category.attributes.name}
                  </Link>
                </li>
              );
            })
          );
        }}
      </Query>
    </ul>
  )
}