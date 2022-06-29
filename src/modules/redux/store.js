import { applyMiddleware, combineReducers, createStore } from "redux";
import ThunkMiddleware from 'redux-thunk';

import dialogsReducer from "./reducers/dialogs/dialogs-reduser";
import newMessageReducer from "./reducers/dialogs/new-message-reducer";
import currentPostReducer from "./reducers/posts/send-post-reducer";
import profileReducer from "./reducers/profile/profile-reducer";
import { themeReducer } from "./reducers/theme/style-reducer";
import navMenuReducer from "./reducers/nav-menu/nav-menu-reducer";
import usersReducer from "./reducers/users/users-reducer";
import authReducer from "./reducers/auth/auth-reducer";
import { reducer as formReducer } from 'redux-form'
import LoginRegistrationReducer from "./reducers/login-registaration/login-registration-reducer";
import appReducer from "./reducers/app-reducer";

let reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    loginRegistration: LoginRegistrationReducer,
    // currentUser: currentUserReducer,
    users: usersReducer,
    theme: themeReducer,
    navMenu: navMenuReducer,
    dialogsReducer,
    profileReducer,
    currentPost: currentPostReducer,
    newMessageReducer,
    form: formReducer


});


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// const store = createStore(reducers, /* preloadedState, */ composeEnhancers(

//     applyMiddleware(ThunkMiddleware)
//   ));

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));
export default store;