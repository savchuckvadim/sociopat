import { connect } from "react-redux"
import { login } from "../../../redux/reducers/auth/auth-reducer"
import { LoginFieldsType, SetErrorType } from "../../../redux/reducers/login-registaration/login-registration-reducer"
import { setError } from "../../../redux/reducers/login-registaration/login-registration-reducer"
import { AppDispatchType, RootStateType } from "../../../redux/store"
import FormCard from "./Form-Card/Form-Card"

type LoginMapStateType = {
    isAuth: boolean
    type: string
    fields: LoginFieldsType
    title: string
    instruction: string
    forgotLink: string
    footerInstruction: string
    footerLink: string
    error: string
}
type LoginMapDispatchType = {
    login: (email: string, password: string) => void
    setError:(error: string) => SetErrorType
}

export type LoginPropsType = LoginMapStateType & LoginMapDispatchType

const mapStateToProps = (state: RootStateType):LoginMapStateType => {
    const login = state.loginRegistration.login

    return {
        isAuth: state.auth.isAuth,
        type: login.type,
        fields: login.fields,
        title: login.title,
        instruction: login.instruction,
        forgotLink: login.forgotLink,
        footerInstruction: login.footerInstruction,
        footerLink: login.footerLink,
        error: state.loginRegistration.error
    }
}
const connector =  connect(mapStateToProps, {
    login,
    setError
})

export default connector(FormCard)