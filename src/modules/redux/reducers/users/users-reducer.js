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

export const setCurrentPageActionCreator = (value) => {
    return {
        type: SET_CURRENT_PAGE,
        value
    }
}



export const setUsersAC = (users) => {

    return {
        type: SET_USERS,
        users
    }
}
export const setTotalUsersCountAC = (count) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count
    }
}

export const fetchingAC = (bool) => {
    return {
        type: FETCHING,
        bool
    }
}
// {
//     id:1,
//     name: 'Name',
//     surname: 'Surname',
//     login: 'Login',
//     followers:[],
//     following:[],
//     photo: 'https://images.unsplash.com/photo-1634498481594-e82257b5c59c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',

// }



const usersReducer = (state = initialState, action) => {
    let result = state

    switch (action.type) {
        case SET_CURRENT_PAGE:
            result = { ...state }
            result.currentPage = action.value

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