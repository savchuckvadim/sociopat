import { connect } from "react-redux"
import { inputPasswordClassActionCreator, inputPasswordValueActionCreator } from "../../../../../redux/reducers/login-form/input-password-reducer"
import InputPassword from "./Input-Password"

const mapStateToProps = (state) => {

    return {
        title:          state.inputPassword.title,
        iconClass:      state.inputPassword.currentIconClass,
        containerClass: state.inputPassword.currentContainerClass,
        value:          state.inputPassword.value

    }
}
const mapDispatchToProps = (dispatch) => {

    const changeClass = () => {
        
        const actionClass = inputPasswordClassActionCreator()
        dispatch(actionClass)
    }

    const changeValue = (value) => {
        const actionValue = inputPasswordValueActionCreator(value)
        dispatch(actionValue)

    }


    return {
        changeClass,
        changeValue
    }
}

export const InputPasswordContainer = connect(mapStateToProps, mapDispatchToProps)(InputPassword)