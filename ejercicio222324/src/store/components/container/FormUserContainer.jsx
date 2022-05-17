import { connect } from "react-redux"
import  {httpRequest} from "../../actions/actionsAsync"
import FormUser from "../pure/FormUser"



// PROP loged
const mapStateToProps = (state) => {
    return {
        loged : state.userState.loged
    }

}

//PROP onLogin
const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (password,email) =>{
            let data = {
                password : password,
                email : email
            }

            let url = "https://reqres.in/api/login"

            dispatch(httpRequest("POST",url,data))

        }  
    }
}

// we connect the props's fitlerone with the functions
const FormUserContainer = connect(mapStateToProps,mapDispatchToProps)(FormUser);

export default FormUserContainer