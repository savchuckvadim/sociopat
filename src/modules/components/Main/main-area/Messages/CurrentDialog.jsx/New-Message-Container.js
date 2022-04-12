import { connect } from "react-redux";
import { newMessageActionCreator } from "../../../../../redux/reducers/dialogs/new-message-reducer";
import NewMessageSendArea from "./NewMessageSendArea";


const mapStateToProps = (state) => {

    return {
        newMessageBody: state.newMessageReducer.messageBody
    }
};


const mapDispatchToProps = (dispatch) => {
    
    const changeNewMessage = (message) => {
        const action = newMessageActionCreator(message);
        dispatch(action)
    }
//onClick for button
    return {
        changeNewMessage
    }
};

export const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessageSendArea)
