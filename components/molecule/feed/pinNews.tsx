import React from "react";
import PropTypes from 'prop-types';
import { shimmer, toBase64 } from "../../../lib/preload/preload-image";
import TextDefault from "../../atom/text/TextDefault";
import TextH4 from "../../atom/text/textH4";
import Link from "next/link";
import Tag from "../../atom/text/tag";
import Image from "next/image";

function PinNews(props) {
    const {
        tags,
        title,
        text,
        media,
        url,
        classname
    } = props;

    return (
        <Link href={`https://blog.jouskaio.me/${url}`} legacyBehavior>
            <div className={`m-pinNews ${classname}`}>
                <div className={"m-pinNews__m-divText"}>
                    <TextH4 classname={`m-pinNews__a-title`}>{title}</TextH4>
                    <div className="a-text " dangerouslySetInnerHTML={{__html: text}}/>
                    <nav className={"m-pinNews__m-tags"}>
                        {tags && tags.map((item, i) => (
                            <Tag color={item.color} slug={item.slug} key={i}
                                 classname={"m-pin__a-tag"}>{item.name}</Tag>
                        ))}
                    </nav>
                </div>
                <Image
                    src={media}
                    placeholder="blur"
                    width={100}
                    alt={title}
                    height={55}
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer("100%", "100%"))}`}
                    onLoad={() => `data:image/svg+xml;base64,${toBase64(shimmer("100%", "100%"))}`}
                    className={`m-pinNews__a-image`}
                />
            </div>
        </Link>
    );
}

PinNews.propTypes = {
    tags: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            color: PropTypes.string,
            slug: PropTypes.string
        })
    ).isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    media: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    classname: PropTypes.string
};

export default PinNews;
