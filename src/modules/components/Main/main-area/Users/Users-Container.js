import {connect} from "react-redux"
import {fetching, followThunk, requestUsers, setCurrentPage, setTotalUsersCount, setUsers, toggleFollowingInProgress, unFollowThunk} from "../../../../redux/reducers/users/users-reducer.ts"
import { getAuthUser, getCount, getIsFetching, getIsFollowing, getPage, getPageSize, getTotalUsersCount, getUsersSelector } from "../../../../redux/selectors/user-selectors"
import Users from "./Users"




const mapStateToProps = (state) => {

    return {
        authUser:getAuthUser(state),
        users: getUsersSelector(state) ,
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getPage(state) ,
        // count: getCount(state) ,
        isFetching: getIsFetching(state) ,
        followingInProgress: getIsFollowing(state),
        

    }
}


export default connect(mapStateToProps, {
    // setCurrentPage,
    setUsers,
    setTotalUsersCount,
    fetching,
    toggleFollowingInProgress,
    requestUsers,
    followThunk,
    unFollowThunk,
  

})(Users)