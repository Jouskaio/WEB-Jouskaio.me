import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { shimmer, toBase64 } from "../../../lib/preload/preload-image";

/**
 * Media component properties.
 */
type MediaProps = {
    /**
     * Source URL of the media (image).
     */
    src: string;
    /**
     * Width of the image.
     */
    width?: number | `${number}`;
    /**
     * Height of the image.
     */
    height?: number | `${number}`;
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * Alternative text for the image.
     */
    alt?: string;
    /**
     * In-line CSS styles.
     */
    style?: React.CSSProperties;
};

/**
 * Atom Component: Media
 *
 * An optimized wrapper for Next.js images with a loading placeholder (shimmer).
 */
const Media = ({
       src,
       width,
       height,
       classname = "",
       alt = "",
       style = {},}: MediaProps) => {
    return (
        <Image
            src={src}
            alt={alt}
            height={height}
            width={width}
            unoptimized={false}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`}
            loader={() => src}
            style={style}
            className={`a-media ${classname}`}
        />
    );
};

Media.propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    classname: PropTypes.string,
    alt: PropTypes.string,
    style: PropTypes.object,
};

export default Media;