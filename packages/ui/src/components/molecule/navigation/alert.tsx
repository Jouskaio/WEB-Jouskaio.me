import type { ReactNode } from 'react';
import TextDefault from '../../atom/text/TextDefault';

export type AlertProps = {
    classname?: string;
    children?: ReactNode;
};

/**
 * Molecule: Alert
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
