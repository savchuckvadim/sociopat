import { useEffect } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { getDialogs, setCurrentDialog } from "../../../../redux/reducers/dialogs/dialogs-reducer"
import { LightLoadingPageContainer } from "../../../Elements/Loading/Light-Loading-Page-Container"
import Messages from "./Messages"

const mapStateToProps = (state) => {

    return {
        dialogs: state.dialogsReducer.dialogs,
        currentDialog: state.dialogsReducer.currentDialog,
        authUser: state.auth.authUser.profile,
        inProgress: state.preloader.global.inProgress


    }
}


const MessagesContainer = (props) => {

    // useEffect(() => {
    //     debugger
    //     props.getDialogs()
    // }, [])
    if (!props.inProgress) {
        
        return <Messages {...props} />
    }
    
    return <LightLoadingPageContainer />
}

export default compose(
    connect(mapStateToProps, {
        getDialogs,
        setCurrentDialog
    })
)(MessagesContainer)