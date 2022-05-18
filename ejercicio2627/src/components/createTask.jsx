import React, { useRef } from "react"
import { useContext } from "react"
import {TaskContex} from "./tasksReducer"


const CreateNewTask = () =>{

    const {createTask} = useContext(TaskContex)

    const input = useRef()

    return(
        <div>
             <input ref={input} type="text" placeholder="name's task"></input>
             <button onClick={()=>createTask(input.current.value)}>CREATE</button>
        </div>
    )

}

export default CreateNewTask