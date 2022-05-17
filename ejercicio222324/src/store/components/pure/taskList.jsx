import React from "react"
import Task from "../pure/task"


const TaskList = ({tasks,onTaskClick}) =>{
    return (
        <div>
            <h1>Your Tasks</h1>
            <ul>
                {
                    tasks.map((task) =>
                        (
                            <Task key={task.id}
                             {...task} 
                             onClick = { () =>onTaskClick(task.id)}>
                             </Task>
                        )
                    )
                }
            </ul>
        </div>
    )
}

export default TaskList