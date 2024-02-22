import CATEGORIES_QUERY from "../../../lib/api/category/categories";
import Query from "../../../lib/api/api";
// @ts-ignore
import Link from "next/link";
import {Component} from "react";
import PropTypes from "prop-types";

export default class NavCategories extends Component{
    static propTypes = {
        width: PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.number.isRequired
        ]),
        classname: PropTypes.string
    }
    render() {
        const {
            // @ts-ignore
            width,
            // @ts-ignore
            classname
        } = this.props
        return (
            <div className={"l-blog__m-categories"}>
                <ul className={"l-blog__m-categoriesUl " + classname} style={{width: width}}>
                    <Query query={CATEGORIES_QUERY}>
                        {({data: {categories}}) => {
                            return (
                                categories.data.map((category) => {
                                    return (
                                        <li key={category.attributes.slug}>
                                            <Link
                                                href={`/blog/category/[slug]`}
                                                as={`/blog/category/${category.attributes.slug}`}>
                                                {category.attributes.name}
                                            </Link>
                                        </li>
                                    );
                                })
                            );
                        }}
                    </Query>
                    <li className={"m-categories__a-all"}>
                        <Link href={`/blog/category`}>
                            All
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}