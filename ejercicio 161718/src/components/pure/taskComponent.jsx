import React from "react";
import { Task } from "../../models/models";
import propTypes from "prop-types";

const TaskComponent = ({ task,deleteTask,completeTask }) => {

    return (
        <tr>
            <th scope="row">{task.name}</th>
            <td>{task.description}</td>
            <td className="level">{task.level}</td>
            <td >{task.isCompleted ? <i className="bi bi-circle-fill">"Completed"</i>  : <i className="bi bi-circle">"Pending"</i>}</td>
            <td><i className="bi bi-trash3" onClick={()=>deleteTask(task)} style={{color: "red" }}></i><i className="bi bi-check2-circle" onClick={()=>completeTask(task)} style={{color: "green" }}></i></td>
        </tr >
    )
}

TaskComponent.propTypes = {
    task: propTypes.instanceOf(Task),
    deleteTask : propTypes.func,
    completeTask:propTypes.func,
}


export default TaskComponent;