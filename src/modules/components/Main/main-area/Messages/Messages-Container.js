import { useEffect } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { getDialogs } from "../../../../redux/reducers/dialogs/dialogs-reduser"
import { LightLoadingPageContainer } from "../../../Elements/Loading/Light-Loading-Page-Container"
import Messages from "./Messages"

const mapStateToProps = (state) => {

    return {
        dialogs: state.dialogsReducer.dialogs,
        currentAuthUser: state.auth.currentProfile


    }
}


const MessagesContainer = (props) => {

    useEffect(() => {
        props.getDialogs()
    }, [])
    if (props.dialogs.length > 0) {
        return <Messages {...props} />
    }
    return <LightLoadingPageContainer />
}

export default compose(
    connect(mapStateToProps, {
        getDialogs
    })
)(MessagesContainer)