import React, { type CSSProperties } from 'react';
import TextDefault from '../../atom/text/TextDefault';
import TextH4 from '../../atom/text/textH4';
import Tag from '../../atom/text/tag';

/**
 * Properties of the CardExperience component.
 */
export type CardExperienceProps = {
    /**
     * Job title.
     */
    title: string;
    /**
     * Company name.
     */
    company: string;
    /**
     * Period of employment (e.g., "Jan 2020 - Present").
     */
    period: string;
    /**
     * Brief description of responsibilities and achievements.
     */
    description: string;
    /**
     * List of technologies or skills used.
     */
    technologies?: string[];
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * Inline CSS styles.
     */
    style?: CSSProperties;
    /**
     * AOS animation duration in milliseconds.
     */
    aosDuration?: number;
    /**
     * AOS animation effect (e.g., "fade-up").
     */
    aosEffect?: string;
};

/**
 * Molecule Component: Card Experience
 * A card representing a professional experience with title, company, period, and skills.
 */
export default function CardExperience({
    title,
    company,
    period,
    description,
    technologies = [],
    classname = '',
    style,
    aosDuration,
    aosEffect,
}: CardExperienceProps) {
    return (
        <div
            className={`m-cardExperience ${classname}`.trim()}
            style={style}
            data-aos={aosEffect}
            data-aos-duration={aosDuration}
        >
            <div className="m-cardExperience__header">
                <TextH4 classname="m-cardExperience__title">{title}</TextH4>
                <div className="m-cardExperience__info">
                    <span className="m-cardExperience__company">{company}</span>
                    <span className="m-cardExperience__separator">|</span>
                    <span className="m-cardExperience__period">{period}</span>
                </div>
            </div>
            
            <TextDefault classname="m-cardExperience__description">
                {description}
            </TextDefault>
            
            {technologies.length > 0 && (
                <div className="m-cardExperience__tags">
                    {technologies.map((tech, index) => (
                        <Tag key={`${tech}-${index}`} classname="m-cardExperience__tag" color={"red"} slug={"Test"}>
                            {tech}
                        </Tag>
                    ))}
                </div>
            )}
        </div>
    );
}
