import { applyMiddleware, combineReducers, createStore } from "redux"
import ThunkMiddleware from 'redux-thunk'
import dialogsReducer from "./reducers/dialogs/dialogs-reduser"
import newMessageReducer from "./reducers/dialogs/new-message-reducer"
import profileReducer from "./reducers/profile/profile-reducer.ts"
import { themeReducer } from "./reducers/theme/style-reducer"
import navMenuReducer from "./reducers/nav-menu/nav-menu-reducer"
import usersReducer from "./reducers/users/users-reducer.ts"
import authReducer from "./reducers/auth/auth-reducer.ts"
import { reducer as formReducer } from 'redux-form'
import LoginRegistrationReducer from "./reducers/login-registaration/login-registration-reducer.ts"
import appReducer from "./reducers/app-reducer.ts"
import registrationReducer from "./reducers/auth/registration-reducer"
import preloader from "./reducers/preloader/preloader-reducer.ts"
import paginatorReducer from "./reducers/paginator/paginator-reducer.ts"
import { AuthStateType } from "./reducers/auth/auth-reducer"
import { AppStateType } from "./reducers/app-reducer"
import { LoginRegistrationType } from "./reducers/login-registaration/login-registration-reducer"


let rootReducer = combineReducers({
  app: appReducer as () => AppStateType,
  auth: authReducer as () => AuthStateType,
  loginRegistration: LoginRegistrationReducer as () => LoginRegistrationType,
  registration: registrationReducer,
  users: usersReducer,
  theme: themeReducer,
  navMenu: navMenuReducer,
  dialogsReducer,
  profileReducer,
  newMessageReducer,
  preloader,
  paginator: paginatorReducer,
  form: formReducer


})

export type RootReducerType = typeof rootReducer
export type RootStateType = ReturnType<RootReducerType>
export type AppDispatchType = typeof store.dispatch

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(

  applyMiddleware(ThunkMiddleware)
))

// let store = createStore(rootReducer, applyMiddleware(ThunkMiddleware))
export default store