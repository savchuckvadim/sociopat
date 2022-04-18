import { connect } from "react-redux"
import { inputNameClassActionCreator, inputNameValueActionCreator } from "../../../../../redux/reducers/login-form/input-name-reducer"
import InputName from './Input-Name'

const mapStateToProps = (state) => {

    return {
        title: state.inputName.title,
        iconClass: state.inputName.currentIconClass,
        containerClass: state.inputName.currentContainerClass,
        value: state.inputName.value

    }
}
const mapDispatchToProps = (dispatch) => {
    
    const changeClass = () => {
        const actionClass = inputNameClassActionCreator()
        dispatch(actionClass)
    }

    const changeValue = (value) => {
        const actionValue = inputNameValueActionCreator(value)
        dispatch(actionValue)
        
    }
   

    return {
        changeClass,
        changeValue
    }
}

export const InputNameContainer = connect(mapStateToProps, mapDispatchToProps)(InputName)