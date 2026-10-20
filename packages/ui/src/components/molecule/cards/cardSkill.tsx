import React, { type CSSProperties } from 'react';
import Chip from '../../atom/chip/chip';

/**
 * Properties of the CardSkill component.
 */
export type CardSkillProps = {
    /**
     * Name of the group of skills.
     */
    title: string;
    /**
     * The skills of the group, one chip each.
     */
    skills: string[];
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
    /**
     * AOS animation delay in milliseconds.
     */
    aosDelay?: number;
};

/**
 * Molecule Component: Card Skill
 * A glass card that names a group of skills and lists them as chips.
 */
export default function CardSkill({
    title,
    skills,
    classname = '',
    style,
    aosDuration,
    aosEffect,
    aosDelay,
}: CardSkillProps) {
    return (
        <article
            className={`m-cardSkill ${classname}`.trim()}
            style={style}
            data-aos={aosEffect || undefined}
            data-aos-duration={aosDuration}
            data-aos-delay={aosDelay}
        >
            <h3 className="m-cardSkill__a-title">{title}</h3>
            <ul className="m-cardSkill__m-chips">
                {skills.map((skill) => (
                    <li key={skill}>
                        <Chip>{skill}</Chip>
                    </li>
                ))}
            </ul>
        </article>
    );
}
