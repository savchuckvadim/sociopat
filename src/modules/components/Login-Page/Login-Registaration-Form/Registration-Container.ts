import { connect } from "react-redux"
import { setNewUser } from "../../../redux/reducers/auth/auth-reducer"
import { RegistrationFieldsType } from "../../../redux/reducers/login-registaration/login-registration-reducer"
import { RootStateType } from "../../../redux/store"
import FormCard from "./Form-Card/Form-Card"

type RegistrationMapStateType = {

    type: string
    fields: RegistrationFieldsType
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
})(FormCard)

export default RegistrationContainer