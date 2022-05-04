import React from "react"
import PropTypes from 'prop-types';
import { Contact } from "../../models/contact.class";

const ContactComponent = ({contact}) =>{

    return (
        <div>
            <p>nombre : {contact.name}</p>
            <p>apellido : {contact.lastName}</p>
            <p>email : {contact.email}</p>
            <p>{contact.isConnected ? "Contacto En Línea":"Contacto No Disponible"}</p>
        </div>
    );

};

ContactComponent.propTypes = {
    contact : PropTypes.instanceOf(Contact)
}

export default  ContactComponent