import { Dispatch } from "react";
import { ResultCodesEnum } from "../../../services/api-laravel";
import { usersAPI } from "../../../services/users-api";
import { UserType } from "../../../types/types";
import { followUnfollow } from "../../../utils/for-rdeucers/follow-unfollow";
import { AppDispatchType, InferActionsTypes, RootStateType, ThunkType } from "../../store";
import { paginatorsActions } from "../paginator/paginator-reducer";



export type UsersStateType = typeof initialState
export type UsersActionsTypes = InferActionsTypes<typeof usersActions>
type UsersThunkType = ThunkType<UsersActionsTypes>
type GetStateType = () => RootStateType
type LocalDispatchType = Dispatch<UsersActionsTypes>


const initialState = {
    users: [] as Array<UserType>,
    isFetching: false as boolean,
    followingInProgress: [] as Array<number>, //array of users ids
}



// ACTION CREATORS

export const usersActions = {
    setUsers: (users: Array<UserType>) => ({ type: 'SP/USERS/SET_USERS', users } as const),
    fetching: (bool: boolean) => ({ type: 'SP/USERS/FETCHING', bool } as const),
    follow: (userId: number, authUser: UserType) => ({ type: 'FOLLOW', userId, authUser } as const),
    unFollow: (userId: number, authUser: UserType) => ({ type: 'UNFOLLOW', userId, authUser } as const),
    toggleFollowingInProgress: (userId: number, isFetching: boolean) => ({ type: 'SP/USERS/FOLLOWING_IN_PROGRESS', userId, isFetching } as const),
    
}





//THUNKS

export const requestUsers = (currentPage: number, pageSize: number):UsersThunkType =>
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
export const followThunk = (userId: number, authUser: UserType):UsersThunkType=>
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
export const unFollowThunk = (userId: number, authUser: UserType):UsersThunkType =>
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


        default:
            return result

    }

}
export default usersReducer