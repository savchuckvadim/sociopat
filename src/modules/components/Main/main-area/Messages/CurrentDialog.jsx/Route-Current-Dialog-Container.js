import { connect } from "react-redux";
import RouteCurrentDialog from "./Route-Current-Dialog";

const mapStateToProps = (state) => {
   
    return {
        dialogs: state.dialogsReducer,
        users:state.users[0]
    }
};
const mapDispatchToProps = (dispatch) => {

    return {

    }
};

export const RouteCurrentDialogContainer = connect(mapStateToProps, mapDispatchToProps)(RouteCurrentDialog)