import React, { useState } from "react";
import FormContact from "../pure/Form-contact";
import ContactUnit from "../pure/contact";
import { Contact } from "../../models/contactModel";



export const ContactList = () => {

    const defaultContact1 = new Contact('Example1', 'Example1', 123456, false);
    const defaultContact2 = new Contact('Example2', 'Example2', 123456, false);
    const defaultContact3 = new Contact('Example3', 'Example3', 123456, false);

    const [contacts, setContacts] = useState([defaultContact1, defaultContact2, defaultContact3])

    console.log(`${contacts} al inicio`)
    
    const createContact = (contact) => {
        
        console.log(`${contacts} al inicio dentro de la funcion`)
        let contactsCopied = [...contacts]

        contactsCopied.push(contact)

        setContacts(contactsCopied)
        console.log(`${contacts} al final dentro de la funcion`)
    }

    const deleteContact = (contact) => {

        let contactIndex = contacts.indexOf(contact)

        let contactsCopied = [...contacts]

        contactsCopied.splice(contactIndex, 1)

        setContacts(contactsCopied)

    }

    const changeOnOff = (contact) => {

        let contactIndex = contacts.indexOf(contact)

        let contactsCopied = [...contacts]

        let contactModif = contactsCopied[contactIndex]

        contactModif.isOnline = !contactModif.isOnline

        setContacts(contactsCopied)

    }

    console.log(`${contacts} al fin despues de la funcion`)

    return (
        <div>
            <div className="col-12">
                <div className='card'>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Last Name</th>
                                    <th scope='col'>Cell Number</th>
                                    <th scope='col'>Online</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact, index) => {
                                    return (
                                        <ContactUnit
                                            key={index}
                                            contactExist={contact}
                                            deleteContact={deleteContact}
                                            changeOnOff={changeOnOff}
                                        >
                                        </ContactUnit>
                                    )
                                }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <FormContact createContact={createContact}></FormContact>
        </div>
    )
}

export default ContactList