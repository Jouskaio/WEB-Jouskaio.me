import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import {shimmer, toBase64} from "../../../lib/preload/preload-image";
import TextDefault from "../../atom/text/TextDefault";
import TextH4 from "../../atom/text/textH4";
import Link from "next/link";
import Tag from "../../atom/text/tag";

function Pin(props) {
    const {
        tags,
        title,
        text,
        media,
        url,
        size,
        classname
    } = props;


    return (
        <div className={`m-pin m-pin--${size} ${classname}`}>
            {size === 'medium' && (
                <nav className={"m-pin__m-tags--" + size}>
                    {tags && tags.map((item, i) => (
                        <Tag color={item.color} slug={item.slug} key={i} classname={"m-pin__a-tag"}>{item.name}</Tag>
                    ))}
                </nav>
            )}
            <img
                src={media}
                placeholder="blur"
                onLoad={() => `data:image/svg+xml;base64,${toBase64(shimmer("100%", "100%"))}`}
                className={`m-pin__a-image--${size}`}
            />
            {(size === 'small' || size === 'large') && (
                <nav className={"m-pin__m-tags--" + size}>
                    {tags && tags.map((item, i) => (
                        <Tag color={item.color} slug={item.slug} key={i} classname={"m-pin__a-tag"}>{item.name}</Tag>
                    ))}
                </nav>
            )}
            <TextH4 classname={`m-pin__a-title--${size}`}>{title}</TextH4>
            <p className={`m-pin__a-text m-pin__a-text--${size}`}>{text}</p>
            <Link href={url}><a className={"m-pin__a-link"}>Read More</a></Link>
        </div>
    );
}


Pin.propTypes = {
    tags: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            color: PropTypes.string,
            slug: PropTypes.string
        })
    ),
    title: PropTypes.string,
    text: PropTypes.string,
    media: PropTypes.string,
    url: PropTypes.string,
    size: PropTypes.string.isRequired,
    classname: PropTypes.string
};

export default Pin;
