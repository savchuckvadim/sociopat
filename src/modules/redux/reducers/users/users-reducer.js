import { usersAPI } from "../../../services/api";
import { usersAPILaravel } from "../../../services/api-laravel";


const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const FETCHING = 'FETCHING';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';


const initialState = {
    users: [],
    pageSize: 21,
    totalUsersCount: 1,
    currentPage: 1,
    count: 0,
    isFetching: false,
    followingInProgress: [],


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
            
            if (result.users.length > 0) {
                result.users = result.users.map(user => {
                    if (user.id === action.userId) {
                        user.followed = true
                        let count = 0
                        user.followers.forEach(f => {
                            if (f.id === action.authUser.id) {    //если среди массива объектов подписчиков содержится подписчик с id auth usera делает count больше нуля
                                count++
                            }

                        });
                        if (!count) { //если count = 0 значит в массиве отсутствует аутентифицированный пользователь
                            user.followers.push(action.authUser)  //пушим аутентифицированного пользователя в массив подписчиков
                        }
                        return user
                    } else {
                        return user
                    }
                })
            }

            return result

        case UNFOLLOW:
            result = {
                ...state
            }
            

            if (result.users.length > 0) {
                result.users = result.users.map(user => {
                    if (user.id === action.userId) {
                        user.followed = false
                        let count = 0
                        let indexOfAuthUser = undefined
                        user.followers.forEach((f, i) => {
                            
                            if (f.id === action.authUser.id) {    //если среди массива объектов подписчиков содержится подписчик с id auth usera делает count больше нуля
                                count++
                                indexOfAuthUser = i
                            }

                        });
                        if (count) { //если count !== 0 значит в массиве Есть! аутентифицированный пользователь

                            user.followers.splice(indexOfAuthUser, 1)  //удаляем аутентифицированного пользователя из массива подписчиков
                            
                        }
                        return user
                    } else {
                        return user
                    }
                })
            }

            return result

        case FOLLOWING_IN_PROGRESS:
            result = {
                ...state
            }
            result.followingInProgress = [...state.followingInProgress]

            action.isFetching
                ? result.followingInProgress.push(action.userId)
                : result.followingInProgress = state.followingInProgress.filter(id => id !== action.userId)

            return result


        default:
            return result

    }

}
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count })
export const fetching = (bool) => ({ type: FETCHING, bool })
export const follow = (userId, authUser) => ({ type: FOLLOW, userId, authUser })
export const unFollow = (userId, authUser) => ({ type: UNFOLLOW, userId, authUser })
export const toggleFollowingInProgress = (userId, isFetching) => ({ type: FOLLOWING_IN_PROGRESS, userId, isFetching })


// export const requestUsers = (currentPage, pageSize) => async (dispatch) => {

//     dispatch(fetching(true))

//     let res = await usersAPI.getUsers(currentPage, pageSize)
//             const users = res.items;
//             dispatch(setTotalUsersCount(res.totalCount))
//             dispatch(setUsers(users))
//             dispatch(fetching(false))

// }

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {

    dispatch(fetching(true))


    let res = await usersAPILaravel.getUsers(currentPage, pageSize)
    const users = res.data.data;
    dispatch(setTotalUsersCount(res.totalCount))
    dispatch(setUsers(users))
    dispatch(fetching(false))

}

// export const followThunk = (userId) => async (dispatch) => {

//     dispatch(toggleFollowingInProgress(userId, true))

//    let res = await  usersAPI.follow(userId)
//         if (res === 0) {
//             dispatch(follow(userId))
//         }
//         dispatch(toggleFollowingInProgress(userId, false))
// }
export const followThunk = (userId, authUser) => async (dispatch) => {

    dispatch(toggleFollowingInProgress(userId, true))


    await usersAPILaravel.follow(userId)
    
    // if (res === 0) {

    dispatch(follow(userId, authUser))
    // }
    dispatch(toggleFollowingInProgress(userId, false))
}

export const unFollowThunk = (userId, authUser) => async (dispatch) => {
    dispatch(toggleFollowingInProgress(userId, true))

    let res = await usersAPILaravel.unfollow(userId)

    if (res) {
        if (res.data.resultCode === 1) {

            dispatch(unFollow(userId, authUser))
        }


    }
    dispatch(toggleFollowingInProgress(userId, false))

}

export default usersReducer