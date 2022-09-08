import {connect} from "react-redux"
import { setCurrentPage } from "../../../../redux/reducers/paginator/paginator-reducer"
import {followThunk, requestUsers,  unFollowThunk} from "../../../../redux/reducers/users/users-reducer"
import { getAuthUser, getIsFetching, getIsFollowing, getUsersSelector } from "../../../../redux/selectors/user-selectors"
import { RootStateType } from "../../../../redux/store"
import Users from "./Users"




const mapStateToProps = (state: RootStateType) => {

    return {
        authUser:getAuthUser(state),
        users: getUsersSelector(state) ,
        pageSize: state.paginator.pageSize,
        isFetching: getIsFetching(state) ,
        followingInProgress: getIsFollowing(state),
        //paginator
        totalItemsCount: state.paginator.totalItemsCount,
        currentPage: state.paginator.currentPage,
        portionSize: state.paginator.portionSize,
        currentPortion: state.paginator.currentPortion,
        

    }
}


export default connect(mapStateToProps, { 
    requestUsers,
    followThunk,
    unFollowThunk,
    setCurrentPage

})(Users)