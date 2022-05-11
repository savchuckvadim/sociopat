import { connect } from "react-redux"
import { changeCurrentPostActionCreator } from "../../../../../redux/reducers/posts/send-post-reducer"
import { addPostActionCreator } from "../../../../../redux/reducers/profile-reducer"

import SendPost from "./Send-Post"




const mapStateToProps = (state) => {

    return {
        user: state.currentUser,
        value: state.currentPost.value
    }
}
const mapDispatchToProps = (dispatch) => {
    const change = (value) => {
        const action = changeCurrentPostActionCreator(value)
        dispatch(action)
    }

    const send = (value)=> {
        const action = addPostActionCreator(value) 
        dispatch(action)
    }
    return {
        change,
        send
    }
}

export const SendPostContainer = connect(mapStateToProps, mapDispatchToProps)(SendPost)