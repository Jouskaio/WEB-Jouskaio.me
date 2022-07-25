import CATEGORIES_QUERY from "/lib/blog/category/categories";
import Query from "/lib/blog/api";
import Link from "next/link";

export default function NavCategories() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({data: {categories}}) => {
          return (
            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav">
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