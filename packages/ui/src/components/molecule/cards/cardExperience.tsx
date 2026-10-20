import React, { type CSSProperties } from 'react';
import Chip from '../../atom/chip/chip';

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
     * Level of the title in the outline of the page (3 by default).
     */
    headingLevel?: 2 | 3;
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
 * A glass card representing a professional experience: logo, title, company and period, description and technologies.
 */
export default function CardExperience({
    title,
    company,
    period,
    description,
    technologies = [],
    logoUrl,
    companyUrl,
    headingLevel = 3,
    classname = '',
    style,
    aosDuration,
    aosEffect,
}: CardExperienceProps) {
    const Heading = `h${headingLevel}` as 'h2' | 'h3';
    return (
        <article
            className={`m-cardExperience ${classname}`.trim()}
            style={style}
            data-aos={aosEffect || undefined}
            data-aos-duration={aosDuration}
        >
            <div className="m-cardExperience__m-header">
                {logoUrl && <img className="m-cardExperience__a-logo" src={logoUrl} alt="" width={48} height={48} />}
                <div>
                    <Heading className="m-cardExperience__a-title">{title}</Heading>
                    <p className="m-cardExperience__a-info">
                        {companyUrl ? (
                            <a href={companyUrl} target="_blank" rel="noreferrer">
                                {company}
                            </a>
                        ) : (
                            company
                        )}{' '}
                        · {period}
                    </p>
                </div>
            </div>

            <p className="m-cardExperience__a-description">{description}</p>

            {technologies.length > 0 && (
                <ul className="m-cardExperience__m-chips" aria-label="Technologies">
                    {technologies.map((tech) => (
                        <li key={tech}>
                            <Chip>{tech}</Chip>
                        </li>
                    ))}
                </ul>
            )}
        </article>
    );
}
