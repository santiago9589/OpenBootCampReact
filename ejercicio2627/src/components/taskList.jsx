import React from "react";
import { useRef } from "react";
import { useContext } from "react"
import { TaskContex } from "./tasksReducer"




const ListTask = () => {


    const { state } = useContext(TaskContex)
    const data = state.tasks

    return (
        <div>
            <table>
                <tbody>
                    {
                        data.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        Tarea: {element.name} Estado :{element.isCompleted ? "Completed" : "Pending"}
                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}


export default ListTask