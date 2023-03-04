import { connect } from "react-redux"
import { sendPost } from "../../../../../redux/reducers/profile/profile-reducer"
import { AppStateType } from "../../../../../redux/store"
import SendPost from "./Send-Post"




const mapStateToProps = (state: AppStateType) => {

    return {
        user: state.auth.authUser,
        visitedUser: state.profile.visitedUser

    }
}


export const SendPostContainer = connect(mapStateToProps,
    {
        sendPost
    }
)(SendPost)