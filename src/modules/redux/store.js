import { combineReducers, createStore } from "redux";
import profileReducer from "./reducers/profile-reducer";

let reducers = combineReducers({
    profileReducer: profileReducer
});
let store = createStore(reducers);
export default store;