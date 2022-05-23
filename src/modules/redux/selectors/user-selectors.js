export const getUsers = (state) => {
    return state.users.users
}
export const getPageSize = (state) => {
    return state.users.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.users.totalUsersCount
}
export const getPage = (state) => {
    return state.users.currentPage
}
export const getCount = (state) => {
    return state.users.count
}

export const getIsFetching = (state) => {
    return state.users.isFetching
}

export const getIsFollowing = (state) => {
    return state.users.followingInProgress
}