import React from "react"
import { connect } from "react-redux"
import { setCurrentPage, SetCurrentPageType } from "../../../../redux/reducers/paginator/paginator-reducer"
import { followThunk, requestUsers, toggleFollowingInProgress, ToggleFollowingInProgressType, unFollowThunk } from "../../../../redux/reducers/users/users-reducer"
import { getAuthUser, getIsFetching, getIsFollowing, getUsersSelector } from "../../../../redux/selectors/user-selectors"
import { AppDispatchType, RootStateType } from "../../../../redux/store"
import { UserType } from "../../../../types/types"
import Users from "./Users"

type MapStateToPropsType = {
    authUser: UserType
    users: Array<UserType>
    pageSize: number
    isFetching: boolean
    followingInProgress: Array<number>
    totalItemsCount: number
    currentPage: number
    portionSize: number
    currentPortion: number
}
type MapDispatchToPropsType = {
    requestUsers: (currentPage: number, pageSize: number) => void
    followThunk: (userId: number, authUser: UserType) => void,
    unFollowThunk: (userId: number, authUser: UserType) => void
    setCurrentPage: (page: number, portion: number) => SetCurrentPageType
    toggleFollowingInProgress: (userId: number, isFetching: boolean) => ToggleFollowingInProgressType
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {

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

const connector = connect(mapStateToProps, {
    requestUsers,
    followThunk,
    unFollowThunk,
    setCurrentPage,
    toggleFollowingInProgress

})
// export type PropsFromRedux = typeof connector

export default connector(Users)