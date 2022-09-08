import {connect} from "react-redux"
import { setCurrentPage } from "../../../../redux/reducers/paginator/paginator-reducer.ts"
import {followThunk, requestUsers,  unFollowThunk} from "../../../../redux/reducers/users/users-reducer.ts"
import { getAuthUser, getIsFetching, getIsFollowing, getUsersSelector } from "../../../../redux/selectors/user-selectors"
import Users from "./Users.tsx"




const mapStateToProps = (state) => {

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