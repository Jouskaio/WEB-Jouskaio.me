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
     * URL of the company logo.
     */
    logoUrl?: string;
    /**
     * URL of the company website.
     */
    companyUrl?: string;
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
    logoUrl,
    companyUrl,
    classname = '',
    style,
    aosDuration,
    aosEffect,
}: CardExperienceProps) {
    return (
        <div
            className={`m-cardExperience ${classname} ${logoUrl ? 'm-cardExperience--with-logo' : ''}`.trim()}
            style={style}
            data-aos={aosEffect || undefined}
            data-aos-duration={aosDuration}
        >
            <div className="m-cardExperience__header">
                {logoUrl && (
                    <div className="m-cardExperience__logo">
                        {companyUrl ? (
                            <a href={companyUrl} target="_blank" rel="noopener noreferrer">
                                <img src={logoUrl} alt={`${company} logo`} />
                            </a>
                        ) : (
                            <img src={logoUrl} alt={`${company} logo`} />
                        )}
                    </div>
                )}
                <div className="m-cardExperience__header-content">
                    <TextH4 classname="m-cardExperience__title">{title}</TextH4>
                    <div className="m-cardExperience__info">
                        <TextDefault classname="m-cardExperience__company">{company}</TextDefault>
                        <TextDefault classname="m-cardExperience__separator">|</TextDefault>
                        <TextDefault classname="m-cardExperience__period">{period}</TextDefault>
                    </div>
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
