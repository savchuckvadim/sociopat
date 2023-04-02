import { connect } from "react-redux"
import { sendPost } from "../../../../../redux/reducers/profile/profile-reducer"
import { AppStateType } from "../../../../../redux/store"
import SendPost from "./Send-Post"




const mapStateToProps = (state: AppStateType) => {

    return {
        user: state.auth.authUser,
        visitedUser: state.profile.visitedUser,
        isPostSending: state.profile.isPostSending

    }
}


export const SendPostContainer = connect(mapStateToProps,
    {
        sendPost
    }
)(SendPost)