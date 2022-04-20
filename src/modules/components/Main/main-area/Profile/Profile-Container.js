import { connect } from "react-redux"
import profileReducer from "../../../../redux/reducers/profile-reducer"
import Profile from "./Profile"


const mapStateToProps = (state) => {
    // debugger

    return {
        user: state.currentUser,
        posts: state.profileReducer.posts
    }
}

export const ProfileContainer = connect(mapStateToProps)(Profile)