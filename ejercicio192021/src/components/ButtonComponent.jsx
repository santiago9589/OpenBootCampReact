import React from "react";


const ButtonComponent = ({createJokeRamdon}) =>{


    return(
        <div>
            <button onClick={()=>createJokeRamdon()}>Crear nuevo chiste</button>
        </div>
    )
}


export default ButtonComponent;