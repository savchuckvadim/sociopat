import {
    profileAPI, usersAPI
} from "../../../services/api"
import { profileLaravelAPI, usersAPILaravel } from "../../../services/api-laravel";


const ADD_POST = 'ADD_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS'
const SET_VISITED_USER = 'SET_VISITED_USER'
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_PROFILE_PAGE_DATA = 'SET_PROFILE_PAGE_DATA'
const SET_PHOTO = 'SET_PHOTO'


let initialState = {
    profile: null,
    visitedUser: null,
    status: '',
    login: 'Super User',
    about: 'Российский предприниматель. По данным Forbes, на 5 февраля 2022 года занимал 608-е место в списке наиболее состоятельных людей мира, в списке богатейших бизнесменов России в 2021 году занимал 32-е место с состоянием 4,7 миллиарда долларов. Известен как основатель «Тинькофф банка»',
    img: 'https://avatars.mds.yandex.net/i?id=9d717e4eaa6e7edfbea31ddfc889103e_l-4728599-images-thumbs&n=13',
    posts: [
        // {
        //     id: 5,
        //     body: 'Не следует, однако, забывать, что граница обучения кадров позволяет выполнить важные задания по разработке существующих финансовых и административных условий. Для современного мира реализация намеченных плановых заданий напрямую зависит от стандартных подходов.',
        //     img: 'https://images.unsplash.com/photo-1557093793-e196ae071479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        // },
        // {
        //     id: 4,
        //     body: 'Каждый из нас понимает очевидную вещь: базовый вектор развития обеспечивает широкому кругу (специалистов) участие в формировании существующих финансовых и административных условий. Но непосредственные участники технического прогресса, инициированные исключительно синтетически, объявлены нарушающими общечеловеческие нормы этики и морали. Приятно, граждане, наблюдать, как некоторые особенности внутренней политики лишь добавляют фракционных разногласий и указаны как претенденты на роль ключевых факторов. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы неоднозначны и будут превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. В своём стремлении повысить качество жизни, они забывают, что высококачественный прототип будущего проекта предполагает независимые способы реализации системы массового участия. Однозначно, независимые государства лишь добавляют фракционных разногласий и заблокированы в рамках своих собственных рациональных ограничений.',
        //     img: ''
        // },
        // {
        //     id: 3,
        //     body: 'Современные технологии достигли такого уровня, что постоянный количественный рост и сфера нашей активности предоставляет широкие возможности для анализа существующих паттернов поведения. В рамках спецификации современных стандартов, сделанные на базе интернет-аналитики выводы являются только методом политического участия и объединены в целые кластеры себе подобных.',
        //     img: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
        // },
        // {
        //     id: 2,
        //     body: 'Вот вам яркий пример современных тенденций — экономическая повестка сегодняшнего дня создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса дальнейших направлений развития! Лишь тщательные исследования конкурентов и по сей день остаются уделом либералов, которые жаждут быть описаны максимально подробно. Имеется спорная точка зрения, гласящая примерно следующее: предприниматели в сети интернет представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть преданы социально-демократической анафеме. Картельные сговоры не допускают ситуации, при которой непосредственные участники технического прогресса лишь добавляют фракционных разногласий и подвергнуты целой серии независимых исследований.',
        //     img: 'https://images.unsplash.com/photo-1531778272849-d1dd22444c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=460&q=80'
        // },
        // {
        //     id: 1,
        //     body: 'Безусловно, семантический разбор внешних противодействий выявляет срочную потребность прогресса профессионального сообщества.',
        //     img: ''
        // },

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
const setPhotos = (photos) => ({ type: SET_PHOTO, photos })
const setVisitedUser = (user) => ({ type: SET_VISITED_USER, user })
const setProfilePageData = (status, profile, user) => (
    {
        type: SET_PROFILE_PAGE_DATA,
        status,
        profile,
        user

    }
)


const profileReducer = (state = initialState, action) => {

    let result = state
    switch (action.type) {

        case SET_PROFILE:

            if (state.profile) {
                if (state.profile.userId !== action.profile.userId) {


                }
            } else {
                return { ...state, profile: action.profile }
            }

            return state


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

            if (state.profile) {                                         //profile
                if (state.profile.user_id !== action.profile.user_id) {
                    result = { ...state }
                    result.profile = action.profile

                }
            } else {
                result.profile = action.profile
            }

            if (state.visitedUser) {                                        //visiteduser

                if (state.visitedUser.name !== action.user.name) {
                    result = { ...state }
                    result.visitedUser = { ...action.user, photos: { small: null, large: null } }
                }
            } else {

                result = { ...state }
                result.visitedUser = { ...action.user, photos: { small: null, large: null } }
            }

            return result

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

export const getDataForLoadProfilePage = (userId) => async (dispatch) => {

    let id = userId

    const userRes = await usersAPILaravel.getUser(id);
    const user = userRes.data
    const profile = { ...user.profile, photos: { small: null, large: null } }

    const resStatus = await profileLaravelAPI.getAboutMe(userId)   //////////////////////////////LARVEL

    const status = resStatus.data

    dispatch(setProfilePageData(status, profile, user))


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
export const loadPhoto = (photo) => async (dispatch) => {

    const res = await profileAPI.loadPhoto(photo)

    if (res.data.resultCode === 0) {
        let photos = res.data.data.photos

        dispatch(setPhotos(photos))
    }

}
export default profileReducer;