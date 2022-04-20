import { combineReducers, createStore } from "redux";
import dialogsReducer from "./reducers/dialogs/dialogs-reduser";
import newMessageReducer from "./reducers/dialogs/new-message-reducer";
import inputNameReducer from "./reducers/login-form/input-name-reducer";
import itemsReducer from "./reducers/left-menu/items-reducer";
import currentPostReducer from "./reducers/posts/send-post-reducer";
import profileReducer from "./reducers/profile-reducer";
import { themeReducer } from "./reducers/theme/style-reducer";
import inputSurnameReducer from "./reducers/login-form/input-surname-reducer";
import inputEmailReducer from "./reducers/login-form/input-email-reducer";
import inputPasswordReducer from "./reducers/login-form/input-password-reducer";
import inputRepeatPassReducer from "./reducers/login-form/input-repeat-password-reducer";
import navMenuReducer from "./reducers/nav-menu/nav-menu-reducer";
import { currentUserReducer } from "./reducers/current-user/current-user-reducer";
import usersReducer from "./reducers/users/users-reducer";

let reducers = combineReducers({
    currentUser: currentUserReducer,
    users:usersReducer,
    theme: themeReducer,
    itemsReducer,
    navMenu:navMenuReducer,
    dialogsReducer,
    profileReducer,
    currentPost:currentPostReducer,
    newMessageReducer,
    inputName:inputNameReducer,
    inputSurname:inputSurnameReducer,
    inputEmail:inputEmailReducer,
    inputPassword:inputPasswordReducer,
    inputRepeatPass:inputRepeatPassReducer

});

let store = createStore(reducers);
export default store;