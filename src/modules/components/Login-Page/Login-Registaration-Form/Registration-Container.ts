import { connect } from "react-redux"
import { setNewUser } from "../../../redux/reducers/auth/auth-reducer"
import { FieldType } from "../../../redux/reducers/login-registaration/login-registration-reducer"
import { RootStateType } from "../../../redux/store"

import RegistrationFormCard from "./Form-Card/Registration-Form-Card"

type RegistrationMapStateType = {

    type: string
    fields: Array<FieldType>
    title: string
    instruction: string
    privacy: string
    footerInstruction: string
    footerLink: string

}
type RegistrationMapDispatchType = {
    setNewUser: (name: string, surname: string, email: string,
        password: string, password_confirmation: string) => void
}
export type RegistrationPropsType = RegistrationMapStateType & RegistrationMapDispatchType

const mapStateToProps = (state: RootStateType): RegistrationMapStateType => {
    const registration = state.loginRegistration.registration
    return {
        type: registration.type,
        fields: registration.fields,
        title: registration.title,
        instruction: registration.instruction,
        privacy: registration.privacy,
        footerInstruction: registration.footerInstruction,
        footerLink: registration.footerLink,
    }
}

const RegistrationContainer = connect(mapStateToProps, {
    setNewUser
})(RegistrationFormCard)

export default RegistrationContainer