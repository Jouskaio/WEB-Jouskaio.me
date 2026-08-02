import React, { type CSSProperties } from 'react';
import TextSpanXS from '../../../atom/text/textSpanXS';

/**
 * Properties for an item in the timeline.
 */
export type TimelineItem = {
    /**
     * Year of the event.
     */
    year: number;
    /**
     * Display label for the year (e.g. 'Present').
     */
    yearLabel?: string;
    /**
     * Name of the company or event.
     */
    label?: string;
    /**
     * Whether this is the current position.
     */
    isCurrent?: boolean;
};

/**
 * Properties for the WidgetTimeline component.
 */
export type WidgetTimelineProps = {
    /**
     * List of items to display in the timeline.
     */
    items: TimelineItem[];
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * AOS animation duration in milliseconds.
     */
    aosDuration?: number;
    /**
     * AOS animation effect.
     */
    aosEffect?: string;
    /**
     * Inline styles.
     */
    style?: CSSProperties;
    /**
     * Multiplier for the gap between years to make it proportional.
     * Defaults to 40px per year.
     */
    gapMultiplier?: number;
};

/**
 * Molecule Component: Widget Timeline
 * A vertical timeline that displays years and labels with proportional spacing.
 */
export default function WidgetTimeline({
    items,
    classname = '',
    aosDuration,
    aosEffect,
    style,
    gapMultiplier = 40,
}: WidgetTimelineProps) {
    // Sort items by year descending
    const sortedItems = [...items].sort((a, b) => b.year - a.year);

    if (sortedItems.length === 0) return null;

    return (
        <div
            className={`m-widgetTimeline ${classname}`.trim()}
            style={style}
            data-aos={aosEffect || undefined}
            data-aos-duration={aosDuration}
        >
            <div className="m-widgetTimeline__line"></div>
            <div className="m-widgetTimeline__items">
                {sortedItems.map((item, index) => {
                    const isLast = index === sortedItems.length - 1;
                    let gap = 0;
                    
                    if (!isLast) {
                        gap = Math.max(0.5, sortedItems[index].year - sortedItems[index + 1].year);
                    }

                    return (
                        <div
                            key={`${item.year}-${item.label || index}`}
                            className={`m-widgetTimeline__item ${item.isCurrent ? 'm-widgetTimeline__item--current' : ''}`.trim()}
                            style={{ marginBottom: !isLast ? `${gap * gapMultiplier}px` : 0 }}
                        >
                            <div className="m-widgetTimeline__dot"></div>
                            <div className="m-widgetTimeline__content">
                                <TextSpanXS classname="m-widgetTimeline__year">
                                    {item.yearLabel || (item.isCurrent ? 'Present' : item.year)}
                                </TextSpanXS>
                                {item.label && (
                                    <span className="m-widgetTimeline__label">{item.label}</span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
