// they are actions that will return a object
import {ADD_TASK,TOGGLE_TASK,SET_VISIBILITY_FILTER} from "./typeActions"

let nexTaskID = 0; // id Incremental


// to add task, that fuction will return a object.
// params text its a string

export const addTask = (text) =>{
    return{
        type : ADD_TASK,
        payload:{
            id: nexTaskID ++,
            text:text,
            completed:false
        }
    }
}

// to change task's state that function will be return a object.
// params id its a number

export const toggleTask = (id) =>{
    return{
        type : TOGGLE_TASK,
        payload:{
            id:id
        }
    }
}

// to filter task depending of his state, will be change his visibility
// params filter its a string
export const setVisibilityFilter = (filter) =>{
    return{
        type:SET_VISIBILITY_FILTER,
        payload:{
            filter:filter
        }
    }
      
}