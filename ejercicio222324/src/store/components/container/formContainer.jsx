import { connect } from "react-redux"
import taskForm from "../pure/taskForm"
import {addTask} from "../../actions/actions"




const mapStateToProps = (state) => {
    //empyt

}

//PROP SUBMIT
const mapDispatchToProps = (dispatch) => {
    return {
        submit : (text) =>{
            dispatch(addTask(text))
        } 
    }
}

// we connect the props's taskList with the functions
const FormTaskContainer = connect(mapStateToProps,mapDispatchToProps)(taskForm);

export default FormTaskContainer