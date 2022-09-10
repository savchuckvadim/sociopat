import { ThunkAction } from "redux-thunk"
import { postAPI, profileAPI, usersAPI } from "../../../services/api-laravel"
import { LikeType, PostType, UserType } from "../../../types/types"
import { followUnfollow } from "../../../utils/for-rdeucers/follow-unfollow"
import { likeDislikeFollow } from "../../../utils/for-rdeucers/like-dislike"
import { AppDispatchType, RootStateType } from "../../store"
import { inProgress } from "../preloader/preloader-reducer"
import { FollowType, UnfollowType } from "../users/users-reducer"

const ADD_POST = 'ADD_POST'
const SET_POSTS = 'SET_POSTS'
const SET_STATUS = 'SET_STATUS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_PROFILE_PAGE_DATA = 'SET_PROFILE_PAGE_DATA'
const SET_PHOTO = 'SET_PHOTO'
const LIKE = 'LIKE'
const LIKE_IN_PROGRESS = 'LIKE_IN_PROGRESS'
const DISLIKE = 'DISLIKE'


let initialState = {
    visitedUser: null as UserType,
    //avatar: string | null
    //aboutMe: string |null
    // status: '',
    posts: [] as Array<PostType>,
    likeInProgress: false as boolean
}

export type ProfileStateType = typeof initialState

//ACTION CREATORS
export const addPostActionCreator = (value: PostType): AddPostActionCreatorType => ({ type: ADD_POST, value: value })
type AddPostActionCreatorType = {
    type: typeof ADD_POST,
    value: PostType

}
export const setPosts = (posts: Array<PostType>): SetPostsActionCreatorType => ({ type: SET_POSTS, posts })
type SetPostsActionCreatorType = {
    type: typeof SET_POSTS,
    posts: Array<PostType>

}
const setStatus = (status: string): SetStatusActionCreatorType => ({ type: SET_STATUS, status })
type SetStatusActionCreatorType = {
    type: typeof SET_STATUS,
    status: string

}
// const setPhotos = (photos) => ({ type: SET_PHOTO, photos })  //TODO REFACTORING
const setProfilePageData = (user: UserType): SetProfilePageDataActionCreatorType => ({ type: SET_PROFILE_PAGE_DATA, user })
type SetProfilePageDataActionCreatorType = {
    type: typeof SET_PROFILE_PAGE_DATA,
    user: UserType

}
const setLike = (postId: number): SetLikeType => ({ type: LIKE, postId }) //TODO with API 
export type SetLikeType = {
    type: typeof LIKE,
    postId: number


}

const setDislike = (postId: number): SetDislikeType => ({ type: DISLIKE, postId })  //TODO with API     
export type SetDislikeType = { type: typeof DISLIKE, postId: number }

const likeInProgress = (bool: boolean): LikeInProgressType => ({ type: LIKE_IN_PROGRESS, bool }) //TODO with API  
export type LikeInProgressType = { type: typeof LIKE_IN_PROGRESS, bool: boolean }

type ActionsTypes = AddPostActionCreatorType | SetPostsActionCreatorType |
    SetStatusActionCreatorType | SetProfilePageDataActionCreatorType |
    SetLikeType | FollowType | UnfollowType | SetDislikeType |
    LikeInProgressType

// const setProfile = (profile, user) => ({ type: SET_PROFILE, profile, user })
// const setVisitedUser = (user) => ({ type: SET_VISITED_USER, user })


//THUNKS
type GetStateType = () => RootStateType

type ThunkType = ThunkAction<Promise<void>, RootStateType, unknown, ActionsTypes>
export const getDataForLoadProfilePage = (userId: number) => async (dispatch: AppDispatchType) => {
    dispatch(inProgress(true)) //from inprogress refucer
    const userRes = await usersAPI.getUser(userId)
    const postsRes = await postAPI.getPosts(userId) //get posts from backend and set to state

    let user = null
    if (userRes.resultCode === 1) {
        user = userRes.user
    } else {
        alert(userRes.message)
    }

    if (postsRes.data) {
        if(postsRes.data.resultCode === 1){
            let posts = postsRes.data.posts   
            dispatch(setPosts(posts))
        }
        
    }
    dispatch(inProgress(false))
    dispatch(setProfilePageData(user))


}

export const updateStatus = (aboutMe: string):
    ThunkType => async (dispatch) => {
        const res = await profileAPI.updateAboutMe(aboutMe)
        if (res.data.resultCode === 0) {
            dispatch(setStatus(aboutMe))
        }

    }


//TODO REFACTORING TO LARAVEL
// export const loadPhoto = (photo) => async (dispatch) => {

//     const res = await profileAPI.loadPhoto(photo)

//     if (res.data.resultCode === 0) {
//         let photos = res.data.data.photos

//         dispatch(setPhotos(photos))
//     }

// }

export const sendPost = (userId: number, profileId: number, body: string, img: string):
    ThunkType => async (dispatch, getState) => {
        const res = await postAPI.sendPost(userId, profileId, body, img)
        dispatch(addPostActionCreator(res.data.data))
    }


//TODO like-dislike flow , Rename dislike to likeout
export const like = (postId: number):
    ThunkType => async (dispatch, getState: GetStateType) => {
        let state = getState()
        likeDislikeFollow(true, dispatch, state, postId, likeInProgress, setLike, setDislike)

    }

export const dislike = (postId: number):
    ThunkType => async (dispatch, getState: GetStateType) => {
        let state = getState()
        likeDislikeFollow(false, dispatch, state, postId, likeInProgress, setLike, setDislike)

    }

//REDUCER
const profileReducer = (state: ProfileStateType = initialState, action: ActionsTypes):
    ProfileStateType => {

    let result = state
    switch (action.type) {

        case FOLLOW:
            if (state.visitedUser) {
                result = { ...state }
                result.visitedUser =
                    followUnfollow([state.visitedUser], action.userId, action.authUser, true)[0]
            }
            return result

        case UNFOLLOW:
            if (state.visitedUser) {
                result = { ...state }
                result.visitedUser =
                    followUnfollow([state.visitedUser], action.userId, action.authUser, false)[0]
            }
            return result

        case SET_STATUS:
            if (state.visitedUser) {
                if (result.visitedUser!.profile.about_me !== action.status) {
                    result = { ...state }
                    result.visitedUser = { ...state.visitedUser }
                    result.visitedUser.profile = { ...state.visitedUser.profile }
                    result.visitedUser.profile.about_me = action.status
                    return result
                }
            }

            return state

        // case SET_PHOTO:

        //     result = { ...state }
        //     result.profile = { ...state.profile }
        //     result.profile.photos = { ...action.photos }
        //     return result

        case SET_PROFILE_PAGE_DATA:
            // if (result.status !== action.status) {      //status
            //     result = { ...state }
            //     result.status = action.status
            // }

            if (state.visitedUser) {

                if (state.visitedUser.id !== (action.user && action.user.id)) {

                    result = { ...state }
                    result.visitedUser = action.user && { ...action.user }
                } else {

                    return state
                }
            } else {
                result = { ...state }
                result.visitedUser = action.user && { ...action.user }
            }
            return result

        case ADD_POST:
            
            result = { ...state }
            let posts = [...state.posts]
            let lastPost = action.value
            posts.unshift(lastPost)
            result.posts = posts
            if(state.visitedUser !== null){
                result.visitedUser = {...state.visitedUser}
                result.visitedUser.postsCount++
            }
            
            return result

        case SET_POSTS:
            // state.posts = action.posts.reverse(post => ({ ...post }))
            state.posts = action.posts.reverse()
            return state


        //TODO 
        case LIKE:
            result = { ...state }
            result.posts = state.posts.map(post => {
                if (post.id === action.postId) {
                    post.isAuthLikes = true
                    post.likesCount++
                }
                return { ...post }
            })
            return result

        case DISLIKE:
            result = { ...state }
            result.posts = state.posts.map(post => {
                if (post.id === action.postId) {
                    post.isAuthLikes = false
                    post.likesCount > 0 && post.likesCount--
                }
                return { ...post }
            })
            return result

        case LIKE_IN_PROGRESS:
            state.likeInProgress = action.bool
            return { ...state }

        default:
            return result
    }
}

export default profileReducer