import {
    connect
} from "react-redux"
import FormCard from "./Form-Card/Form-Card"

const mapStateToProps = (state) => {
    const login = state.loginRegistration.login
    return {
        type: login.type,
        fields: login.fields,
        title: login.title,
        instruction: login.instruction,
        footerInstruction: login.footerInstruction,
        footerLink: login.footerLink
    }
}

const LoginContainer = connect(mapStateToProps)(FormCard)

export default LoginContainer