import { combineReducers, createStore } from "redux";
import dialogsReducer from "./reducers/dialogs/dialogs-reduser";
import itemsReducer from "./reducers/left-menu/items-reducer";
import profileReducer from "./reducers/profile-reducer";

let reducers = combineReducers({
    profileReducer,
    itemsReducer,
    dialogsReducer
});
let store = createStore(reducers);
export default store;