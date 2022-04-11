import { combineReducers, createStore } from "redux";
import dialogsReducer from "./reducers/dialogs/dialogs-reduser";
import itemsReducer from "./reducers/left-menu/items-reducer";
import changeCurrentPostReducer from "./reducers/posts/send-post-reducer";
import profileReducer from "./reducers/profile-reducer";

let reducers = combineReducers({
    itemsReducer,
    dialogsReducer,
    profileReducer,
    changeCurrentPostReducer
});

let store = createStore(reducers);
export default store;