import { API_CALL_FAILURE, API_CALL_SUCCES, API_CALL_REQUEST } from "./typeActionsAsync"


export const httpRequest = (method, url, data) => {

    return {
        type: API_CALL_REQUEST,
        payload: {
            request: {
                method: method,
                url: url,
                data: data
            },
            okAction: API_CALL_SUCCES,
            failAction: API_CALL_FAILURE
        }
    }

}