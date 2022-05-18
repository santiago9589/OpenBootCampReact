import React, { useReducer } from "react"
import CreateNewTask from "./createTask"
import DeleteTask from "./deleteTask"
import FilterTask from "./filterTask"
import ListTask from "./taskList"


const ADD_TASK = "ADD_TASK"
const DELETE_TASK = "DELETE_TASK"
const FILTER_TASK = "FILTER_TASK"
const CLOSE_TASK = "CLOSE_TASK"

export const TaskContex = React.createContext(null)

const Tasks = () => {

    const initState = {
        tasks: []
    }

    const TaskReducer = (state, action) => {

        switch (action.type) {
            case ADD_TASK:
                return {
                    ...state,
                    tasks: [...state.tasks, action.payload],

                };
            case DELETE_TASK:
                return {
                    ...state,
                    tasks: state.tasks.filter((element) => {
                        return element.name !== action.payload.name
                    })
                }
            case FILTER_TASK:
                return {
                    ...state,
                    tasks: state.tasks.filter((element) => {
                        return element.isCompleted === action.payload.isCompleted
                    })
                }
            case CLOSE_TASK:
                return {
                    ...state,
                    tasks: state.tasks.filter((element) => {
                        if (element.name === action.payload.name) {
                             element.isCompleted = true
                        }
                    })
                }
            default:
                return state


        }
    }

    const [state, dispatch] = useReducer(TaskReducer, initState)

    const createTask = (task) => {
        if(!task) return
        dispatch({
            type: ADD_TASK,
            payload: {
                name: task,
                isCompleted: false
            }
        })
    }

    const deleteTask = (task) => {
        if(!task) return
        dispatch({
            type: DELETE_TASK,
            payload: {
                name: task,
            }
        })


    }

    const filterTask = (stateTask) => {
        if(!stateTask) return
        dispatch({
            type: FILTER_TASK,
            payload: {
                isCompleted: stateTask
            }
        })

    }




    return (
        <div>
            <TaskContex.Provider value={{ state, createTask, deleteTask, filterTask}}>
                <CreateNewTask></CreateNewTask>
                <DeleteTask></DeleteTask>
                <FilterTask></FilterTask>
                <ListTask></ListTask>
            </TaskContex.Provider>
        </div>
    )
}

export default Tasks