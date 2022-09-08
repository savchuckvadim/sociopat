import {connect} from "react-redux"
import {fetching, followThunk, requestUsers, setTotalUsersCount, setUsers, toggleFollowingInProgress, unFollowThunk} from "../../../../redux/reducers/users/users-reducer.ts"
import { getAuthUser, getIsFetching, getIsFollowing, getUsersSelector } from "../../../../redux/selectors/user-selectors"
import Users from "./Users"




const mapStateToProps = (state) => {

    return {
        authUser:getAuthUser(state),
        users: getUsersSelector(state) ,
        // pageSize: getPageSize(state),
        // totalUsersCount: getTotalUsersCount(state),
        // currentPage: getPage(state) ,
        pageSize: state.paginator.pageSize,
        totalItemsCount: state.paginator.totalItemsCount,
        currentPage: state.paginator.currentPage,
        portionSize: state.paginator.portionSize,
        // count: getCount(state) ,
        isFetching: getIsFetching(state) ,
        followingInProgress: getIsFollowing(state),
        

    }
}


export default connect(mapStateToProps, {
    // setCurrentPage,
    setUsers,
    // setTotalUsersCount,
    fetching,
    toggleFollowingInProgress,
    requestUsers,
    followThunk,
    unFollowThunk,
  

})(Users)