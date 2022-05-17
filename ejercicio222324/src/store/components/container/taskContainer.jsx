
import { connect } from "react-redux"
import TaskList from "../pure/taskList"
import {toggleTask} from "../../actions/actions"


// function filter tasks

const filterTask = (tasks, filter) => {
    switch (filter) {
        case "SHOW_ALL":

            return tasks;

        case "SHOW_ACTIVE":

            return tasks.filter((task) => !task.completed);

        case "SHOW_COMPLETED":

            return tasks.filter((task) => task.completed);
        default:

            return tasks;
    }
}

// PROP TASKS 
const mapStateToProps = (state) => {
    return {
        tasks: filterTask(state.taskState,state.filterState)
    }

}

//PROP ONTASKCLICK
const mapDispatchToProps = (dispatch) => {
    return {
        onTaskClick : (id) =>{
            dispatch(toggleTask(id))
        }
    }
}

// we connect the props's taskList with the functions
const TaskContainer = connect(mapStateToProps,mapDispatchToProps)(TaskList);

export default TaskContainer