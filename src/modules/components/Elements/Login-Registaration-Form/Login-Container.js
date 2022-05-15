import {
    connect
} from "react-redux"

import { login } from "../../../redux/reducers/auth/auth-reducer"
import { setError } from "../../../redux/reducers/login-registaration/login-registration-reducer"
import FormCard from "./Form-Card/Form-Card"

const mapStateToProps = (state) => {
    const login = state.loginRegistration.login

    return {
        isAuth: state.auth.auth.isAuth,
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

const LoginContainer = connect(mapStateToProps, {
    login,
    setError
})(FormCard)

export default LoginContainer