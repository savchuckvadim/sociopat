import {
    profileAPI, usersAPI
} from "../../../services/api"
import { getUserByName } from "../users/users-reducer";

const ADD_POST = 'ADD_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS'
const SET_VISITED_USER = 'SET_VISITED_USER'
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
let initialState = {
    profile: {},
    visitedUser: null,
    status: '',
    login: 'Super User',
    about: 'Российский предприниматель. По данным Forbes, на 5 февраля 2022 года занимал 608-е место в списке наиболее состоятельных людей мира, в списке богатейших бизнесменов России в 2021 году занимал 32-е место с состоянием 4,7 миллиарда долларов. Известен как основатель «Тинькофф банка»',
    img: 'https://avatars.mds.yandex.net/i?id=9d717e4eaa6e7edfbea31ddfc889103e_l-4728599-images-thumbs&n=13',
    posts: [{
        id: 5,
        body: '5 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quia nobis sint molestiae nihil modi, doloribus quaerat, illum vel consectetur minima laudantium porro deleniti adipisci rerum, sit recusandae maxime? Minima!',
        img: 'https://images.unsplash.com/photo-1557093793-e196ae071479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        id: 4,
        body: '4 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quia nobis sint molestiae nihil modi, doloribus quaerat, illum vel consectetur minima laudantium porro deleniti adipisci rerum, sit recusandae maxime? Minima!',
        img: ''
    },
    {
        id: 3,
        body: '3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quia nobis sint molestiae nihil modi, doloribus quaerat, illum vel consectetur minima laudantium porro deleniti adipisci rerum, sit recusandae maxime? Minima!',
        img: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
    },
    {
        id: 2,
        body: '2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quia nobis sint molestiae nihil modi, doloribus quaerat, illum vel consectetur minima laudantium porro deleniti adipisci rerum, sit recusandae maxime? Minima!',
        img: 'https://images.unsplash.com/photo-1531778272849-d1dd22444c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=460&q=80'
    },
    {
        id: 1,
        body: '1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quia nobis sint molestiae nihil modi, doloribus quaerat, illum vel consectetur minima laudantium porro deleniti adipisci rerum, sit recusandae maxime? Minima!',
        img: ''
    },

    ]
};
export const addPostActionCreator = (value) => {

    return {
        type: ADD_POST,
        value: value
    }
}

export const setProfile = (profile, user) => ({ type: SET_PROFILE, profile, user })
const setStatus = (status) => ({ type: SET_STATUS, status })
const setVisitedUser = (user) => ({ type: SET_VISITED_USER, user })

const profileReducer = (state = initialState, action) => {
    let result = state
    switch (action.type) {

        case SET_PROFILE:
            if (state.profile.userId !== action.profile.userId) {
                return { ...state, profile: action.profile }
            }
            return state

        case SET_VISITED_USER:
            
            if (result.visitedUser) {
                if (result.visitedUser.name !== action.user.name) {
                    return { ...state, visitedUser: action.user }
                }
            } else {

                return { ...state, visitedUser: action.user }
            }
            return state

        case FOLLOW:
           
            if (state.visitedUser) {
                result = {
                    ...state
                }
                result.visitedUser = {...result.visitedUser}
                result.visitedUser.followed = true
                return result
            }
            return state

        case UNFOLLOW:
            if (state.visitedUser) {
                result = {
                    ...state
                }
                result.visitedUser = {...result.visitedUser}
                result.visitedUser.followed = false
                return result
            }
            return state

        case SET_STATUS:
            if (result.status !== action.status) {
                return { ...state, status: action.status }
            }
            return state

        case ADD_POST:
            result = {
                ...state
            }

            let posts = [...state.posts]

            let lastPost = {
                id: posts.length + 1,
                body: action.value,
                img: ''
            }
            posts.unshift(lastPost)
            result.posts = posts
            return result


        default:
            return result;
    }
};


export const getProfileAndSetVisitedUser = (userId) => async (dispatch) => {

    const res = await profileAPI.getProfile(userId)
    const profile = res.data;
    const user = await usersAPI.getUser(profile.fullName)
    dispatch(setProfile(profile))
    dispatch(setVisitedUser(user.items[0]))



}
export const getStatus = (userId) => async (dispatch) => {

    const res = await profileAPI.getStatus(userId)
    const status = res.data

    dispatch(setStatus(status))

}

export const updateStatus = (status) => async (dispatch) => {

    const res = await profileAPI.updateStatus(status)

    if (res.data.resultCode === 0) {
        dispatch(setStatus(status))
    }

}
export default profileReducer;