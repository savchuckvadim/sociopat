import { Dispatch } from "react";
import { ResultCodesEnum } from "../../../services/api-laravel";
import { usersAPI } from "../../../services/users-api";
import { UserType } from "../../../types/types";
import { followUnfollow } from "../../../utils/for-rdeucers/follow-unfollow";
import { AppDispatchType, RootStateType } from "../../store";
import { setTotalItemsCount } from "../paginator/paginator-reducer";


const SET_USERS = 'SET_USERS';
const FETCHING = 'FETCHING';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';


const initialState = {
    users: [] as Array<UserType>,
    isFetching: false as boolean,
    followingInProgress: [] as Array<number>, //array of users ids
}

export type UsersStateType = typeof initialState

// ACTION CREATORS

export const setUsers = (users: Array<UserType>): SetUsersType => ({ type: SET_USERS, users })
type SetUsersType = { type: typeof SET_USERS, users: Array<UserType> }

export const fetching = (bool: boolean): FetchingType => ({ type: FETCHING, bool })
type FetchingType = { type: typeof FETCHING, bool: boolean }

export const follow = (userId: number, authUser: UserType): FollowType => ({ type: FOLLOW, userId, authUser })
export type FollowType = { type: typeof FOLLOW, userId: number, authUser: UserType }

export const unFollow = (userId: number, authUser: UserType): UnfollowType => ({ type: UNFOLLOW, userId, authUser })
export type UnfollowType = { type: typeof UNFOLLOW, userId: number, authUser: UserType }

export const toggleFollowingInProgress = (userId: number, isFetching: boolean): ToggleFollowingInProgressType => ({ type: FOLLOWING_IN_PROGRESS, userId, isFetching })
export type ToggleFollowingInProgressType = { type: typeof FOLLOWING_IN_PROGRESS, userId: number, isFetching: boolean }


type ActionsTypes = SetUsersType | FetchingType | FollowType | UnfollowType | ToggleFollowingInProgressType
type GetStateType = () => RootStateType
type LocalDispatchType = Dispatch<ActionsTypes>

//THUNKS

export const requestUsers = (currentPage: number, pageSize: number) =>
    async (dispatch: AppDispatchType, getState: GetStateType) => {

        dispatch(fetching(true))
        let res = await usersAPI.getUsers(currentPage, pageSize)
        if (res && res.data) {
            if (res.data.resultCode === ResultCodesEnum.Success) {
                const users = res.data.users;
                
                dispatch(setTotalItemsCount(res.meta.total)) //from paginator reducer
                dispatch(setUsers(users))

            } else {
                alert(res.message)
            }
            dispatch(fetching(false))
        }


    }
export const followThunk = (userId: number, authUser: UserType) =>
    async (dispatch: LocalDispatchType, getState: GetStateType) => {

        dispatch(toggleFollowingInProgress(userId, true))

       const res = await usersAPI.follow(userId)
        if (res.resultCode === ResultCodesEnum.Success) {
        dispatch(follow(userId, authUser))
        }else{
            alert(res.message)
        }
        dispatch(toggleFollowingInProgress(userId, false))
    }
export const unFollowThunk = (userId: number, authUser: UserType) =>
    async (dispatch: LocalDispatchType, getState: GetStateType) => {
        dispatch(toggleFollowingInProgress(userId, true))

        const res = await usersAPI.unfollow(userId)
        if (res) {
            if (res.resultCode === ResultCodesEnum.Success) {
                dispatch(unFollow(userId, authUser))
            }else{
                alert(res.message)
            }
        }
        dispatch(toggleFollowingInProgress(userId, false))

    }

//TODO refactoring follow-unfollow-flow


//REDUCER
const usersReducer = (state: UsersStateType = initialState, action: ActionsTypes): UsersStateType => {
    let result = state

    switch (action.type) {
        case SET_USERS: result = { ...state }; result.users = action.users; return result;
        case FETCHING: result = { ...state }; result.isFetching = action.bool; return result;
        case FOLLOW: result = { ...state }; result.users = followUnfollow(state.users, action.userId, action.authUser, true); return result;
        case UNFOLLOW: result = { ...state }; result.users = followUnfollow(state.users, action.userId, action.authUser, false); return result;
        case FOLLOWING_IN_PROGRESS:
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