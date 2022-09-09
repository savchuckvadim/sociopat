import { connect } from "react-redux"
import { sendPost } from "../../../../../redux/reducers/profile/profile-reducer"
import { RootStateType } from "../../../../../redux/store"
import SendPost from "./Send-Post"




const mapStateToProps = (state: RootStateType) => {

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