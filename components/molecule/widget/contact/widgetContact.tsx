import React, { Component } from "react";
import PropTypes from "prop-types";
import TextH4 from "../../../atom/text/textH4";
import Switch from "../../../atom/button/switch";
import TextDefault from "../../../atom/text/TextDefault";

type Contact = {
    name: string;
    url: string;
    description: string;
};

type WidgetContactProps = {
    contacts: Contact[];
    classname?: string;
    children: string;
    aosDuration?: number;
    aosEffect?: string;
};

type WidgetContactState = {
    selectedContact: Contact;
    isEnabled: boolean;
};

/**
 * Molecule: WidgetContact
 */
export default class WidgetContact extends Component<WidgetContactProps, WidgetContactState> {
    static propTypes = {
        contacts: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                url: PropTypes.string,
                description: PropTypes.string
            })
        ).isRequired,
        classname: PropTypes.string,
        children: PropTypes.string.isRequired,
        aosDuration: PropTypes.number,
        aosEffect: PropTypes.string
    };

    constructor(props: WidgetContactProps) {
        super(props);

        this.state = {
            selectedContact: props.contacts[0],
            isEnabled: false
        };
    }

    handleContactChange = (contact: Contact) => {
        this.setState({ selectedContact: contact });
    };

    toggleSwitch = () => {
        this.setState(
            (prevState) => ({
                isEnabled: !prevState.isEnabled
            }),
            () => {
                const { selectedContact } = this.state;
                if (selectedContact?.url) {
                    window.open(selectedContact.url, "_blank", "noopener noreferrer");
                }

                setTimeout(() => {
                    this.setState({ isEnabled: false });
                }, 1500);
            }
        );
    };

    render() {
        const { contacts, classname = "", children, aosDuration, aosEffect } = this.props;
        const { selectedContact, isEnabled } = this.state;

        return (
            <div className={`m-widgetContact ${classname}`} data-aos={aosEffect} data-aos-duration={aosDuration}>
                <div className="m-widgetContact__m-divText">
                    <TextH4 classname="m-widgetContact__a-title">{children}</TextH4>

                    <nav className="m-widgetContact__a-contacts">
                        {contacts.map((contact, i) => (
                            <div className="m-widgetContact__a-input" key={i}>
                                <input
                                    type="radio"
                                    id={`contactType${i}`}
                                    name="contactType"
                                    value={contact.name}
                                    checked={selectedContact === contact}
                                    onChange={() => this.handleContactChange(contact)}
                                />
                                <label htmlFor={`contactType${i}`}>{contact.name}</label>
                            </div>
                        ))}
                    </nav>

                    <TextDefault classname="m-widgetContact__a-description">
                        {selectedContact?.description}
                    </TextDefault>
                </div>

                <nav className="m-widgetContact__a-switchNav">
                    <Switch
                        isChecked={isEnabled}
                        onClick={this.toggleSwitch}
                        name="m-widgetContact__a-switch"
                    />
                </nav>
            </div>
        );
    }
}