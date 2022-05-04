import React from "react";
import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/ContactComponent";

const ContactList = () =>{

    const defaultContact = new Contact("test","test","gmail.com",false)

    return (
        <div>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    )
}

export default ContactList