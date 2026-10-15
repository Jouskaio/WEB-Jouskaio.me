import React, { useEffect, useId, useRef, type ReactNode } from 'react';

/**
 * Properties of the Dialog component.
 */
export type DialogProps = {
    /**
     * Whether the dialog is open.
     */
    open: boolean;
    /**
     * Called when the visitor closes the dialog: close button, Escape key or a click outside.
     */
    onClose: () => void;
    /**
     * Title of the dialog, also its accessible name.
     */
    title: string;
    /**
     * Content of the dialog.
     */
    children: ReactNode;
    /**
     * Additional CSS classes.
     */
    classname?: string;
};

/**
 * Molecule Component: Dialog
 * A modal window built on the native <dialog> element: the browser keeps the focus inside it, closes it
 * with Escape, hides the page from assistive technologies and gives the focus back when it closes.
 */
export default function Dialog({ open, onClose, title, children, classname = '' }: DialogProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const titleId = useId();

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) {
            return;
        }
        if (open && !dialog.open) {
            dialog.showModal();
        } else if (!open && dialog.open) {
            dialog.close();
        }
    }, [open]);

    return (
        <dialog
            ref={dialogRef}
            className={`m-dialog ${classname}`.trim()}
            aria-labelledby={titleId}
            onClose={onClose}
            onClick={(event) => {
                // A click on the dialog itself (not on its content) is a click on the backdrop
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <div className="m-dialog__m-content">
                <div className="m-dialog__m-header">
                    <h2 id={titleId} className="m-dialog__a-title">
                        {title}
                    </h2>
                    <button type="button" className="m-dialog__a-close" onClick={onClose}>
                        Close
                    </button>
                </div>
                {children}
            </div>
        </dialog>
    );
}
