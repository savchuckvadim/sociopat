import { connect } from "react-redux"
import Dialogs from "./Dialogs"



const mapStateToProps = (state) => {

    return {
        state: state.dialogsReducer
    }
}
const mapDispatchToProps = (dispatch) => {

    return {

    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)