import CATEGORIES_QUERY from "../../../lib/blog/category/categories";
import Query from "../../../lib/blog/api";
// @ts-ignore
import Link from "next/link";

export default function NavCategories() {
  // @ts-ignore
    // @ts-ignore
    return (
    <section className="">
      <h1 className="">
        Blog.
      </h1>
      <Query query={CATEGORIES_QUERY} >
          {({ data: { categories } }) => {
          return (
            <div className="">
              <ul className="">
                {categories.data.map((category) => {
                  return (
                    <li key={category.attributes.slug}>
                      <Link
                        href={`/blog/category/[slug]`} as={`/blog/category/${category.attributes.slug}`}
                        className="uk-link-reset">
                        {category.attributes.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        }}
      </Query>
    </section>
  )
}