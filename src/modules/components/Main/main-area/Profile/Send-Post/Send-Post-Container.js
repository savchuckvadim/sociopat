import { connect } from "react-redux"

import { addPostActionCreator, sendPost } from "../../../../../redux/reducers/profile/profile-reducer"

import SendPost from "./Send-Post"




const mapStateToProps = (state) => {

    return {
        user: state.auth.authUser,
        value: state.currentPost.value,
        visitedProfileId: state.profileReducer.visitedUser.id

    }
}
// const mapDispatchToProps = (dispatch) => {
//     // const change = (value) => {
//     //     const action = changeCurrentPostActionCreator(value)
//     //     dispatch(action)
//     // }

//     const send = (value)=> {
//         const action = addPostActionCreator(value) 
//         dispatch(action)
//     }
//     return {
//         // change,
//         send,
//         sendPost

//     }
// }

export const SendPostContainer = connect(mapStateToProps,
    {
        sendPost
    }
)(SendPost)