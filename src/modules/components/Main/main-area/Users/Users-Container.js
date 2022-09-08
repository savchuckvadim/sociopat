import {connect} from "react-redux"
import { setCurrentPage } from "../../../../redux/reducers/paginator/paginator-reducer"
import {fetching, followThunk, requestUsers, setUsers, toggleFollowingInProgress, unFollowThunk} from "../../../../redux/reducers/users/users-reducer.ts"
import { getAuthUser, getIsFetching, getIsFollowing, getUsersSelector } from "../../../../redux/selectors/user-selectors"
import Users from "./Users"




const mapStateToProps = (state) => {

    return {
        authUser:getAuthUser(state),
        users: getUsersSelector(state) ,
        pageSize: state.paginator.pageSize,
        totalItemsCount: state.paginator.totalItemsCount,
        currentPage: state.paginator.currentPage,
        portionSize: state.paginator.portionSize,
        currentPortion: state.paginator.currentPortion,
        isFetching: getIsFetching(state) ,
        followingInProgress: getIsFollowing(state),
        

    }
}


export default connect(mapStateToProps, {
    setUsers,
    fetching,
    toggleFollowingInProgress,
    requestUsers,
    followThunk,
    unFollowThunk,
    setCurrentPage
  

})(Users)