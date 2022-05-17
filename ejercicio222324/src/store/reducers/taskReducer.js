import { ADD_TASK, TOGGLE_TASK} from "../actions/typeActions"

// initial taskState

// initialy task is empty

let initialState = [];

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:

           return[
               ...state,
               {
                   id:action.payload.id,
                   text:action.payload.text,
                   completed:false
               }

           ]

        case TOGGLE_TASK:

            return state.map((task)=>
                (task.id === action.payload.id)
                ?
                {
                    ...task,
                    completed:!task.completed
                }
                :
                task
            )               
        default:
            return state;
    }
}