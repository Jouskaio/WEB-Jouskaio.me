import React, { Component, ReactNode } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

type TagProps = {
    classname?: string;
    children?: ReactNode;
    color: string;
    slug: string;
};

/**
 * Atom: Tag
 *
 * @param classname : string
 * @param color : string
 * @param slug : string
 * @param children : ReactNode
 */
export default class Tag extends Component<TagProps> {
    static propTypes = {
        classname: PropTypes.string,
        children: PropTypes.any,
        color: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
    };

    render() {
        const {
            classname = "",
            children,
            color,
            slug
        } = this.props;

        return (
            <Link href={`https://blog.jouskaio.me/${slug}`} legacyBehavior>
                <a className={`a-tag ${classname}`} style={{ color }}>
                    {children}
                </a>
            </Link>
        );
    }
}