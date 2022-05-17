import { connect } from "react-redux"
import FilterOne from "../pure/filter"
import {setVisibilityFilter} from "../../actions/actions"



// PROP TASKS 
const mapStateToProps = (state,ownProps) => {
    return {
        active : ownProps.filter === state.filterState
    }

}

//PROP ONTASKCLICK
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
            onClick :() =>{
                dispatch(setVisibilityFilter(ownProps.filter))
            }
    }
}

// we connect the props's fitlerone with the functions
const FilterContainer = connect(mapStateToProps,mapDispatchToProps)(FilterOne);

export default FilterContainer