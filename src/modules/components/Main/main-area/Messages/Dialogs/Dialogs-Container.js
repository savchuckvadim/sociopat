import { useEffect } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { getDialogs } from "../../../../../redux/reducers/dialogs/dialogs-reducer"
import { LightLoadingPageContainer } from "../../../../Elements/Loading/Light-Loading-Page-Container"
import LoadingPage from "../../../../Elements/Loading/Loading-Page"
import Dialogs from "./Dialogs"
import noMessage from '../../../../../../assets/imgs/dialogs/no-messages.svg'

const mapStateToProps = (state) => {

    return {
        dialogs: state.dialogsReducer.dialogs,
        user: state.auth.authUser,

    }
}


const DialogsContainer = (props) => {

    if (props.dialogs.length > 0) {
        
        return <Dialogs {...props} />
    } else {
        return <img src={noMessage} alt="no-messages-icon" />
    }


}

export default compose(
    connect(mapStateToProps, {
        getDialogs
    })
)(DialogsContainer)