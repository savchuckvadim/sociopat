import { connect } from "react-redux";
import RouteCurrentDialog from "./Route-Current-Dialog";

const mapStateToProps = (state) => {

    return {
        dialogs: state.dialogsReducer
    }
};
const mapDispatchToProps = (dispatch) => {

    return {

    }
};

export const RouteCurrentDialogContainer = connect(mapStateToProps, mapDispatchToProps)(RouteCurrentDialog)