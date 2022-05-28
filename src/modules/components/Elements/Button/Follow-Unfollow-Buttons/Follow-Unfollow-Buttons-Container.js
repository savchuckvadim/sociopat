import {
    connect
} from "react-redux"
import {
    followThunk,
    toggleFollowingInProgress,
    unFollowThunk
} from "../../../../redux/reducers/users/users-reducer"
import { getIsFollowing } from "../../../../redux/selectors/user-selectors"
import FollowUnfollowButtons from "./Follow-Unfollow-Buttons"





const mapStateToProps = (state, ) => {
    
  
    return {

        followingInProgress: getIsFollowing(state),
        user: state.users.currentUser
    }
}



const FollowUnfollowButtonsContainer = connect(mapStateToProps, {

    toggleFollowingInProgress,
    followThunk,
    unFollowThunk,

})(FollowUnfollowButtons)

export default FollowUnfollowButtonsContainer