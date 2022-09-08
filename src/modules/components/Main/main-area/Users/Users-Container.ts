import { connect } from "react-redux"
import { setCurrentPage, SetCurrentPageType } from "../../../../redux/reducers/paginator/paginator-reducer"
import { followThunk, requestUsers, unFollowThunk } from "../../../../redux/reducers/users/users-reducer"
import { getAuthUser, getIsFetching, getIsFollowing, getUsersSelector } from "../../../../redux/selectors/user-selectors"
import { AppDispatchType, RootStateType } from "../../../../redux/store"
import { UserType } from "../../../../types/types"
import Users from "./Users"

interface MapStateToPropsType {
    authUser: UserType | null
    users: Array<UserType>
    pageSize: number
    isFetching: boolean
    followingInProgress: Array<number>

    totalItemsCount: number
    currentPage: number
    portionSize: number
    currentPortion: number
}
interface MapDispatchToPropsType {
    requestUsers: (currentPage: number, pageSize: number) => void
    followThunk: (userId: number, authUser: UserType) => void,
    unFollowThunk: (userId: number, authUser: UserType) => void
    setCurrentPage: (page: number, portion: number) => SetCurrentPageType
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType) => {

    return {
        authUser: getAuthUser(state),
        users: getUsersSelector(state),
        pageSize: state.paginator.pageSize,
        isFetching: getIsFetching(state),
        followingInProgress: getIsFollowing(state),
        //paginator
        totalItemsCount: state.paginator.totalItemsCount,
        currentPage: state.paginator.currentPage,
        portionSize: state.paginator.portionSize,
        currentPortion: state.paginator.currentPortion,


    }
}

// Typical usage: `connect` is called after the component is defined

export default connect<MapStateToPropsType, MapDispatchToPropsType>(mapStateToProps, {
    requestUsers,
    followThunk,
    unFollowThunk,
    setCurrentPage
 
})(Users)