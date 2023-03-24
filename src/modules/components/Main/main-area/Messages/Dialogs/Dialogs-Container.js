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
    return <Dialogs {...props} />
}

export default compose(
    connect(mapStateToProps, {
        getDialogs
    })
)(DialogsContainer)