import React, { useRef } from "react"
import { useContext } from "react"
import { TaskContex } from "./tasksReducer"


const FilterTask = () => {

    const { filterTask } = useContext(TaskContex)

    const input = useRef()

    return (
        <div>
            <select name="select" ref={input} onClick={() => filterTask(input.current.value)} >
                <option value="all" >all</option>
                <option value="completed">completed</option>
                <option value="pending">pending</option>
            </select>
        </div>
    )

}

export default FilterTask