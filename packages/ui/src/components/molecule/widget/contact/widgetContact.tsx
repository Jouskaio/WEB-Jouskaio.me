import { useEffect, useState } from 'react';

import Switch from '../../../atom/switch/switch';
import TextDefault from '../../../atom/text/TextDefault';
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
 * A contact widget that allows choosing a communication method and toggling a switch to open the link.
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
    const [isEnabled, setIsEnabled] = useState(false);

    useEffect(() => {
        setSelectedContact(contacts[0] ?? null);
    }, [contacts]);

    const handleContactChange = (contact: Contact) => {
        setSelectedContact(contact);
    };

    const toggleSwitch = (checked: boolean) => {
        setIsEnabled(checked);

        if (selectedContact?.url) {
            window.open(selectedContact.url, '_blank', 'noopener,noreferrer');
        }

        window.setTimeout(() => {
            setIsEnabled(false);
        }, 1500);
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

            <nav className="m-widgetContact__a-switchNav">
                <Switch
                    isChecked={isEnabled}
                    onClick={toggleSwitch}
                    name="m-widgetContact__a-switch"
                />
            </nav>
        </div>
    );
}
