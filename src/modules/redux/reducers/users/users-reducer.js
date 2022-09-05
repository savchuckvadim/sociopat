import { usersAPI } from "../../../services/api-laravel";
import { followUnfollow } from "../../../utils/for-rdeucers/follow-unfollow";


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


// ACTION CREATORS
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count })
export const fetching = (bool) => ({ type: FETCHING, bool })
export const follow = (userId, authUser) => ({ type: FOLLOW, userId, authUser })
export const unFollow = (userId, authUser) => ({ type: UNFOLLOW, userId, authUser })
export const toggleFollowingInProgress = (userId, isFetching) => ({ type: FOLLOWING_IN_PROGRESS, userId, isFetching })



//THUNKS
export const requestUsers = (currentPage, pageSize) => async (dispatch) => {

    dispatch(fetching(true))
    let res = await usersAPI.getUsers(currentPage, pageSize)
    if(res.resultCode === 1){
        const users = res.data.users;
        dispatch(setTotalUsersCount(res.data.totalCount))
        dispatch(setUsers(users))
       
    }else{
        alert(res.message)
    }
    dispatch(fetching(false))

}
export const followThunk = (userId, authUser) => async (dispatch) => {

    dispatch(toggleFollowingInProgress(userId, true))


    await usersAPI.follow(userId)

    // if (res === 0) {

    dispatch(follow(userId, authUser))
    // }
    dispatch(toggleFollowingInProgress(userId, false))
}
export const unFollowThunk = (userId, authUser) => async (dispatch) => {
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
const usersReducer = (state = initialState, action) => {
    let result = state

    switch (action.type) {
        case SET_CURRENT_PAGE: result = { ...state }; result.currentPage = action.page; return result;
        case SET_USERS: result = { ...state }; result.users = action.users; return result;
        case SET_TOTAL_USERS_COUNT: result = { ...state }; result.count = action.count; return result
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