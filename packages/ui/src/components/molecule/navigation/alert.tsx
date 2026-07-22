import type { ReactNode } from 'react';
import TextDefault from '../../atom/text/TextDefault';

/**
 * Properties of the Alert component.
 */
export type AlertProps = {
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * Content of the alert message.
     */
    children?: ReactNode;
};

/**
 * Molecule Component: Alert
 * An animated alert banner to display important messages.
 */
export default function Alert({
                                  classname = '',
                                  children,
                              }: AlertProps) {
    return (
        <div
            className={`m-alert ${classname}`.trim()}
            data-aos="zoom-in-up"
            data-aos-duration="1000"
        >
            <TextDefault>{children}</TextDefault>
        </div>
    );
}
