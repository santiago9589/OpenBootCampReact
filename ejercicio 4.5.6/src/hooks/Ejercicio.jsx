import React, { useEffect, useState } from "react"




const ClockComponent = () => {

    const valorIniciales = {
        fecha : new Date(),
        edad : 0,
        nombre : "Martín",
        apellidos : "Jose"
    }
 

    const [data, setData] = useState(valorIniciales)

    const tick = () => {
           
        setData({...data,
            edad: data.edad + 1,
            fecha: new Date()
        })
    }

    useEffect(() => {

        const timerID = setInterval(() => {

            tick()

        }, 1000);

        return () => {
            clearInterval (timerID);
            console.log("murio")
        }
    },)

    return (
        <div>
        <h2>
        Hora Actual:
        {data.fecha.toLocaleTimeString()}
        </h2>
        <h3>{data.nombre} {data.apellidos}</h3>
        <h1>Edad: {data.edad}</h1>
        </div>
     )

}

export default ClockComponent


/*
import React, { Component } from 'react'


class Clock extends Component {
   constructor(props) {
      super(props);
      // Estado privado del component
      this.state = {
         // Se genera una fecha como estado inicial del componente
         fecha: new Date(),
         edad: 0,
         nombre: "Martin",
         apellidos: "San Jose"
      };
   }
   componentDidMount(){
      this.timerID = setInterval (
         () => this.tick(), 1000
      );
   }
   componentWillUnmount() {
      clearInterval (this.timerID);
   }
   render() {
      return (
         <div>
         <h2>
         Hora Actual:
         {this.state.fecha.toLocaleTimeString()}
         </h2>
         <h3>{this.state.nombre} {this.state.apellidos}</h3>
         <h1>Edad: {this.state.edad}</h1>
         </div>
      )
   }
   tick(){
      this.setState((prevState) => {
         let edad = prevState.edad +1;
         return {
            ...prevState,
            fecha: new Date(),
            edad
         }
      });
   }
}
export default Clock;

*/