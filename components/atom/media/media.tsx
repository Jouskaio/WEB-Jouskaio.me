import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { shimmer, toBase64 } from "../../../lib/preload/preload-image";

type MediaProps = {
    src: string;
    width?: number | `${number}`;
    height?: number | `${number}`;
    classname?: string;
    alt?: string;
    style?: React.CSSProperties;
};

/**
 * Atom: Media
 *
 * @param src : string
 * @param width : number
 * @param height : number
 * @param classname : string
 * @param alt : string
 * @param style : React.CSSProperties (ex: { objectFit: "cover" })
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