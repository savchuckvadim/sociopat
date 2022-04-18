import { connect } from "react-redux"
import { inputSurnameClassActionCreator, inputSurnameValueActionCreator } from "../../../../../redux/reducers/login-form/input-surname-reducer"
import InputSurname from './Input-Surname'

const mapStateToProps = (state) => {

    return {
        title: state.inputSurname.title,
        iconClass: state.inputSurname.currentIconClass,
        containerClass: state.inputSurname.currentContainerClass,
        value: state.inputSurname.value

    }
}
const mapDispatchToProps = (dispatch) => {
    
    const changeClass = () => {
        const actionClass = inputSurnameClassActionCreator()
        dispatch(actionClass)
    }

    const changeValue = (value) => {
        const actionValue = inputSurnameValueActionCreator(value)
        dispatch(actionValue)
        
    }
   

    return {
        changeClass,
        changeValue
    }
}

export const InputSurnameContainer = connect(mapStateToProps, mapDispatchToProps)(InputSurname)