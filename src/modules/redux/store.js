import { applyMiddleware, combineReducers, createStore } from "redux";
import ThunkMiddleware from 'redux-thunk';
import dialogsReducer from "./reducers/dialogs/dialogs-reduser";
import newMessageReducer from "./reducers/dialogs/new-message-reducer";
import profileReducer from "./reducers/profile/profile-reducer.ts";
import { themeReducer } from "./reducers/theme/style-reducer";
import navMenuReducer from "./reducers/nav-menu/nav-menu-reducer";
import usersReducer from "./reducers/users/users-reducer.ts";
import authReducer from "./reducers/auth/auth-reducer.ts";
import { reducer as formReducer } from 'redux-form'
import LoginRegistrationReducer from "./reducers/login-registaration/login-registration-reducer";
import appReducer from "./reducers/app-reducer.ts";
import registrationReducer from "./reducers/auth/registration-reducer";
import preloader from "./reducers/preloader/preloader-reducer.ts";


let reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    loginRegistration: LoginRegistrationReducer,
    registration: registrationReducer,
    users: usersReducer,
    theme: themeReducer,
    navMenu: navMenuReducer,
    dialogsReducer,
    profileReducer,
    newMessageReducer,
    preloader,
    form: formReducer


});


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// const store = createStore(reducers, /* preloadedState, */ composeEnhancers(

//     applyMiddleware(ThunkMiddleware)
//   ));

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));
export default store;