import {
    connect
} from "react-redux"
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

const RegistrationContainer = connect(mapStateToProps)(FormCard)

export default RegistrationContainer