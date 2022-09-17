import { Dispatch } from "react";
import { ResultCodesEnum } from "../../../services/api-laravel";
import { usersAPI } from "../../../services/users-api";
import { UserType } from "../../../types/types";
import { followUnfollow } from "../../../utils/for-rdeucers/follow-unfollow";
import { AppDispatchType, InferActionsTypes, RootStateType } from "../../store";
import { setTotalItemsCount } from "../paginator/paginator-reducer";


export type UsersActionsTypes = InferActionsTypes<typeof usersActions>
export const usersActions = {
    setUsers: (users: Array<UserType>) => ({ type: 'SET_USERS', users } as const),
    fetching: (bool: boolean) => ({ type: 'FETCHING', bool } as const),
    follow: (userId: number, authUser: UserType) => ({ type: 'FOLLOW', userId, authUser } as const),
    unFollow: (userId: number, authUser: UserType) => ({ type: 'UNFOLLOW', userId, authUser } as const),
    toggleFollowingInProgress: (userId: number, isFetching: boolean) => ({ type: 'FOLLOWING_IN_PROGRESS', userId, isFetching } as const),
    
}
// const SET_USERS = 'SET_USERS';
// const FETCHING = 'FETCHING';
// const FOLLOW = 'FOLLOW';
// const UNFOLLOW = 'UNFOLLOW';
// const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';


const initialState = {
    users: [] as Array<UserType>,
    isFetching: false as boolean,
    followingInProgress: [] as Array<number>, //array of users ids
}
export type UsersStateType = typeof initialState


// ACTION CREATORS

// export const setUsers = (users: Array<UserType>) => ({ type: SET_USERS, users })
// export const fetching = (bool: boolean) => ({ type: FETCHING, bool })
// export const follow = (userId: number, authUser: UserType) => ({ type: FOLLOW, userId, authUser })
// export const unFollow = (userId: number, authUser: UserType) => ({ type: UNFOLLOW, userId, authUser })
// export const toggleFollowingInProgress = (userId: number, isFetching: boolean) => ({ type: FOLLOWING_IN_PROGRESS, userId, isFetching })


type GetStateType = () => RootStateType
type LocalDispatchType = Dispatch<UsersActionsTypes>

//THUNKS

export const requestUsers = (currentPage: number, pageSize: number) =>
    async (dispatch: AppDispatchType, getState: GetStateType) => {

        dispatch(usersActions.fetching(true))
        let res = await usersAPI.getUsers(currentPage, pageSize)
        if (res && res.data) {
            if (res.data.resultCode === ResultCodesEnum.Success) {
                const users = res.data.users;

                dispatch(setTotalItemsCount(res.meta.total)) //from paginator reducer
                dispatch(usersActions.setUsers(users))

            } else {
                alert(res.message)
            }
            dispatch(usersActions.fetching(false))
        }


    }
export const followThunk = (userId: number, authUser: UserType) =>
    async (dispatch: LocalDispatchType, getState: GetStateType) => {

        dispatch(usersActions.toggleFollowingInProgress(userId, true))

        const res = await usersAPI.follow(userId)
        if (res.resultCode === ResultCodesEnum.Success) {
            dispatch(usersActions.follow(userId, authUser))
        } else {
            alert(res.message)
        }
        dispatch(usersActions.toggleFollowingInProgress(userId, false))
    }
export const unFollowThunk = (userId: number, authUser: UserType) =>
    async (dispatch: LocalDispatchType, getState: GetStateType) => {
        dispatch(usersActions.toggleFollowingInProgress(userId, true))

        const res = await usersAPI.unfollow(userId)
        if (res) {
            if (res.resultCode === ResultCodesEnum.Success) {
                dispatch(usersActions.unFollow(userId, authUser))
            } else {
                alert(res.message)
            }
        }
        dispatch(usersActions.toggleFollowingInProgress(userId, false))

    }

//TODO refactoring follow-unfollow-flow


//REDUCER
const usersReducer = (state: UsersStateType = initialState, action: UsersActionsTypes): UsersStateType => {
    let result = state

    switch (action.type) {
        case "SET_USERS": result = { ...state }; result.users = action.users; return result;
        case "FETCHING": result = { ...state }; result.isFetching = action.bool; return result;
        case "FOLLOW": result = { ...state }; result.users = followUnfollow(state.users, action.userId, action.authUser, true); return result;
        case "UNFOLLOW": result = { ...state }; result.users = followUnfollow(state.users, action.userId, action.authUser, false); return result;
        case "FOLLOWING_IN_PROGRESS":
            result = { ...state }
            result.followingInProgress = [...state.followingInProgress]

            action.isFetching ?
                result.followingInProgress.push(action.userId) :
                result.followingInProgress = state.followingInProgress.filter(id => id !== action.userId)

            return result


        default:
            return result

    }

}
export default usersReducer