const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const FETCHING = 'FETCHING';

const initialState = {
    users: [],
    pageSize: 18,
    totalUsersCount: 200,
    currentPage: 1,
    count: 0,
    isFetching: false

}

export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page
    }
}

export const setUsers = (users) => {

    return {
        type: SET_USERS,
        users
    }
}
export const setTotalUsersCount = (count) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count
    }
}

export const fetching = (bool) => {
    return {
        type: FETCHING,
        bool
    }
}


const usersReducer = (state = initialState, action) => {
    let result = state

    switch (action.type) {
        case SET_CURRENT_PAGE:
            result = { ...state }
            result.currentPage = action.page

            return result

        case SET_USERS:
            result = { ...state }
            result.users = action.users

            return result

        case SET_TOTAL_USERS_COUNT:
            result = { ...state }
            result.count = action.count

            return result

        case FETCHING:
            result = { ...state }
            result.isFetching = action.bool

            return result

        default:
            return result
    }

}

export default usersReducer