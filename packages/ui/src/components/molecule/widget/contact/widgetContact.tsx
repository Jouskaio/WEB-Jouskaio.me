import { useEffect, useState } from 'react';

import Button from '../../../atom/button/button';
import TextDefault from '../../../atom/text/textDefault';
import TextH4 from '../../../atom/text/textH4';

/**
 * Structure of a contact in the widget.
 */
export type Contact = {
    /**
     * Name of the contact type (e.g., "Discord", "Email").
     */
    name: string;
    /**
     * Redirection URL for this contact.
     */
    url: string;
    /**
     * Description displayed for this contact type.
     */
    description: string;
    /**
     * Text of the button for this contact type (default: "Open" and the name).
     */
    action?: string;
};

/**
 * Properties of the WidgetContact component.
 */
export type WidgetContactProps = {
    /**
     * List of available contacts.
     */
    contacts: Contact[];
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * Widget title.
     */
    children: string;
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
 * Molecule Component: WidgetContact
 * A contact widget that allows choosing a communication method, then opening it with a labeled button.
 */
export default function WidgetContact({
                                          contacts,
                                          classname = '',
                                          children,
                                          aosDuration,
                                          aosEffect,
                                      }: WidgetContactProps) {
    const [selectedContact, setSelectedContact] = useState<Contact | null>(
        contacts[0] ?? null
    );

    useEffect(() => {
        setSelectedContact(contacts[0] ?? null);
    }, [contacts]);

    const handleContactChange = (contact: Contact) => {
        setSelectedContact(contact);
    };

    return (
        <div
            className={`m-widgetContact ${classname}`.trim()}
            data-aos={aosEffect}
            data-aos-duration={aosDuration}
        >
            <div className="m-widgetContact__m-divText">
                <TextH4 classname="m-widgetContact__a-title">{children}</TextH4>

                <nav className="m-widgetContact__a-contacts">
                    {contacts.map((contact, index) => (
                        <div className="m-widgetContact__a-input" key={contact.name}>
                            <input
                                type="radio"
                                id={`contactType${index}`}
                                name="contactType"
                                value={contact.name}
                                checked={selectedContact?.name === contact.name}
                                onChange={() => handleContactChange(contact)}
                            />
                            <label htmlFor={`contactType${index}`}>{contact.name}</label>
                        </div>
                    ))}
                </nav>

                <TextDefault classname="m-widgetContact__a-description">
                    {selectedContact?.description ?? ''}
                </TextDefault>
            </div>

            {selectedContact?.url && (
                <div className="m-widgetContact__m-actions">
                    <Button src={selectedContact.url} external={/^https?:/.test(selectedContact.url)}>
                        {selectedContact.action ?? `Open ${selectedContact.name}`}
                    </Button>
                </div>
            )}
        </div>
    );
}
