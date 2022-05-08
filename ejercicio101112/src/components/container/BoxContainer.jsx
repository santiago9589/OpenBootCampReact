import React, { useState } from "react";
import BoxComponent from "../pure/BoxComponent"

const BoxContainer = () => {

    /*

    Dentro del componente crearéis varios métodos de captura del ratón que harán lo 
    siguiente para que el color del elemento cambie:

Un método para que cuando el ratón entre en el contenedor, 
se dará un valor aleatorio (color RGB entre 0 y 255) para cambiar el color del componente.

Un método para que cuando salga el ratón del 
componente se detenga por completo el cambio de color.

Por último, un método en el que cuando se pulsa dos veces en el componente, 
se tiene que detener el cambio de color.


    */

    const [controlChange, setControlChange] = useState(0)
    

    const Colors = (box) =>{

        let numberRandoms = [];

        for (let i = 0; i <= 2; i++) {
            let numberRandom = Math.round(Math.random() * 255);

            numberRandoms.push(numberRandom)
        }
        let boxStyle = {
            backgroundColor: ` rgb(${numberRandoms[0]},${numberRandoms[1]},${numberRandoms[2]})`
        };
        box.current.style.backgroundColor = boxStyle.backgroundColor
    }

    const CancelChangeColorLeave = () =>{

        clearInterval(controlChange)

    }

    const ChangeColorComponent = (box) => {

        setControlChange(setInterval(() =>{Colors(box)},1000))

    }

    const CancelChangeColorDClick = () => {

        clearInterval(controlChange)

    }

    


    return (
        <div className="containerComponent">
            <BoxComponent ChangeColorComponent={ChangeColorComponent} 
            CancelChangeColorLeave={CancelChangeColorLeave}
            CancelChangeColorDClick={CancelChangeColorDClick}></BoxComponent>
        </div>

    )

}

export default BoxContainer;