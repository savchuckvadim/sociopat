

let initialState = [
    {
        name: 'Profile',
        link: 'profile',

    },
    {
        name: 'Messages',
        link: 'messages',

    },
    {
        name: 'People',
        link: 'users',


    },


]
export type NavMenuStateType = typeof initialState

const navMenuReducer = (state: NavMenuStateType = initialState, action: any): NavMenuStateType => {
    return state
}

export default navMenuReducer