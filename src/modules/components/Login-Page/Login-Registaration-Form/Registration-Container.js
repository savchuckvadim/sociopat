import {
    connect
} from "react-redux"
import { setNewUser } from "../../../redux/reducers/auth/registration-reducer"
import FormCard from "./Form-Card/Form-Card"

const mapStateToProps = (state) => {
    const registration = state.loginRegistration.registration
    return {
        type: registration.type,
        fields: registration.fields,
        title: registration.title,
        instruction: registration.instruction,
        privacy: registration.privacy,
        footerInstruction: registration.footerInstruction,
        footerLink: registration.footerLink
    }
}

const RegistrationContainer = connect(mapStateToProps,{
    setNewUser
})(FormCard)

export default RegistrationContainer