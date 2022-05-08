import React from "react";
import propTypes from "prop-types"
import {Contact} from "../../models/contactModel"



const ContactUnit = ({contactExist,deleteContact,changeOnOff}) =>{
    return (
        <tr className="fw-normal">
            <td className='align-middle'>
            {contactExist.name}
            </td>
            <td className='align-middle'>
            {contactExist.lastName}
            </td>
            <td className='align-middle'>
            {contactExist.cellNumber}
            </td>
            <td className='align-middle'>
            {contactExist.isOnline ? "OnLine":"Offline"}
            <i className='bi-trash task-action' style={{color: 'tomato'}} onClick={() => deleteContact(contactExist)}></i>
            {!contactExist.isOnline ? <i class="bi bi-arrow-clockwise" style={{color: "green" }} onClick={() => changeOnOff(contactExist)}></i>:
            <i class="bi bi-arrow-clockwise" style={{color: "red" }} onClick={() => changeOnOff(contactExist)}></i>}
            </td>    
        </tr>
    )

}

ContactUnit.propTypes = {

    contactExist: propTypes.instanceOf(Contact),
    deleteContact:propTypes.func.isRequired,
    changeOnOff:propTypes.func.isRequired,
}


export default ContactUnit

