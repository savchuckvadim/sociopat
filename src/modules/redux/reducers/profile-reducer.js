
const ADD_POST = 'ADD_POST';
const SET_PROFILE = 'SET_PROFILE'
let initialState = {
    profile: {},
    login: 'Super User',
    about: 'Российский предприниматель. По данным Forbes, на 5 февраля 2022 года занимал 608-е место в списке наиболее состоятельных людей мира, в списке богатейших бизнесменов России в 2021 году занимал 32-е место с состоянием 4,7 миллиарда долларов. Известен как основатель «Тинькофф банка»',
    img: 'https://avatars.mds.yandex.net/i?id=9d717e4eaa6e7edfbea31ddfc889103e_l-4728599-images-thumbs&n=13',
    posts: [
        {
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

export const setProfile = (profile) => {
    return {
        type: SET_PROFILE,
        profile
    }
};

const profileReducer = (state = initialState, action) => {
    let result = state
    switch (action.type) {
        case SET_PROFILE:
            result = { ...state }
            result.profile = action.profile
            return result

        case ADD_POST:
            result = { ...state }

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

export default profileReducer;