import { connect } from "react-redux";
import { sendNewMessage } from "../../../../../redux/reducers/dialogs/new-message-reducer";
import RouteCurrentDialog from "./Route-Current-Dialog";

const mapStateToProps = (state) => {

    return {
        dialogs: state.dialogsReducer.dialogs,
        newMessage: state.newMessage
        // users:state.users.users
    }
};
const mapDispatchToProps = (dispatch) => {

    return {
        sendNewMessage
    }
};

export const RouteCurrentDialogContainer = connect(mapStateToProps, mapDispatchToProps)(RouteCurrentDialog)