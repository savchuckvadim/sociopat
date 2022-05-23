import {
    connect
} from "react-redux"
import {
    fetching,

    followThunk,
    requestUsers,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingInProgress,

    unFollowThunk
} from "../../../../redux/reducers/users/users-reducer"
import { getCount, getIsFetching, getIsFollowing, getPage, getPageSize, getTotalUsersCount, getUsers, getUsersSelector } from "../../../../redux/selectors/user-selectors"

import UsersContainer from "./Users-API-Container"



const mapStateToProps = (state) => {

    return {
        users: getUsersSelector(state) ,
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getPage(state) ,
        count: getCount(state) ,
        isFetching: getIsFetching(state) ,
        followingInProgress: getIsFollowing(state)

    }
}


export default connect(mapStateToProps, {
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    fetching,
    // follow,
    // unFollow,
    toggleFollowingInProgress,
    requestUsers,
    followThunk,
    unFollowThunk

})(UsersContainer)