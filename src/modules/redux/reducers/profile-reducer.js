const PROFILE = 'PROFILE';
const ADD_POST = 'ADD_POST';

let initialState = {
    login: 'Super User',
    aboutMe: 'Российский предприниматель. По данным Forbes, на 5 февраля 2022 года занимал 608-е место в списке наиболее состоятельных людей мира, в списке богатейших бизнесменов России в 2021 году занимал 32-е место с состоянием 4,7 миллиарда долларов. Известен как основатель «Тинькофф банка»',
    img: 'https://avatars.mds.yandex.net/i?id=9d717e4eaa6e7edfbea31ddfc889103e_l-4728599-images-thumbs&n=13',
    posts: [
        {
            id: 5,
            body: '5 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quia nobis sint molestiae nihil modi, doloribus quaerat, illum vel consectetur minima laudantium porro deleniti adipisci rerum, sit recusandae maxime? Minima!',
        },
        {
            id: 4,
            body: '4 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quia nobis sint molestiae nihil modi, doloribus quaerat, illum vel consectetur minima laudantium porro deleniti adipisci rerum, sit recusandae maxime? Minima!',
        },
        {
            id: 3,
            body: '3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quia nobis sint molestiae nihil modi, doloribus quaerat, illum vel consectetur minima laudantium porro deleniti adipisci rerum, sit recusandae maxime? Minima!',
        },
        {
            id: 2,
            body: '2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quia nobis sint molestiae nihil modi, doloribus quaerat, illum vel consectetur minima laudantium porro deleniti adipisci rerum, sit recusandae maxime? Minima!',
        },
        {
            id: 1,
            body: '1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quia nobis sint molestiae nihil modi, doloribus quaerat, illum vel consectetur minima laudantium porro deleniti adipisci rerum, sit recusandae maxime? Minima!',
        },
     
       
       
        

    ]
};
export const addPostActionCreator = (value) => {

    return {
        type: ADD_POST,
        value: value
    }
}

export const profileActionCreator = () => {
    return {
        type: PROFILE
    }
};

const profileReducer = (state = initialState, action) => {
    let result = state
    if (action.type === PROFILE) {

    } else if (action.type === ADD_POST) {
        result = {...state}

        let posts = [...state.posts]
        let lastPost = {
            id: posts.length+1,
            body:action.value
        }
        posts.unshift(lastPost)
        result.posts = posts

    }

    return result
};

export default profileReducer;