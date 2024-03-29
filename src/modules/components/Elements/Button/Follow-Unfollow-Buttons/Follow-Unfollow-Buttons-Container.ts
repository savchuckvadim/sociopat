// import React from "react"
import { connect } from "react-redux"
import { UsersActionsTypes } from "../../../../redux/reducers/users/users-reducer"
import { followThunk, usersActions,
    // toggleFollowingInProgress, 
    unFollowThunk } from "../../../../redux/reducers/users/users-reducer"
import { AppStateType } from "../../../../redux/store"
import { UserType } from "../../../../types/types"
import FollowUnfollowButtons from "./Follow-Unfollow-Buttons"

 type FUOwnPropsType = {
    user: UserType
}
 type FUMapStateToPropsType = {
    followingInProgress: Array<number>
    authUser: UserType | null
}
type FUMapDispatchToPropsType = {
    toggleFollowingInProgress:  (userId: number, isFetching: boolean) => UsersActionsTypes
    followThunk: (userId: number, authUser: UserType) => void,
    unFollowThunk: (userId: number, authUser: UserType) => void
}
type StateWithOwnProps = FUOwnPropsType & FUMapStateToPropsType
export type FUPropsType = FUOwnPropsType & FUMapStateToPropsType & FUMapDispatchToPropsType

const mapStateToProps = (state: AppStateType, ownProps: FUOwnPropsType): StateWithOwnProps => {

    return {
        user: ownProps.user,
        followingInProgress: state.users.followingInProgress,
        authUser: state.auth.authUser
    }
}

// TODO mapstateToProps ругается - непонятная ошибка
// @ts-ignore

export default connect<FUOwnPropsType, FUMapStateToPropsType,FUMapDispatchToPropsType, AppStateType>(mapStateToProps, {

    toggleFollowingInProgress: usersActions.toggleFollowingInProgress,
    followThunk,
    unFollowThunk,

})(FollowUnfollowButtons)

