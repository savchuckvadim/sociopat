import { Dispatch } from "react";
import { ResultCodesEnum } from "../../../services/api-laravel";
import { usersAPI } from "../../../services/users-api";
import { UserType } from "../../../types/types";
import { followUnfollow } from "../../../utils/for-rdeucers/follow-unfollow";
import { setOnlineInAll, precenseUserUtil } from "../../../utils/for-rdeucers/users-utils";
import { AppDispatchType, InferActionsTypes, AppStateType, ThunkType } from "../../store";
import { paginatorsActions } from "../paginator/paginator-reducer";

// TYPES

export type UsersStateType = typeof initialState
export type UsersActionsTypes = InferActionsTypes<typeof usersActions>
type UsersThunkType = ThunkType<UsersActionsTypes>
type GetStateType = () => AppStateType
type LocalDispatchType = Dispatch<UsersActionsTypes>


// STATE

const initialState = {
    users: [] as Array<UserType>,
    isFetching: false as boolean,
    followingInProgress: [] as Array<number>, //array of users ids
    online: [] as Array<number>,
}


// export const PRECENSE_USER = 'PRECENSE_USER'

// ACTION CREATORS

export const usersActions = {
    setUsers: (users: Array<UserType>) => ({ type: 'SP/USERS/SET_USERS', users } as const),
    fetching: (bool: boolean) => ({ type: 'SP/USERS/FETCHING', bool } as const),
    follow: (userId: number, authUser: UserType) => ({ type: 'FOLLOW', userId, authUser } as const),
    unFollow: (userId: number, authUser: UserType) => ({ type: 'UNFOLLOW', userId, authUser } as const),
    toggleFollowingInProgress: (userId: number, isFetching: boolean) => ({ type: 'SP/USERS/FOLLOWING_IN_PROGRESS', userId, isFetching } as const),
    setOnline: (usersIds: Array<number>) => ({ type: 'SP/USERS/SET_ONLINE', usersIds } as const),
    addOnline : (userId: number) => ({ type:    'SP/USERS/ADD_ONLINE', userId } as const),
    deleteOnline : (userId: number) => ({ type: 'SP/USERS/DELETE_ONLINE', userId } as const)
}

// export const addOnline = (userId: number) => ({ type: ADD_ONLINE, userId })
// export const deleteOnline = (userId: number) => ({ type: DELETE_ONLINE, userId })

// const setPrecenseUser = (onlineUsersIds) => ({ type: PRECENSE_USER, onlineUsersIds })

//THUNKS

export const requestUsers = (currentPage: number, pageSize: number): UsersThunkType =>
    async (dispatch: AppDispatchType, getState: GetStateType) => {

        dispatch(usersActions.fetching(true))
        let res = await usersAPI.getUsers(currentPage, pageSize)
        if (res && res.data) {
            if (res.data.resultCode === ResultCodesEnum.Success) {
                const users = res.data.users;

                dispatch(paginatorsActions.setTotalItemsCount(res.meta.total)) //from paginator reducer
                dispatch(usersActions.setUsers(users))

            } else {
                alert(res.message)
            }
            dispatch(usersActions.fetching(false))
        }


    }
export const followThunk = (userId: number, authUser: UserType): UsersThunkType =>
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
export const unFollowThunk = (userId: number, authUser: UserType): UsersThunkType =>
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




//REDUCER
const usersReducer = (state: UsersStateType = initialState, action: UsersActionsTypes): UsersStateType => {
    let result = state
    let usersWithOnline = []  as Array<UserType>
    switch (action.type) {
        case "SP/USERS/SET_USERS": result = { ...state }; result.users = action.users; return result;
        case "SP/USERS/FETCHING": result = { ...state }; result.isFetching = action.bool; return result;
        case "FOLLOW": result = { ...state }; result.users = followUnfollow(state.users, action.userId, action.authUser, true); return result;
        case "UNFOLLOW": result = { ...state }; result.users = followUnfollow(state.users, action.userId, action.authUser, false); return result;
        case "SP/USERS/FOLLOWING_IN_PROGRESS":
            result = { ...state }
            result.followingInProgress = [...state.followingInProgress]

            action.isFetching ?
                result.followingInProgress.push(action.userId) :
                result.followingInProgress = state.followingInProgress.filter(id => id !== action.userId)

            return result

        //TODO:
        case 'SP/USERS/SET_ONLINE':
            let resUsersSet = setOnlineInAll(state.users, action.usersIds)
            debugger
            return { ...state, online: action.usersIds, users: resUsersSet }

        case 'SP/USERS/ADD_ONLINE':
            debugger
            if (!state.online.some(id => id === action.userId)) {
                usersWithOnline = precenseUserUtil(state.users, action.userId, true)
                let resOnlineAdd = [...state.online, action.userId]
                return { ...state, online: resOnlineAdd, users: usersWithOnline }
            } else {
                return state
            }

        case 'SP/USERS/DELETE_ONLINE':
            debugger
            let deleteResultOnline = [] as Array<number>
            let checkExistId = false;
            state.online.forEach(userId => {
                if (Number(userId) !== Number(action.userId)) {
                    deleteResultOnline.push(userId)
                } else {
                    checkExistId = true
                }
            })
            if (checkExistId) {

                usersWithOnline = precenseUserUtil(state.users, action.userId, false)

                debugger
                return { ...state, online: deleteResultOnline, users: usersWithOnline }
            } else {

                return state
            }

        // case PRECENSE_USER:
        //     const users = setOnlineInAll(state.users, action.onlineUsersIds)
        //     return { ...state, users: users }


        default:
            return result

    }

}
export default usersReducer