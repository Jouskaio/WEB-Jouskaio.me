import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

// Delete hydration UI
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

import TextH5 from "../../atom/text/textH5";
import TextH3 from "../../atom/text/textH3";
import TextDefault from "../../atom/text/TextDefault";
import Pin from "../../molecule/feed/pin";

function FeedLatest(props) {
    const {
        pins: pins,
        classname: classname
    } = props;

    return (
        <div className={`m-feed ${classname}`}>
            {
                pins.map(function (pin, i) {
                    return (
                        <Pin size={pin.size}
                             media={pin.media}
                             tags={pin.tags}
                             title={pin.title}
                             text={pin.text}
                             url={pin.url}
                             key={i}
                        />
                    )

                })}
        </div>
    );
}

FeedLatest.propTypes = {
    pins : PropTypes.arrayOf(
        PropTypes.shape({
            tag: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string,
                    color: PropTypes.string
                })
            ),
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            media: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            size: PropTypes.string.isRequired
        })
    ).isRequired,
    classname: PropTypes.string,
};

export default FeedLatest;
