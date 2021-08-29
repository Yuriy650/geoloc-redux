import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {addIpReducer} from "./redux/reducers/add-ip-reducer";
import {getIpDataReducer} from "./redux/reducers/get-ip-data-reducer";

const reducer = combineReducers({
    addIpReducer,
    getIpDataReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;
