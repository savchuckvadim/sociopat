import React from "react"
import { connect } from "react-redux"
import { ActionsTypes } from "../../../../redux/reducers/users/users-reducer"
import { followThunk, usersActions,
    // toggleFollowingInProgress, 
    unFollowThunk } from "../../../../redux/reducers/users/users-reducer"
import { RootStateType } from "../../../../redux/store"
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
    toggleFollowingInProgress:  (userId: number, isFetching: boolean) => ActionsTypes
    followThunk: (userId: number, authUser: UserType) => void,
    unFollowThunk: (userId: number, authUser: UserType) => void
}
type StateWithOwnProps = FUOwnPropsType & FUMapStateToPropsType
export type FUPropsType = FUOwnPropsType & FUMapStateToPropsType & FUMapDispatchToPropsType

const mapStateToProps = (state: RootStateType, ownProps: FUOwnPropsType): StateWithOwnProps => {

    return {
        user: ownProps.user,
        followingInProgress: state.users.followingInProgress,
        authUser: state.auth.authUser
    }
}

// TODO mapstateToProps ругается - непонятная ошибка
// @ts-ignore

export default connect<FUOwnPropsType, FUMapStateToPropsType,FUMapDispatchToPropsType, RootStateType>(mapStateToProps, {

    toggleFollowingInProgress: usersActions.toggleFollowingInProgress,
    followThunk,
    unFollowThunk,

})(FollowUnfollowButtons)

