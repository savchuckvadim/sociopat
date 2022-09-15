import { applyMiddleware, combineReducers, createStore } from "redux"
import ThunkMiddleware from 'redux-thunk'
import dialogsReducer from "./reducers/dialogs/dialogs-reduser"
import newMessageReducer from "./reducers/dialogs/new-message-reducer"
import profileReducer from "./reducers/profile/profile-reducer"
import { themeReducer, ThemeStateType } from "./reducers/theme/style-reducer"
import navMenuReducer from "./reducers/nav-menu/nav-menu-reducer"
import usersReducer from "./reducers/users/users-reducer"
import authReducer from "./reducers/auth/auth-reducer"
import { reducer as formReducer } from 'redux-form'
import LoginRegistrationReducer from "./reducers/login-registaration/login-registration-reducer"
import appReducer from "./reducers/app-reducer"
import preloader from "./reducers/preloader/preloader-reducer"
import paginatorReducer from "./reducers/paginator/paginator-reducer"
import { AuthStateType } from "./reducers/auth/auth-reducer"
import { AppStateType } from "./reducers/app-reducer"
import { LoginRegistrationType } from "./reducers/login-registaration/login-registration-reducer"
import { NavMenuStateType } from "./reducers/nav-menu/nav-menu-reducer"
import { PaginatorStateType } from "./reducers/paginator/paginator-reducer"
import { PreloaderStateType } from "./reducers/preloader/preloader-reducer"
import { ProfileStateType } from "./reducers/profile/profile-reducer"
import { UsersStateType } from "./reducers/users/users-reducer"


let rootReducer = combineReducers({
  app: appReducer as () => AppStateType,
  auth: authReducer as () => AuthStateType,
  loginRegistration: LoginRegistrationReducer as () => LoginRegistrationType,
  users: usersReducer as () => UsersStateType,
  theme: themeReducer as () => ThemeStateType,
  navMenu: navMenuReducer as () => NavMenuStateType,
  profile: profileReducer as () => ProfileStateType,
  preloader: preloader as () => PreloaderStateType,
  paginator: paginatorReducer as () => PaginatorStateType,
  dialogsReducer,
  newMessageReducer,
  form: formReducer


})

export type RootReducerType = typeof rootReducer
export type RootStateType = ReturnType<RootReducerType>
export type AppDispatchType = typeof store.dispatch

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any) => any }> = ReturnType<PropertiesTypes<T>>

//@ts-ignore
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

// const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(

//   applyMiddleware(ThunkMiddleware)
// ))

let store = createStore(rootReducer, applyMiddleware(ThunkMiddleware))
export default store