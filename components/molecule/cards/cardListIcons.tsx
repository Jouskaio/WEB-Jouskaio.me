import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Image from 'next/image'
import TextH4 from "../../atom/text/textH4";
import TextDefault from "../../atom/text/TextDefault";

function CardListIcons(props) {
    const {
        icons: icons,
        classname: classname,
        aosDuration: aosDuration,
        aosEffect: aosEffect,
    } = props;

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % icons.length);
        }, 2500);

        return () => {
            clearInterval(interval);
        };
    }, [icons.length]);

    let startX = 0;
    let isDragging = false;

    const handleTouchStart = (e) => {
        startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;

        const deltaX = e.touches[0].clientX - startX;
        if (deltaX > 50) {
            // Swiped right, go to the previous item
            setCurrentIndex(prevIndex => (prevIndex - 1 + icons.length) % icons.length);
        } else if (deltaX < -50) {
            // Swiped left, go to the next item
            setCurrentIndex(prevIndex => (prevIndex + 1) % icons.length);
        }

        isDragging = false;
    };

    const handleMouseDown = (e) => {
        startX = e.clientX;
        isDragging = true;
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const deltaX = e.clientX - startX;
        if (deltaX > 50) {
            // Dragged right, go to the previous item
            setCurrentIndex(prevIndex => (prevIndex - 1 + icons.length) % icons.length);
            isDragging = false;
        } else if (deltaX < -50) {
            // Dragged left, go to the next item
            setCurrentIndex(prevIndex => (prevIndex + 1) % icons.length);
            isDragging = false;
        }
    };

    const handleMouseUp = () => {
        isDragging = false;
    };

    return (
        <div
            className={`m-cardListIcons ${classname}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            data-aos={aosEffect} data-aos-duration={aosDuration}
        >
            {icons.map(function (item, i) {
                const isActive = i === currentIndex;
                return (
                    <div
                        className={`m-cardListIcons__a-item ${classname} ${isActive ? "active" : "hidden"}`}
                        key={i}
                    >
                        <nav className={"m-cardListIcons--background"}></nav>
                        <div className={"m-cardListIcons__a-div"}>
                            <Image className={"m-cardListIcons__a-icons"} src={item.icon} alt={"NaN"} height={56} width={56} />
                            <div className={"m-cardListIcons__a-divText"}>
                                {item.title && <TextH4 classname={"m-cardListIcons__a-title"}>{item.title}</TextH4>}
                                <TextDefault classname={"m-cardListIcons__a-text"}>{item.text}</TextDefault>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

CardListIcons.propTypes = {
    icons: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string.isRequired,
            title: PropTypes.string,
            text: PropTypes.string.isRequired,
        })
    ).isRequired,
    classname: PropTypes.string,
    aosDuration: PropTypes.number,
    aosEffect: PropTypes.string,
};

export default CardListIcons;
