import React from "react";
import PropTypes from 'prop-types';
import PinNews from "../feed/pinNews";
import TextH5 from "../../atom/text/textH5";

function CardNews(props) {
    const {
        article,
        classname,
        aosDuration,
        aosEffect,
    } = props;

    return (
        <div className={`m-cardNews ${classname}`} data-aos={aosEffect} data-aos-duration={aosDuration}>
            <TextH5 classname={"m-cardNews__a-title"}>Latest Articles</TextH5>
            {article.map((item, i) => {
                const internalURL = process.env.BLOG_INTERNAL_URL || "http://localhost:8000";
                const updatedMediaURL = item.media.replace("https://blog.jouskaio.me", internalURL);

                return (
                    <PinNews
                        title={item.title}
                        text={item.text}
                        media={updatedMediaURL} // Utilisation de l'URL mise à jour
                        url={item.url}
                        tags={item.tags}
                        classname={item.classname}
                        key={i}
                    />
                );
            })}
        </div>
    );
}

CardNews.propTypes = {
    article: PropTypes.arrayOf(
        PropTypes.shape({
            media: PropTypes.string.isRequired,
            tags: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string,
                    color: PropTypes.string,
                    slug: PropTypes.string
                })
            ).isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            classname: PropTypes.string
        })
    ).isRequired,
    classname: PropTypes.string,
    aosDuration: PropTypes.number,
    aosEffect: PropTypes.string,
};

export default CardNews;