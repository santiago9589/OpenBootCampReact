import { API_CALL_REQUEST, API_CALL_FAILURE, API_CALL_SUCCES } from "../actions/typeActionsAsync"

const initalState = {
    fetching: false,
    token: null,
    error: null,
    loged: false
}

export const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case API_CALL_REQUEST:
            return {
                ...state,
                fetching: true,
                error: null,
                loged: false,
                token: null
            }
        case API_CALL_SUCCES:
            return {
                ...state,
                fetching: false,
                error: null,
                loged: true,
                token: action.payload.token
            }
        case API_CALL_FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.payload.error,
                loged: false,
                token: null
            }
        default:
            return state;
    }
}