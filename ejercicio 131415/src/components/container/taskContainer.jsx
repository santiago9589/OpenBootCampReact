import React, { useState } from "react";
import { Task } from "../../models/models";
import { STATUS } from "../../models/levels.enum"
import TaskComponent from "../pure/taskComponent";
import FormTask from "../pure/formTask";

const TaskContainer = () => {

    const createTasksDefault = (quantity) => {

        let tasksDefault = [];

        for (let i = 0; i < quantity; i++) {

            let taskDefault = new Task(`TEST${i}`, `Task${i}`, `${STATUS.NORMAL}`, false)

            tasksDefault.push(taskDefault);
        }

        return tasksDefault;

    }


    const [tasks, setTaks] = useState(createTasksDefault(4))

    const createTask = (task) => {

        let taskCopied = [...tasks];
        taskCopied.push(task.name)
        setTaks(taskCopied)

    }

    const deleteTask = (task) => {

        let taskIndex = tasks.indexOf(task)
        let taskCopied = [...tasks];
        taskCopied.splice(taskCopied[taskIndex], 1)
        setTaks(taskCopied)

    }

    const completeTask = (task) => {

        let taskIndex = tasks.indexOf(task)
        let taskCopied = [...tasks];
        let taskUpdate = taskCopied[taskIndex];
        taskUpdate.isCompleted = !taskUpdate.isCompleted
        setTaks(taskCopied)

    }




    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Status</th>
                        <th scope="col">Completed</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((element, index) => {
                            return (
                                <TaskComponent task={element} key={index}
                                    completeTask={completeTask} deleteTask={deleteTask}></TaskComponent>
                            )
                        })
                    }
                </tbody>
            </table>
            <div>
                <FormTask createTask={createTask}></FormTask>
            </div>

        </div>



    )
}

export default TaskContainer;