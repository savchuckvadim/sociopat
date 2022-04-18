import { connect } from "react-redux"
import { inputEmailClassActionCreator, inputEmailValueActionCreator } from "../../../../../redux/reducers/login-form/input-email-reducer"
import InputEmail from './Input-Email'

const mapStateToProps = (state) => {

    return {
        title: state.inputEmail.title,
        iconClass: state.inputEmail.currentIconClass,
        containerClass: state.inputEmail.currentContainerClass,
        value: state.inputEmail.value

    }
}
const mapDispatchToProps = (dispatch) => {

    const changeClass = () => {
        const actionClass = inputEmailClassActionCreator()
        dispatch(actionClass)
    }

    const changeValue = (value) => {
        const actionValue = inputEmailValueActionCreator(value)
        dispatch(actionValue)

    }


    return {
        changeClass,
        changeValue
    }
}

export const InputEmailContainer = connect(mapStateToProps, mapDispatchToProps)(InputEmail)