import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import { taskReducer } from "../reducers/taskReducer";
import { filterReducer } from "../reducers/filterReducer"
import { userReducer } from "../reducers/userReducer"
import { watcherSaga} from "../sagas/sagas"
import createSagaMiddleware from 'redux-saga'


const sagaMiddleware = createSagaMiddleware()


export default configureStore({

    reducer: {
        taskState: taskReducer,
        filterState: filterReducer,
        userState: userReducer

    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: false,
            immutableCheck: false,
            serializableCheck: false
        }).concat(sagaMiddleware)



}, (composeWithDevTools()))

sagaMiddleware.run(watcherSaga);





