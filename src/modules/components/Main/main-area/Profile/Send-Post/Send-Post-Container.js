import { connect } from "react-redux"
import {  sendPost } from "../../../../../redux/reducers/profile/profile-reducer.ts"
import SendPost from "./Send-Post"




const mapStateToProps = (state) => {

    return {
        user: state.auth.authUser,
        visitedProfileId: state.profileReducer.visitedUser.id

    }
}


export const SendPostContainer = connect(mapStateToProps,
    {
        sendPost
    }
)(SendPost)