import React, { useRef } from "react"
import { useContext } from "react"
import {TaskContex} from "./tasksReducer"


const DeleteTask = () =>{

    const {deleteTask} = useContext(TaskContex)

    const input = useRef()

    return(
        <div>
             <input ref={input} type="text" placeholder="DELETE TASK"></input>
             <button onClick={()=>deleteTask(input.current.value)}>DELETE</button>
        </div>
    )

}

export default DeleteTask