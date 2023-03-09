import { connect } from "react-redux"
import { setCurrentDialog } from "../../../../../redux/reducers/dialogs/dialogs-reducer"
// import { sendNewMessage } from "../../../../../redux/reducers/dialogs/new-message-reducer"
import RouteCurrentDialog from "./Route-Current-Dialog"

const mapStateToProps = (state) => {

    return {
        dialogs: state.dialogsReducer.dialogs,
        currentDialog: state.dialogsReducer.currentDialog,
        newMessage: state.newMessage.messageBody,
        authUser: state.auth.authUser
        // users:state.users.users
    }
}


export const RouteCurrentDialogContainer = connect(mapStateToProps, {
    setCurrentDialog
})(RouteCurrentDialog)