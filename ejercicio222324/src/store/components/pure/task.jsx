import React from "react"

const Task = (({ onClick, id, text, completed }) => {

    return (
        <li onClick={onClick}
            style={
                {
                    textDecoration: completed ? "line-though" : "none",
                    textDecorationColor: completed ? "green" : "none",
                    color: completed ? "green" : "none",
                }

            }>

            ID : {id} Nombre de Tarea : {text}

        </li>
    )
})

export default Task;