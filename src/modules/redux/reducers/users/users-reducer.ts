import { usersAPI } from "../../../services/api-laravel";
import { UserType } from "../../../types/types";
import { followUnfollow } from "../../../utils/for-rdeucers/follow-unfollow";
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
type SetUsersType = {
    type: typeof SET_USERS,
    users: Array<UserType>
}

export const fetching = (bool: boolean): FetchingType => ({ type: FETCHING, bool })
type FetchingType = {
    type: typeof FETCHING,
    bool: boolean
}
export const follow = (userId: number, authUser: UserType): FollowType => ({ type: FOLLOW, userId, authUser })
export type FollowType = {
    type: typeof FOLLOW,
    userId: number
    authUser: UserType
}
export const unFollow = (userId: number, authUser: UserType): UnfollowType => ({ type: UNFOLLOW, userId, authUser })
export type UnfollowType = {
    type: typeof UNFOLLOW,
    userId: number
    authUser: UserType
}
export const toggleFollowingInProgress = (userId: number, isFetching: boolean): ToggleFollowingInProgressType => ({ type: FOLLOWING_IN_PROGRESS, userId, isFetching })
type ToggleFollowingInProgressType = {
    type: typeof FOLLOWING_IN_PROGRESS,
    userId: number
    isFetching: boolean
}


//THUNKS
export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {

    dispatch(fetching(true))
    let res = await usersAPI.getUsers(currentPage, pageSize)

    if (res.data.resultCode === 1) {
        const users = res.data.users;
        dispatch(setTotalItemsCount(res.meta.total)) //from paginator reducer
        dispatch(setUsers(users))

    } else {
        alert(res.message)
    }
    dispatch(fetching(false))

}
export const followThunk = (userId: number, authUser: UserType) => async (dispatch: any) => {

    dispatch(toggleFollowingInProgress(userId, true))


    await usersAPI.follow(userId)

    // if (res === 0) {

    dispatch(follow(userId, authUser))
    // }
    dispatch(toggleFollowingInProgress(userId, false))
}
export const unFollowThunk = (userId: number, authUser: UserType) => async (dispatch: any) => {
    dispatch(toggleFollowingInProgress(userId, true))

    let res = await usersAPI.unfollow(userId)

    if (res) {
        if (res.data.resultCode === 1) {

            dispatch(unFollow(userId, authUser))
        }


    }
    dispatch(toggleFollowingInProgress(userId, false))

}




//REDUCER
const usersReducer = (state: UsersStateType = initialState, action: any): UsersStateType => {
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