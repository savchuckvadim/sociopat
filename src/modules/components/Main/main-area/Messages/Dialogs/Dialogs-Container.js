import { connect } from "react-redux"
import { compose } from "redux"
import { getDialogs } from "../../../../../redux/reducers/dialogs/dialogs-reducer"
import Dialogs from "./Dialogs"
import noMessage from '../../../../../../assets/imgs/dialogs/no-messages.svg'

const mapStateToProps = (state) => {
    
    return {
        dialogs: state.dialogsReducer.dialogs,
        user: state.auth.authUser,
        online: state.users.online
    }
}


const DialogsContainer = (props) => {

    // if (props.dialogs.length > 0) {
        
        return <Dialogs {...props} />
    // } else {
    //     return <img src={noMessage} alt="no-messages-icon" />
    // }


}

export default compose(
    connect(mapStateToProps, {
        getDialogs
    })
)(DialogsContainer)