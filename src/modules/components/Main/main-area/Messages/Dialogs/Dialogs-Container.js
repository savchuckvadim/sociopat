import { connect } from "react-redux"
import Dialogs from "./Dialogs"



const mapStateToProps = (state) => {

    return {
        dialogs: state.dialogsReducer
    }
}
const mapDispatchToProps = (dispatch) => {

    return {

    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)