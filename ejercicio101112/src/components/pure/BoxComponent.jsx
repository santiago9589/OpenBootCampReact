import React, { useRef } from "react";
import propTypes from "prop-types";

const BoxComponent = ({ChangeColorComponent,CancelChangeColorLeave,CancelChangeColorDClick}) =>{

    const BoxReference = useRef("")


    return (
        <div ref={BoxReference} className = "BoxComponent" 
        onMouseEnter={() =>ChangeColorComponent(BoxReference)}
        onMouseLeave={()=>CancelChangeColorLeave()} 
        onDoubleClick={()=>CancelChangeColorDClick()}
        >
           
        </div>
    )
}

BoxComponent.propTypes = {

}

export default BoxComponent;