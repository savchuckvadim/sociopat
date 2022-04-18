import { connect } from "react-redux"
import { inputRepeatPassClassActionCreator, inputRepeatPassValueActionCreator } from "../../../../../redux/reducers/login-form/input-repeat-password-reducer"
import InputRepeatPass from "./Input-RepeatPass"

const mapStateToProps = (state) => {

    return {
        title:          state.inputRepeatPass.title,
        iconClass:      state.inputRepeatPass.currentIconClass,
        containerClass: state.inputRepeatPass.currentContainerClass,
        value:          state.inputRepeatPass.value

    }
}
const mapDispatchToProps = (dispatch) => {

    const changeClass = () => {
        
        const actionClass = inputRepeatPassClassActionCreator()
        dispatch(actionClass)
    }

    const changeValue = (value) => {
        const actionValue = inputRepeatPassValueActionCreator(value)
        dispatch(actionValue)

    }


    return {
        changeClass,
        changeValue
    }
}

export const InputRepeatPassContainer = connect(mapStateToProps, mapDispatchToProps)(InputRepeatPass)