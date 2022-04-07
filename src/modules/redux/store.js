import { combineReducers, createStore } from "redux";
import itemsReducer from "./reducers/left-menu/items-reducer";
import profileReducer from "./reducers/profile-reducer";

let reducers = combineReducers({
    profileReducer: profileReducer,
    itemsReducer,
});
let store = createStore(reducers);
export default store;