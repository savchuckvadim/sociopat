import { ThunkAction } from "redux-thunk"
import { ResultCodesEnum } from "../../../services/api-laravel"
import { postAPI } from "../../../services/post-api"
import { profileAPI } from "../../../services/profile-api"
import { usersAPI } from "../../../services/users-api"
import { PostType, UserType } from "../../../types/types"
import { followUnfollow } from "../../../utils/for-rdeucers/follow-unfollow"
import { likeDislikeFollow } from "../../../utils/for-rdeucers/like-dislike"
import { AppDispatchType, InferActionsTypes, AppStateType } from "../../store"




let initialState = {
    visitedUser: null as UserType | null,
    //avatar: string | null
    //aboutMe: string |null
    // status: '',
    posts: [] as Array<PostType>,
    likeInProgress: false as boolean,
    isPostSending: false as boolean,
    isProfileFetching: false as boolean,
}

export type ProfileStateType = typeof initialState

//ACTION CREATORS
export type ProfileActionsTypes = InferActionsTypes<typeof profileActions>
export const profileActions = {
    addPostActionCreator: (value: PostType) => ({ type: 'SP/PROFILE/ADD_POST', value: value } as const),
    setPosts: (posts: Array<PostType>) => ({ type: 'SP/PROFILE/SET_POSTS', posts } as const),
    setAboutMe: (aboutMe: string) => ({ type: 'SP/PROFILE/SET_ABOUT_ME', aboutMe } as const),
    setProfilePageData: (user: UserType | null) => ({ type: 'SP/PROFILE/SET_PROFILE_PAGE_DATA', user } as const),
    setLike: (postId: number) => ({ type: 'SP/PROFILE/LIKE', postId } as const),
    setDislike: (postId: number) => ({ type: 'SP/PROFILE/DISLIKE', postId } as const),
    likeInProgress: (bool: boolean) => ({ type: 'SP/PROFILE/LIKE_IN_PROGRESS', bool } as const),
    follow: (userId: number, authUser: UserType) => ({ type: 'FOLLOW', userId, authUser } as const),
    unFollow: (userId: number, authUser: UserType) => ({ type: 'UNFOLLOW', userId, authUser } as const),
    isPostSending: (bool: boolean) => ({ type: 'SP/PROFILE/POST_SENDING', bool } as const),
    isProfileFetching: (bool: boolean) => ({ type: 'SP/PROFILE/PROFILE_FETCHING', bool } as const),
}

//THUNKS
type GetStateType = () => AppStateType

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ProfileActionsTypes>

export const getDataForLoadProfilePage = (userId: number) => async (dispatch: AppDispatchType, getState: GetStateType) => {
    const state = getState()
   
    if ((state.profile.visitedUser && state.profile.visitedUser.id !== userId) || !state.profile.visitedUser) {
        dispatch(profileActions.isProfileFetching(true))
        const userRes = await usersAPI.getUser(userId)
        const postsRes = await postAPI.getPosts(userId) //get posts from backend and set to state
        let user = null
        
        if (userRes) {

            if (userRes.resultCode === ResultCodesEnum.Success) {
                user = userRes.user
            } else {
                alert(userRes.message)
            }
        }


        if (postsRes.resultCode === ResultCodesEnum.Success) {
            let posts = postsRes.posts
            dispatch(profileActions.setPosts(posts))
        } else {
            alert(postsRes.message)
        }  
        dispatch(profileActions.isProfileFetching(false))
        dispatch(profileActions.setProfilePageData(user))
    }

}

export const updateAboutMe = (aboutMe: string):
    ThunkType => async (dispatch) => {
        const res = await profileAPI.updateAboutMe(aboutMe)
        if (res.resultCode === ResultCodesEnum.Success) {
            dispatch(profileActions.setAboutMe(aboutMe))
        } else {
            alert(res.message)
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
    ThunkType => async (dispatch: any, getState) => {
        // dispatch(inProgress(true, PreloaderCodesEnum.Global))
        dispatch(profileActions.isProfileFetching(true))
        const res = await postAPI.sendPost(userId, profileId, body, img)
        if (res.resultCode === ResultCodesEnum.Success) {
            dispatch(profileActions.addPostActionCreator(res.post))
        } else {
            alert(res.message)
        }
        // dispatch(inProgress(false, PreloaderCodesEnum.Global))
        dispatch(profileActions.isProfileFetching(false))
    }


//TODO like-dislike flow , Rename dislike to likeout
export const like = (postId: number):
    ThunkType => async (dispatch, getState: GetStateType) => {
        let state = getState()
        likeDislikeFollow(true, dispatch, state, postId, profileActions.likeInProgress, profileActions.setLike, profileActions.setDislike)
    }

export const dislike = (postId: number):
    ThunkType => async (dispatch, getState: GetStateType) => {
        let state = getState()
        likeDislikeFollow(false, dispatch, state, postId, profileActions.likeInProgress, profileActions.setLike, profileActions.setDislike)
    }

//REDUCER
const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionsTypes):
    ProfileStateType => {

    let result = state
    switch (action.type) {

        case "FOLLOW":
            if (state.visitedUser) {
                result = { ...state }
                result.visitedUser =
                    followUnfollow([state.visitedUser], action.userId, action.authUser, true)[0]
            }
            return result

        case 'UNFOLLOW':
            if (state.visitedUser) {
                result = { ...state }
                result.visitedUser =
                    followUnfollow([state.visitedUser], action.userId, action.authUser, false)[0]
            }
            return result

        case "SP/PROFILE/PROFILE_FETCHING":
            if (state.isProfileFetching !== action.bool) {
                return { ...state, isProfileFetching: action.bool }
            } else {
                return state
            }

        case "SP/PROFILE/SET_ABOUT_ME":
            if (state.visitedUser) {
                if (result.visitedUser!.profile.about_me !== action.aboutMe) {
                    result = { ...state }
                    result.visitedUser = { ...state.visitedUser }
                    result.visitedUser.profile = { ...state.visitedUser.profile }
                    result.visitedUser.profile.about_me = action.aboutMe
                    return result
                }
            }

            return state

        // case SET_PHOTO:

        //     result = { ...state }
        //     result.profile = { ...state.profile }
        //     result.profile.photos = { ...action.photos }
        //     return result

        case "SP/PROFILE/SET_PROFILE_PAGE_DATA":
            if (state.visitedUser) {
                if (action.user) {
                    if (state.visitedUser.id !== action.user.id) {
                        result = { ...state }
                        result.visitedUser = action.user
                    } else {

                        return state
                    }
                }

            } else {
                result = { ...state }
                result.visitedUser = action.user
            }
            return result

        case "SP/PROFILE/ADD_POST":
            result = { ...state }
            let posts = [...state.posts]
            let lastPost = action.value
            posts.unshift(lastPost)
            result.posts = posts
            if (state.visitedUser !== null) {
                result.visitedUser = { ...state.visitedUser }
                result.visitedUser.postsCount++
            }

            return result

        case "SP/PROFILE/POST_SENDING":

            if (state.isPostSending !== action.bool) {
                return { ...state, isPostSending: action.bool }
            } else {
                return state
            }

        case "SP/PROFILE/SET_POSTS":
            // state.posts = action.posts.reverse(post => ({ ...post }))
            state.posts = action.posts.reverse()
            return state

        case "SP/PROFILE/LIKE":
            result = { ...state }
            result.posts = state.posts.map(post => {
                if (post.id === action.postId) {
                    post.isAuthLikes = true
                    post.likesCount++
                }
                return { ...post }
            })
            return result

        case "SP/PROFILE/DISLIKE":
            result = { ...state }
            result.posts = state.posts.map(post => {
                if (post.id === action.postId) {
                    post.isAuthLikes = false
                    post.likesCount > 0 && post.likesCount--
                }
                return { ...post }
            })
            return result

        case "SP/PROFILE/LIKE_IN_PROGRESS":
            state.likeInProgress = action.bool
            return { ...state }

        default:
            return result
    }
}

export default profileReducer