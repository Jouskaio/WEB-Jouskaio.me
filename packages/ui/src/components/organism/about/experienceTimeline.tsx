import React from 'react';
import CardExperience, { type CardExperienceProps } from '../../molecule/cards/cardExperience';

/**
 * An experience of the timeline: a card and the year it started.
 */
export type ExperienceTimelineItem = CardExperienceProps & {
    /**
     * Year shown on the side of the timeline.
     */
    year: string;
};

/**
 * Properties of the ExperienceTimeline component.
 */
export type ExperienceTimelineProps = {
    /**
     * The experiences, the most recent first.
     */
    items: ExperienceTimelineItem[];
    /**
     * Additional CSS classes.
     */
    classname?: string;
};

/**
 * Organism Component: ExperienceTimeline
 * A list of experiences linked by a vertical line: the year on the left, a dot on the line and the card on the right.
 * On a narrow screen the years are hidden (the period is in the card) and the line stays on the side.
 */
export default function ExperienceTimeline({ items, classname = '' }: ExperienceTimelineProps) {
    return (
        <ol className={`o-experienceTimeline ${classname}`.trim()}>
            {items.map(({ year, ...experience }) => (
                <li key={`${experience.company}-${year}`} className="o-experienceTimeline__m-step">
                    <span className="o-experienceTimeline__a-year" aria-hidden="true">
                        {year}
                    </span>
                    <span className="o-experienceTimeline__a-node" aria-hidden="true" />
                    <CardExperience
                        {...experience}
                        classname="o-experienceTimeline__m-card"
                        aosEffect={experience.aosEffect ?? 'fade-up'}
                        aosDuration={experience.aosDuration ?? 900}
                    />
                </li>
            ))}
        </ol>
    );
}
