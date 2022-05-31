import { useEffect } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { getDialogs } from "../../../../../redux/reducers/dialogs/dialogs-reduser";
import { LightLoadingPageContainer } from "../../../../Elements/Loading/Light-Loading-Page-Container";
import LoadingPage from "../../../../Elements/Loading/Loading-Page";
import Dialogs from "./Dialogs"

const mapStateToProps = (state) => {

    return {
        dialogs: state.dialogsReducer.dialogs,
        user: state.users[0],

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