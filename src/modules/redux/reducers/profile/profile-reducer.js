import {
    profileAPI, usersAPI
} from "../../../services/api"
import { postAPI, profileLaravelAPI, usersAPILaravel } from "../../../services/api-laravel";


const ADD_POST = 'ADD_POST';
const SET_POSTS = 'SET_POSTS';
// const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS'
// const SET_VISITED_USER = 'SET_VISITED_USER'
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_PROFILE_PAGE_DATA = 'SET_PROFILE_PAGE_DATA';
const SET_PHOTO = 'SET_PHOTO';
const LIKE = 'LIKE';
const LIKE_IN_PROGRESS = 'LIKE_IN_PROGRESS';
const DISLIKE = 'DISLIKE';


let initialState = {
    // profile: null,
    visitedUser: null,
    status: '',
    login: 'Super User',
    // about: 'Российский предприниматель. По данным Forbes, на 5 февраля 2022 года занимал 608-е место в списке наиболее состоятельных людей мира, в списке богатейших бизнесменов России в 2021 году занимал 32-е место с состоянием 4,7 миллиарда долларов. Известен как основатель «Тинькофф банка»',
    // img: 'https://avatars.mds.yandex.net/i?id=9d717e4eaa6e7edfbea31ddfc889103e_l-4728599-images-thumbs&n=13',
    // posts: [],
    likeInProgress: false
};
export const addPostActionCreator = (value) => {

    return {
        type: ADD_POST,
        value: value
    }
};

export const setPosts = (posts) => ({ type: SET_POSTS, posts });

// const setProfile = (profile, user) => ({ type: SET_PROFILE, profile, user })
const setStatus = (status) => ({ type: SET_STATUS, status });
const setPhotos = (photos) => ({ type: SET_PHOTO, photos });
// const setVisitedUser = (user) => ({ type: SET_VISITED_USER, user })
const setProfilePageData = (status, profile, user, avatar) => (
    {
        type: SET_PROFILE_PAGE_DATA,
        status,
        profile,
        user,
        avatar

    }
);

const setLike = (postId, like) => ({ type: LIKE, postId, like });
const setDislike = (like) => ({ type: DISLIKE, like });

const likeInProgress = (bool) => ({ type: LIKE_IN_PROGRESS, bool });

const profileReducer = (state = initialState, action) => {

    let result = state
    switch (action.type) {

        // case SET_PROFILE:

        //     if (state.profile) {
        //         if (state.profile.userId !== action.profile.userId) {


        //         }
        //     } else {
        //         return { ...state, profile: action.profile }
        //     }

        //     return state


        case FOLLOW:

            if (state.visitedUser) {
                result = {
                    ...state
                }
                result.visitedUser = { ...result.visitedUser }
                result.visitedUser.followed = true
                let count = 0
                result.visitedUser.followers.forEach(f => {
                    if (f.id === action.authUser.id) {    //если среди массива объектов подписчиков содержится подписчик с id auth usera делает count больше нуля
                        count++
                    }
                });

                if (!count) { //если count = 0 значит в массиве отсутствует аутентифицированный пользователь

                    result.visitedUser.followers.push(action.authUser)  //пушим аутентифицированного пользователя в массив подписчиков.push(action.authUser)

                }

                return result
            }
            return result

        case UNFOLLOW:
            if (state.visitedUser) {
                result = {
                    ...state
                }
                result.visitedUser = { ...result.visitedUser }
                result.visitedUser.followed = false
                let count = 0
                let indexOfAuthUser = undefined
                result.visitedUser.followers.forEach((f, i) => {

                    if (f.id === action.authUser.id) {    //если среди массива объектов подписчиков содержится подписчик с id auth usera делает count больше нуля
                        count++
                        indexOfAuthUser = i
                    }

                });

                if (count) { //если count !== 0 значит в массиве Есть! аутентифицированный пользователь

                    result.visitedUser.followers.splice(indexOfAuthUser, 1)  //удаляем аутентифицированного пользователя из массива подписчиков

                }
                return result
            }
            return state

        case SET_STATUS:
            if (result.status !== action.status) {

                result = { ...state }
                result.status = action.status
                return result
            }
            return state

        case SET_PHOTO:

            result = { ...state }
            result.profile = { ...state.profile }
            result.profile.photos = { ...action.photos }
            return result

        case SET_PROFILE_PAGE_DATA:


            if (result.status !== action.status) {      //status
                result = { ...state }
                result.status = action.status
            }

            // if (state.profile) {                                         //profile
            //     if (state.profile.user_id !== action.profile.user_id) {
            //         result = { ...state }
            //         result.profile = action.profile

            //     }
            // } else {
            //     result.profile = action.profile
            // }

            if (state.visitedUser) {                                        //visiteduser

                if (state.visitedUser.name !== action.user.name) {
                    result = { ...state }
                    result.visitedUser = { ...action.user, photos: { small: action.avatar, large: null } }
                }
            } else {

                result = { ...state }
                result.visitedUser = { ...action.user, photos: { small: action.avatar, large: null } }
            }

            return result

        case ADD_POST:
            result = {
                ...state
            }

            let posts = [...state.posts]

            let lastPost = action.value

            posts.unshift(lastPost)
            result.posts = posts
            return result;

        case SET_POSTS:

            state.posts = action.posts.reverse(post => ({ ...post }))
            return state
        //LIKE
        case LIKE:
            result = { ...state }

            result.posts = state.posts.map(post => {

                if (post.id === action.postId) {
                    post.isAuthLikes = true
                    post.likes = [...post.likes]
                    post.likes.push(action.like)
                    post.likesCount = post.likes.length
                }

                return post

            })
            return result
        case DISLIKE:
            result = { ...state }

            result.posts = state.posts.map(post => {

                if (post.id === action.postId) {
                    post.isAuthLikes = true
                    post.likes = [...post.likes]
                    post.likes.push(action.like)
                    post.likesCount = post.likes.length
                }

                return post

            })
            return result
        case LIKE_IN_PROGRESS:
            state.likeInProgress = action.bool
            return { ...state }

        default:
            return result;
    }
};

export const getDataForLoadProfilePage = (userId) => async (dispatch) => {

    let id = userId

    const userRes = await usersAPILaravel.getUser(id);
    const user = userRes.data
    const profile = { ...user.profile, photos: { small: null, large: null } }

    const resStatus = await profileLaravelAPI.getAboutMe(userId)  //////////////////////////////LARVEL

    const status = resStatus.data.aboutMe


    const res = await postAPI.getPosts(userId) //get posts from backend and set to state
    const avatarUrl = await usersAPILaravel.getAvatar(userId)
    const photos = {
        small: avatarUrl.data,
        large: null
    }
    profile.photos = photos
    
    if (res.data) {
        let posts = res.data
        dispatch(setPosts(posts))
    }

    dispatch(setProfilePageData(status, profile, user, avatarUrl.data))




};

export const getStatus = (userId) => async (dispatch) => {

    // const res = await profileAPI.getStatus(userId)
    const res = await profileLaravelAPI.getStatus(userId)
    const status = res.data.aboutMe

    dispatch(setStatus(status))

};

export const updateStatus = (aboutMe) => async (dispatch) => {

    // const res = await profileAPI.updateStatus(status)
    const res = await profileLaravelAPI.updateAboutMe(aboutMe)

    if (res.data.resultCode === 0) {
        dispatch(setStatus(aboutMe))
    }

};
export const loadPhoto = (photo) => async (dispatch) => {

    const res = await profileAPI.loadPhoto(photo)

    if (res.data.resultCode === 0) {
        let photos = res.data.data.photos

        dispatch(setPhotos(photos))
    }

};

export const sendPost = (userId, profileId, body, img) => async (dispatch) => {

    const res = await postAPI.sendPost(userId, profileId, body, img);

    dispatch(addPostActionCreator(res.data.data))
};

export const like = (postId) => async (dispatch) => {

    dispatch(likeInProgress(true))
    const res = await postAPI.like(postId);
    dispatch(setLike(postId, res.data.like))
    dispatch(likeInProgress(false))
};
export const dislike = (postId) => async (dispatch) => {

    dispatch(likeInProgress(true))
    const res = await postAPI.dislike(postId);

    dispatch(setDislike(res.data.removedLike))
    dispatch(likeInProgress(false))
};
export default profileReducer;