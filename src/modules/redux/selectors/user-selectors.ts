import { createSelector } from "reselect"
import { RootStateType } from "../store"

export const getUsers = (state: RootStateType) => {
    return state.users.users
}
export const getUsersSelector = createSelector(getUsers, (users) => {
    return users
})

// export const getPageSize = (state) => {
//     return state.users.pageSize
// }

export const getAuthUser = (state: RootStateType) => {
    return state.auth.authUser
}

// export const getTotalUsersCount = (state) => {
//     return state.users.totalUsersCount
// }
// export const getPage = (state) => {
//     return state.users.currentPage
// }
// export const getCount = (state) => {
//     return state.users.count
// }

export const getIsFetching = (state: RootStateType) => {
    return state.users.isFetching
}

export const getIsFollowing = (state: RootStateType) => {
    return state.users.followingInProgress
}