import { connect } from "react-redux"
// import { sendNewMessage } from "../../../../../redux/reducers/dialogs/new-message-reducer"
import RouteCurrentDialog from "./Route-Current-Dialog"

const mapStateToProps = (state) => {

    return {
        dialogs: state.dialogsReducer.dialogs,
        newMessage: state.newMessage.messageBody,
        authUser: state.auth.authUser
        // users:state.users.users
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        // sendNewMessage
    }
}

export const RouteCurrentDialogContainer = connect(mapStateToProps, mapDispatchToProps)(RouteCurrentDialog)