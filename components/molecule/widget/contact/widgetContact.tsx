import React, { Component, useState } from "react";
import PropTypes from 'prop-types';
import TextH4 from "../../../atom/text/textH4";
import Switch from "../../../atom/button/switch";
import TextDefault from "../../../atom/text/TextDefault";

class WidgetContact extends Component {
    static propTypes = {
        contacts: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            url: PropTypes.string,
            description: PropTypes.string
        })).isRequired,
        classname: PropTypes.string,
        children: PropTypes.string.isRequired,
        aosDuration: PropTypes.number,
        aosEffect: PropTypes.string,
    };

    constructor(props) {
        super(props);

        this.state = {
            selectedContact: props.contacts[0],
            isEnabled: false,
        };

    }

    handleContactChange = (contact) => {
        this.setState({ selectedContact: contact });
    };

    toggleSwitch = () => {
        this.setState(
            (prevState) => ({
                //@ts-ignore
                isEnabled: !prevState.isEnabled
            }),
            () => {
                // Exécute l'URL
                //@ts-ignore
                window.open(this.state.selectedContact.url, "_blank", "noreferrer");

                // Attends 1,5 secondes avant de rétablir l'état précédent d'isEnabled
                setTimeout(() => {
                    this.setState({ isEnabled: false });
                }, 1500);
            }
        );
    };

    render() {
        const {
            //@ts-ignore
            contacts,
            //@ts-ignore
            classname,
            //@ts-ignore
            children,
            //@ts-ignore
            aosDuration,
            //@ts-ignore
            aosEffect,
        } = this.props;

        // @ts-ignore
        const { selectedContact, isEnabled } = this.state;

        return (
            <div className={"m-widgetContact " + classname} data-aos={aosEffect} data-aos-duration={aosDuration}>
                <div className="m-widgetContact__m-divText">
                    <TextH4 classname={"m-widgetContact__a-title"}>{children}</TextH4>
                    <nav className="m-widgetContact__a-contacts">
                        {contacts.map((contact, i) => (
                            <div className={"m-widgetContact__a-input"} key={i}>
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
                    <TextDefault classname={"m-widgetContact__a-description"}>{selectedContact.description}</TextDefault>
                </div>
                <nav className={"m-widgetContact__a-switchNav"}>
                    <Switch isChecked={
                            //@ts-ignore
                            this.state.isEnabled}
                            onClick={this.toggleSwitch}
                            name={"m-widgetContact__a-switch"}/>
                </nav>
            </div>
        );
    }
}

export default WidgetContact;
