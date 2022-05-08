import React, { useRef } from "react";
import propTypes from "prop-types"
import {Contact} from "../../models/contactModel"

const FormContact = ({createContact}) =>{

    const refName = useRef("")
    const reflastName=useRef("")
    const refcellNumber=useRef("")


    function registerContact(e){
        e.preventDefault();
        const newContact = new Contact(
            refName.current.value,
            reflastName.current.value,
            refcellNumber.current.value,
            false
        )
        createContact(newContact)
    }

    return(
        <form onSubmit={registerContact}>
            <input ref={refName} id="inputName" type="text" placeholder="name"></input>
            <input ref={reflastName} id="inputLastName" type="text" placeholder="lastName"></input>
            <input ref={refcellNumber} id="inputcellNumber" type="text" placeholder="XXXX-XXXX"></input>
            <button type="submit">Agregar Contacto</button>
        </form>
    )
}



FormContact.propTypes = {
    
    createContact:propTypes.func.isRequired,
    
}

export default FormContact