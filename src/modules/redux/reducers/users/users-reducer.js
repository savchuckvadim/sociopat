import { usersAPI } from "../../../services/api";

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const FETCHING = 'FETCHING';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

const initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 1000,
    currentPage: 1,
    count: 0,
    isFetching: false,
    followingInProgress: false

}


const usersReducer = (state = initialState, action) => {
    let result = state

    switch (action.type) {
        case SET_CURRENT_PAGE:
            result = {
                ...state
            }
            result.currentPage = action.page

            return result

        case SET_USERS:
            result = {
                ...state
            }
            result.users = action.users

            return result

        case SET_TOTAL_USERS_COUNT:
            result = {
                ...state
            }
            result.count = action.count

            return result

        case FETCHING:
            result = {
                ...state
            }
            result.isFetching = action.bool

            return result

        case FOLLOW:
            result = {
                ...state
            }
            result.users = result.users.map(user => {
                if (user.id === action.userId) {
                    user.followed = true
                    return user
                } else {
                    return user
                }
            })

            return result

        case UNFOLLOW:
            result = {
                ...state
            }
            result.users = result.users.map(user => {
                if (user.id === action.userId) {
                    user.followed = false
                    return user
                } else {
                    return user
                }
            })
            return result

        case FOLLOWING_IN_PROGRESS:
            result = {
                ...state
            }
            result.followingInProgress = action.bool

            return result


        default:
            return result

    }

}
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count })
export const fetching = (bool) => ({ type: FETCHING, bool })
export const follow = (userId) => ({ type: FOLLOW, userId })
export const unFollow = (userId) => ({ type: UNFOLLOW, userId })
export const toggleFollowingInProgress = (bool) => ({ type: FOLLOWING_IN_PROGRESS, bool })


export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
  dispatch(fetching(true))

    usersAPI.getUsers(currentPage, pageSize).then(res => {
        const users = res.items;
       dispatch(setTotalUsersCount(res.totalCount))
       dispatch(setUsers(users))
       dispatch(fetching(false))
    })

}
export default usersReducer